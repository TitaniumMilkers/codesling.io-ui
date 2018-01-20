import React, { Component } from 'react';
import io from 'socket.io-client/dist/socket.io.js';

import Sling from './Sling.jsx';

class SlingIndex extends Component {
  state = { 
    socket: null,
   }

  componentWillMount() {
    this.socket = io('http://ec2-13-56-228-82.us-west-1.compute.amazonaws.com
    :4155', {
      query: {
        roomId: this.props.location.pathname.slice(1)
      }
    });

    this.setState({ socket: this.socket });
  }

  render() {
    if (this.props.location.state) {
      return (
        <Sling socket={this.state.socket} challenge={this.props.location.state.challenge} location={this.props.location} history={this.props.history}/>
      );
    } else {
      return (
        <Sling socket={this.state.socket} challenge={{}}/>
      );
    }
  }
}

export default SlingIndex;