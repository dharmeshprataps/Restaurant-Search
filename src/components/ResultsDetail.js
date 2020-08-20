import React from 'react'
import {View,Image,TouchableOpacity,StyleSheet,Text} from 'react-native'

const ResultsDetail=({result})=>{
    return <View style={styles.container}>
        <Image style={styles.image} source={{uri: result.image_url}}/>
        <Text style={styles.name}>{result.name}</Text>
        <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
}
const styles=StyleSheet.create({
    image:{
        width :250,
        borderRadius: 5,
        height: 120
    },
    name:{
        fontSize: 14,
        fontWeight: "bold",
    },
    container:{
        marginLeft: 15
    }
})
export default ResultsDetail;