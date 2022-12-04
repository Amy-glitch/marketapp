
import React,{useContext} from 'react'
import { StyleSheet, Text, View, Button, Image} from 'react-native';

const ItemComp = (props)=>{
    
return <>
<View style={styles.block}>
<Text style={styles.head}>{props.item.title}</Text>
<View style={styles.imgView}>
<Image  style={styles.img} source={{uri:'https://stickerly.pstatic.net/sticker_pack/kd7ZooCY2IKkjvCjsszw/T01DIS/7/6fac0144-9bd1-40f5-b968-885621484b39.png'}}/>
</View>
<Text style={styles.price}>R {props.item.price}</Text>
<Text style={styles.desc}> {props.item.desc} </Text>
</View>
</>
}
//

const styles=StyleSheet.create({
    imgView:{
    alignItems:'center'
    },
    desc:{
        fontSize:16,
        color: "rgb(150,150,150)",
        margin:10
    
        },
    head:{
        fontSize: 25,
        margin:5
     
    },
    price:{
        fontSize: 20, 
        margin:5
    },

   
    block:{
        backgroundColor:"rgb(230,230,230)",
        margin:20,
        borderRadius:5
        
    }, img: {
        width: 300,
        height: 250,
        borderRadius: 5

      }
})

export default ItemComp;