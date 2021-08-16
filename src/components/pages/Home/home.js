import './home.css'
import React from 'react'

import Display_model from './display_model';
import CreateStore from '../../store/create';
import { ReactThreeFiber } from '@react-three/fiber';

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="home">
        <Display_model />
        <div class="title">
          <p class="header">The Mall</p>
          <p class="paragraph">Experience the future of shopping</p>
        </div>

        <CreateStore db={this.props.db} />
      </div>
    );
  }
}

export default Home;