import React, {Component} from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Card,
  CardItem,
  Text,
  H1,
} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';

import Footer from './component/Footer';
import Content from './Content/Content';
import Search from './component/Search';
import Category from './component/Category';
import Today from './Content/Today';
import Upcomming from './Content/Upcomming';


export default class HeaderIconExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title style={{marginLeft:30}}>KonserLink</Title>
          </Body>
          <Right></Right>
        </Header>
        <ScrollView>
          <Search />
          <Category />
          <Text style={{fontWeight: 'bold', textAlign: 'left', marginLeft: 30}}>
            <H1>HightLight:</H1>
          </Text>
          <Content navigation = {this.props.navigation}/>

          <Text style={{fontWeight: 'bold', textAlign: 'left', marginLeft: 30}}>
            <H1>Today:</H1>
          </Text>
           <Today/>

            <Text style={{fontWeight: 'bold', textAlign: 'left', marginLeft: 30}}>
              <H1>Upcomming:</H1>
            </Text>
          <Upcomming/>

        </ScrollView>
        <Footer navigation = {this.props.navigation} />
      </Container>
    );
  }
}
