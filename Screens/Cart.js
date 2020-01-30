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
} from 'native-base';

import Footer from './component/Footer';

export default class Cart extends Component {
  render() {
    return (
      <Content>
        <Card style={{flex: 0}}>
          <CardItem>
            <Body>
              <Image
                source={{
                  uri:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSDBCzSvKEZHwhH-9-m6ShtGm66ZHxKN6QBjcNIc__a2D3n5xyH',
                }}
                style={{height: 200, width: 320, flex: 0}}
              />
              <Text>
              DIDI KEMPOT siap untuk membuat kita bergoyang, ayoo pesan ticketnya!!
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
      </Content>
      
    );
  }
}
