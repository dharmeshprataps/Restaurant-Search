import React from 'react'
import {View,TextInput ,StyleSheet} from 'react-native'
import {Ionicons} from '@expo/vector-icons'


const SearchBar=({term,onTermChange,onTermSubmit})=>{
    
    return <View style={styles.background}>
        <Ionicons name="md-search" style={styles.iconsStyle}/>
        <TextInput style={styles.inputStyle} 
        placeholder="Search"
        value={term}
        onChangeText={(newTerm)=>{onTermChange(newTerm)}}
        autoCapitalize="none"
        autoCorrect ={false}
        onEndEditing={()=>{onTermSubmit(term)}}
        ></TextInput>
    </View>
}

const styles=StyleSheet.create({
    background:{
        marginTop:12,
        backgroundColor: "#F0EEEE",
        flexDirection: 'row',
        borderRadius: 5,
        marginHorizontal: 15,
        height: 50,
        marginBottom: 10
    },
    inputStyle:{
        fontSize:18,
        flex:1
    },
    iconsStyle:{
        fontSize: 38,
        alignSelf: 'center',
        marginHorizontal:15
    }
})

export default SearchBar;