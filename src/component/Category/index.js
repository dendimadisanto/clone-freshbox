import * as React from 'react';
import {
  Text, 
  View,
  SafeAreaView,
  Image
} from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Dimensions } from "react-native"; 



export default class Category extends React.Component {

   
 
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
              height: 250,
              marginRight:-22,
              padding:25
              }}>
                  <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                    <View style={{marginRight:Math.round(Dimensions.get('window').width) / 10, marginBottom:30, alignItems:'center'}}>
                        <Image style={{height:50, width:50}}source={require('../../assets/icon/fruit.png')}></Image>
                        <Text style={{fontFamily:'Antonio-Reguler'}}>Fruits</Text>
                    </View>
                    <View style={{marginRight:Math.round(Dimensions.get('window').width) / 10, marginBottom:30, alignItems:'center'}}>
                        <Image style={{height:50, width:50}}source={require('../../assets/icon/fruit.png')}></Image>
                        <Text style={{fontFamily:'Antonio-Reguler'}}>Fruits</Text>
                    </View>
                    <View style={{marginRight:Math.round(Dimensions.get('window').width) / 10, marginBottom:30, alignItems:'center'}}>
                        <Image style={{height:50, width:50}}source={require('../../assets/icon/fruit.png')}></Image>
                        <Text style={{fontFamily:'Antonio-Reguler'}}>Fruits</Text>
                    </View>
                    <View style={{marginRight:Math.round(Dimensions.get('window').width) / 10, marginBottom:30, alignItems:'center'}}>
                        <Image style={{height:50, width:50}}source={require('../../assets/icon/fruit.png')}></Image>
                        <Text style={{fontFamily:'Antonio-Reguler'}}>Fruits</Text>
                    </View>
                    <View style={{marginRight:Math.round(Dimensions.get('window').width) / 10, marginBottom:30, alignItems:'center'}}>
                        <Image style={{height:50, width:50}}source={require('../../assets/icon/fruit.png')}></Image>
                        <Text style={{fontFamily:'Antonio-Reguler'}}>Fruits</Text>
                    </View>
                    <View style={{marginRight:Math.round(Dimensions.get('window').width) / 10, marginBottom:30, alignItems:'center'}}>
                        <Image style={{height:50, width:50}}source={require('../../assets/icon/fruit.png')}></Image>
                        <Text style={{fontFamily:'Antonio-Reguler'}}>Fruits</Text>
                    </View>
                    <View style={{marginRight:Math.round(Dimensions.get('window').width) / 10, marginBottom:30, alignItems:'center'}}>
                        <Image style={{height:50, width:50}}source={require('../../assets/icon/fruit.png')}></Image>
                        <Text style={{fontFamily:'Antonio-Reguler'}}>Fruits</Text>
                    </View>
                    <View style={{marginRight:Math.round(Dimensions.get('window').width) / 10, marginBottom:30, alignItems:'center'}}>
                        <Image style={{height:50, width:50}}source={require('../../assets/icon/fruit.png')}></Image>
                        <Text style={{fontFamily:'Antonio-Reguler'}}>Fruits</Text>
                    </View>
                  </View>
           
          </View>

        )
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection:'column'}}>
                 <View style={{height:50, flexDirection:'row'}}>
                    <View style={{ flex:1, justifyContent:'center'}}>
                        <Text style={{marginLeft:20, color:'#4d4b48',fontFamily:'Antonio-Reguler'}}>Categories</Text>
                    </View>
                </View>
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