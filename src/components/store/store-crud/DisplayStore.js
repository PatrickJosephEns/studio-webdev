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

class DisplayStore extends React.Component {
    displayStore() {

        return <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{this.props.data.store_name}</Typography>
            </AccordionSummary>

            <AccordionDetails>
                {this.owner_panel()}
            </AccordionDetails>

            <AccordionDetails>
                <ReadStoreItems store_id={this.props.data.id} />
            </AccordionDetails>
        </Accordion>
    }

    owner_panel() {
        if (this.props.data.owner_id == firebase.auth().currentUser.uid) {
            return <>
                <DeleteButton data={this.props.data} db={this.props.db} />
                <EditButton store_name={this.props.data.store_name} id={this.props.data.id} db={this.props.db} />
                <AddButton store_id={this.props.data.id} store_name={this.props.data.store_name} db={this.props.db} />
            </>
        }
    }

    render() {
        return (<div>
            {this.displayStore()}
        </div>)
    }
}

export default DisplayStore