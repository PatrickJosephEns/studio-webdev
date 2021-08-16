import './home.css'
import React from 'react'

import Display_model from './display_model';
import CreateStore from '../../store/create';
import { ReactThreeFiber } from '@react-three/fiber';
import ReadStores from '../../store/read';


const Row = ({ children }) => <div className="row justify-content-center">{children}</div>
class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <div id="home">
          <Display_model />
          <div class="title">
            <p class="header">The Mall</p>
            <p class="paragraph">Experience the future of shopping</p>
          </div>
        </div>

        <Row>
          <CreateStore db={this.props.db} />
        </Row>
        <Row>
          <ReadStores />
        </Row>
      </>
    );
  }
}

export default Home;