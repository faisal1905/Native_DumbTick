import React, {Component} from 'react';
import {Image} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body,
  View,
} from 'native-base';

export default class Today extends Component {
  render() {
    return (
      <Content>
        <Card style={{flex: 0}}>
          <CardItem>
            <Body>
              <Image
                source={{
                  uri:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-uqcYqChSadlpPodXNzCwWGAZDIMTDWMjwBZO4ASIqQthHwAI',
                }}
                style={{height: 200, width: 320, flex: 1}}
              />
              <Text>
                Konser Westlife datang lagi!! ayo pesan ticketnya sekarang!!
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent textStyle={{color: 'yellow'}}>
                <Icon name="cart" />
                <Text>Booking</Text>
              </Button>
            </Left>
            <Right>
              <Button transparent textStyle={{color: 'yellow'}}>
                <Text>300000</Text>
              </Button>
            </Right>
          </CardItem>
        </Card>
        <View style={{height: 90}}></View>
      </Content>
    );
  }
}
