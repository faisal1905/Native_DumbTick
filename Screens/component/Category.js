import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Segment, Content, Text } from 'native-base';

export default class SegmentOutsideHeaderExample extends Component {
  render() {
    return (
      
        
        <Segment>
          <Button first>
            <Text>Sport</Text>
          </Button>
          <Button>
            <Text>Music</Text>
          </Button>
          <Button last>
            <Text>Sience</Text>
          </Button>
          <Button last>
            <Text>Tech</Text>
          </Button>
        </Segment>
        
     
    );
  }
}
