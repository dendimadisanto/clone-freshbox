import * as React from 'react';
import {
  Text, 
  View,
  SafeAreaView } from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';

export default class Caraousel extends React.Component {

 
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              title:"Item 1",
              text: "Text 1",
          },
          {
              title:"Item 2",
              text: "Text 2",
          },
          {
              title:"Item 3",
              text: "Text 3",
          },
          {
              title:"Item 4",
              text: "Text 4",
          },
          {
              title:"Item 5",
              text: "Text 5",
          },
        ]
      }
    }

    _renderItem({item,index}){
        return (
          <View style={{
              backgroundColor:'floralwhite',
              height: '100%',
              marginRight:-22
              }}>
            <Text style={{fontSize: 30}}>{item.title}</Text>
            <Text>{item.text}</Text>
          </View>

        )
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection:'column'}}>
                <View style={{ flex:1 }}>
                    <Carousel
                    layout={"default"}
                    ref={ref => this.carousel = ref}
                    data={this.state.carouselItems}
                    sliderWidth={400}
                    itemWidth={400}
                    renderItem={this._renderItem}
                    onSnapToItem = { index => this.setState({activeIndex:index}) } />
                </View>
                <View style={{  position: 'absolute', bottom: -10, left:0, right:0}}>
                <Pagination
                    dotsLength={this.state.carouselItems.length}
                    activeDotIndex={this.state.activeIndex}
                    dotStyle={{
                        width: 7,
                        height: 7,
                        borderRadius: 5,
                        marginHorizontal: -10,
                        backgroundColor: 'red'
                    }}
                    inactiveDotStyle={{
                        // Define styles for inactive dots here
                        backgroundColor: 'grey'
                    }}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                    />
                </View>
                
        </View>
        
        );
    }
}