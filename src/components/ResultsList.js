import React from 'react'
import {Text,StyleSheet,View,FlatList,TouchableOpacity} from 'react-native'
import ResultsDetail from './ResultsDetail'
import {withNavigation} from 'react-navigation'
const ResultsList=({title,results,navigation})=>{
    if(!results.length){
        return null
    }
    return <View style={{marginVertical: 10}}>
        <Text style={styles.title}>{title}</Text>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(result)=>{return result.id}}
            renderItem={({item})=>{
                return <TouchableOpacity 
                onPress={()=>{navigation.navigate('resultShow',{id:item.id})}}>
                    <ResultsDetail result={item}/></TouchableOpacity>
            }}

        />
    </View>
}
const styles= StyleSheet.create({
    title:{
        fontSize: 18,
        fontWeight:"bold",
        marginLeft:15
    }
})

export default withNavigation(ResultsList); 