import React from 'react';
import firebase from "@firebase/app";

// Material UI
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import ReadStoreItems from '../item-crud/ReadItems';
import AddButton from '../item-crud/CreateButton';
import Tooltip from '@mui/material/Tooltip';


class DisplayStore extends React.Component {
    displayStore() {

        return <Accordion defaultExpanded={true} sx={{ gap: 2 }}>
            <Tooltip title="Click to toggle this shop" placement="bottom">
                <AccordionSummary>
                    {/*                 Store name             check the currentUser isnt null first, If the owner of the shop is the user, tell them its there store, otherwise nothing */}
                    <Typography>{this.props.data.store_name} {firebase.auth().currentUser ? (this.props.data.owner_id == firebase.auth().currentUser.uid ? "(Your Store)" : null) : null}</Typography>
                </AccordionSummary>
            </Tooltip>

            <AccordionDetails>
                {this.owner_panel()}
            </AccordionDetails>

            <AccordionDetails>
                <ReadStoreItems store_id={this.props.data.id} owner_id={this.props.data.owner_id} storage={this.props.storage} db={this.props.db} />
            </AccordionDetails>
        </Accordion>
    }

    owner_panel() {
        if (firebase.auth().currentUser) {
            if (this.props.data.owner_id == firebase.auth().currentUser.uid) {
                return <>
                    <DeleteButton data={this.props.data} db={this.props.db} />
                    <EditButton store_name={this.props.data.store_name} id={this.props.data.id} db={this.props.db} />
                    <AddButton store_id={this.props.data.id} store_name={this.props.data.store_name} db={this.props.db} storage={this.props.storage} />
                </>
            }
        }
    }

    render() {
        return (<div>
            {this.displayStore()}
        </div>)
    }
}

export default DisplayStore