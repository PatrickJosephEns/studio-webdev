import React from 'react';
import { FirestoreCollection } from 'react-firestore';

import firebase from "@firebase/app"
import './user_store.css'

// Material UI
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';

class DisplayUserStore extends React.Component {
    constructor(props) {
        super(props)
    }

    displayStore() {

        return <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{this.props.data.store_name}</Typography>
            </AccordionSummary>

            <AccordionDetails>
                <DeleteButton data={this.props.data} db={this.props.db}/>
                <EditButton store_name={this.props.data.store_name} />

                <ul>
                    <li class="storeItem">
                        Category 1
                    </li>
                    <li class="storeItem">
                        Category 2
                    </li>
                    <li class="storeItem">
                        Category 3
                    </li>
                </ul>
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