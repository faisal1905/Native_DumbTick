import React, {Component} from 'react';
import {Image} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  View,
  Text,
  Button,
  Icon,
  Left,
  Body,
  H3,
  Segment,
  Right,
  Title,
} from 'native-base';

export default class Detail extends Component {
  constructor() {
    super();
    this.state = {
      num: 1,
    };
  }

  handlePress = () => {
    if (this.state.num < 10) {
      this.setState({num: this.state.num + 1});
    } else {
      alert('Pembelian ticket terlalu banyak!');
    }
  };

  DECREMENT = () => {
    if (this.state.num > 1) {
      this.setState({num: this.state.num - 1});
    }
  };

  Checkout = () => {
    alert('TIKET ANDA SEDANG KAMI PROSES');
  };

  render() {
    const {num} = this.state;
    console.log(num);
    return (
      <Container>
        <Header>
        <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title >Detail</Title>
          </Body>
        </Header>
        <Content>
          <Card style={{flex: 0}}>
            
            <CardItem>
              <Body>
                <Image
                  source={{
                    uri:
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_97cSybuciUoSCOOyVg51cWUAKNCKKRwH4waFKaGFDJcURjkC',
                  }}
                  style={{height: 200, width: 320, flex: 1}}
                />

                <Card>
                  <CardItem style={{alignContent: 'stretch'}}>
                    <Button
                      bordered
                      style={{width: 50, height: 30, marginRight: 10}}
                      onPress={this.handlePress}>
                      <Icon name="add" />
                    </Button>
                    <Button
                      bordered
                      style={{width: 50, height: 30}}
                      onPress={this.DECREMENT}>
                      <Icon name="remove" />
                    </Button>

                    <Text style={{marginLeft: 90}}>
                      IDR.{this.state.num * 300000}
                    </Text>
                  </CardItem>
                  <CardItem>
                    <H3>{this.state.num}TICKET</H3>
                    <Button
                      bordered
                      style={{width: 50, height: 30, marginLeft: 20}}
                      onPress={this.Checkout}>
                      <Icon name="film" />
                    </Button>
                  </CardItem>
                </Card>

                <Text>
                  <H3>Description:</H3>
                </Text>
                <Text>isi Description</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
