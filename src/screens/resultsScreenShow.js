import React,{useState,useEffect} from 'react'
import {Text,View,ScrollView,Image,FlatList,StyleSheet} from 'react-native'
import yelp from '../api/yelp'

const resultsScreeenShow=({navigation})=>{
    const [result,setResult]=useState(null)
    const Id=navigation.getParam('id')
    const getResult=async (Id)=>{
        const response= await yelp.get(`/${Id}`);
        setResult(response.data);
    }
    useEffect(()=>{
        getResult(Id)
    },[])
    if(!result){
        return null;
    }
    return <ScrollView>
        <Text style={styles.Text}>{result.name}</Text>
        <FlatList 
            data={result.photos}
            keyExtractor={(photo)=>{return photo}}
            renderItem={({item})=>{
                return <Image style={styles.image} source={{uri:item}}/>
            }}
        />
    </ScrollView>
}

const styles=StyleSheet.create({
    image:{
        height: 200,
        width: 300,
        borderRadius: 5,
        marginLeft: 15,
        marginVertical: 5
    },
    Text: {
        fontSize: 18,
        fontWeight: "bold",
        margin : 15
    }
});

export default resultsScreeenShow;