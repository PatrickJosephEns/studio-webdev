import React from 'react';

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

class DisplayUserStore extends React.Component {
    displayStore() {

        return <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{this.props.data.store_name}</Typography>
                <DeleteButton data={this.props.data} db={this.props.db}/>
                <EditButton store_name={this.props.data.store_name} id={this.props.data.id} db={this.props.db} />
                <AddButton store_id={this.props.data.id} store_name={this.props.data.store_name} db={this.props.db}/>

            </AccordionSummary>

            <AccordionDetails>
                {/* Make an owner panel, and if the user is the owner, let them access these */}
               
                <ReadStoreItems store_id={this.props.data.id}/>
            </AccordionDetails>
        </Accordion>
    }

    render() {
        return (<div>
            {this.displayStore()}
        </div>)
    }
}

export default DisplayUserStore