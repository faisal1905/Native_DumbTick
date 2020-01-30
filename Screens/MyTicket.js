import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, View, Title, Right } from 'native-base';

import Footer from './component/Footer';

export default class CardShowcaseExample extends Component {
  render() {
    return (
      <Container>

        <Header>
        <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>My Ticket</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>

        <Content style={{backgroundColor:"#9eabff"}}>
          <Card style={{flex: 0,}}>
         
           <View >
             
           <CardItem>
             <Left>
           
              <Body>
                <Image source={{uri: 'https://id.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/basic_market/generator/dist/generator/assets/images/websiteQRCode_noFrame.png'}} style={{height: 100, width: 100, flex: 0}}/>               
              </Body>
              
              </Left>
              <Right>
                <Text>
                  The International Champoinhsips 2019 
                </Text>
                <Text>
                  12-09 2019
                </Text>
                
                </Right>
                </CardItem> 
                <Text style={{marginLeft: 50}}>
                  Jakarta convention center
                </Text>
           </View>
           
            
          </Card>
        </Content>
        <Footer/>
      </Container>
    );
  }
}