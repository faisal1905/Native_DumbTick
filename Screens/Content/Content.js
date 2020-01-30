import React, {Component} from 'react';
import {Image, View} from 'react-native';
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
  Right,
  Title,
} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';



export default class CardImageExample extends Component {

  handlePress =() =>{
   this.props.navigation.navigate('Detail')
  }

  render() {
    return (
      <View>
        <ScrollView>
          <Content>
            <Card>
              <CardItem cardBody>
                <Image
                  source={{
                    uri:
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_97cSybuciUoSCOOyVg51cWUAKNCKKRwH4waFKaGFDJcURjkC',
                  }}
                  style={{height: 200, width: 100, flex: 1}}
                />
              </CardItem>
              <Card>
                <Button block 
                onPress={this.handlePress}
                >
                  <Text>See Detail</Text>
                </Button>
              </Card>
            </Card>

            <Card>
              <CardItem cardBody>
                <Image
                  source={{
                    uri:
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-uqcYqChSadlpPodXNzCwWGAZDIMTDWMjwBZO4ASIqQthHwAI',
                  }}
                  style={{height: 200, width: 100, flex: 1}}
                />
              </CardItem>
              <Card>
                <Button block>
                  <Text>See Detail</Text>
                </Button>
              </Card>
            </Card>

            <Card>
              <CardItem cardBody>
                <Image
                  source={{
                    uri:
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQdoOM5wvhzr0hBWbn6z_7hk_5aIFSOaJxOmPA7-MB1wqaliSC',
                  }}
                  style={{height: 200, width: 100, flex: 1}}
                />
              </CardItem>
              <Card>
                <Button block>
                  <Text>See Detail</Text>
                </Button>
              </Card>
            </Card>
          </Content>
        </ScrollView>
        <View style={{height: 100}}></View>
      </View>
    );
  }
}
