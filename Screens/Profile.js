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
  Body,
  Title,
  View,
  H1,
  Right,
} from 'native-base';

import Today from './Content/Today';
import Footer from './component/Footer';

export default class CardImageExample extends Component {
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
            <Title>Profile</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>
        <Content>
          <Card>
            <View alignItems="center">
              <CardItem>
                <Thumbnail
                  style={{
                    height: 200,
                    width: 200,
                    borderRadius: 100,
                    alignItems: 'center',
                  }}
                  large
                  source={{
                    uri:
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPB290eaegloyqa5xHs6q_KTb7gqbSZU2Y6LiVDRTdmWFJT_eM',
                  }}
                />
              </CardItem>
            </View>

            <View style={{marginLeft: 20}}>
              <CardItem cardBody></CardItem>

              <Text>@ardhifaisal</Text>
              <Text>Faisal Ardhi Baihaqi</Text>
              <Text>"Living for Need, not Desires"</Text>
            </View>
            <View style={{height: 90}}></View>
            <Text
              style={{fontWeight: 'bold', textAlign: 'left', marginLeft: 30}}>
              <H1>Favorites:</H1>
            </Text>
          </Card>
          <Today />
        </Content>
        <Footer/>
      </Container>
    );
  }
}
