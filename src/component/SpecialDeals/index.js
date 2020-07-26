import * as React from 'react';
import {
  Text, 
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet
} from 'react-native';

import Item from '../Item';

export default class SpecialDeals extends React.Component {

 
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


    render() {
        return (
            <View style={{ flex: 1, flexDirection:'column'}}>
                <View style={{height:50, flexDirection:'row'}}>
                    <View style={{ flex:1, justifyContent:'center'}}>
                        <Text style={{marginLeft:20, color:'#4d4b48',fontFamily:'Antonio-Reguler'}}>Special Deals !</Text>
                    </View>
                    <View style={{flex:1, justifyContent:'flex-end', flexDirection:'row', alignItems:'center'}}>
                        <TouchableOpacity style={{marginRight:20}}>
                            <Text style={{color:'#d10442', fontFamily:'Antonio-Regular'}}>Lihat Semua</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex:1}}>
                   <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{padding:10}}>
                    <View style={{marginRight:10}}>
                            <Item></Item>
                    </View>
                    <View style={{marginRight:10}}>
                            <Item></Item>
                    </View>
                    <View style={{marginRight:10}}>
                            <Item></Item>
                    </View>
                    </ScrollView>
                </View>
                
        </View>
        
        );
    }
    
}


