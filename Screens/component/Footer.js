import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
} from 'native-base';
export default class FooterTabsIconExample extends Component {
 
  handlePress =() =>{
    this.props.navigation.navigate('Profile')
   }

   MyTicket =() =>{
    this.props.navigation.navigate('MyTicket')
   }

   Cart =() =>{
    this.props.navigation.navigate('Cart')
   }

  render() {
    return (
      <Footer>
        <FooterTab>
          <Button active onPress={this.Cart}>
            <Icon name="cart" />
          </Button>
          <Button active onPress={this.MyTicket}>
            <Icon active name="film" />
          </Button>
          <Button active onPress={this.handlePress}>
            <Icon name="person" />
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
