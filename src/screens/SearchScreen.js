import React, {useState} from 'react'
import {Text,View,StyleSheet,ScrollView} from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen=()=>{
    const [term,setTerm]=useState("")
    const [serachApi,results,error]=useResults(); 
    const filterResultByPrice = (price)=>{
        return results.filter((result)=>{
            return result.price===price;
        })
    }
    return <>
        <SearchBar term={term} onTermChange={(newTerm)=>{setTerm(newTerm)}}
         onTermSubmit={()=>{serachApi({term}.term)}}/>
        {error ? <Text style={styles.text}>{error}</Text>: null}
        <ScrollView>
            <ResultsList results={filterResultByPrice('$')} title="Cost Effective"/>
            <ResultsList results={filterResultByPrice('$$')} title="Bit Pricer"/>
            <ResultsList results={filterResultByPrice('$$$')} title="Big Spender"/>
        </ScrollView>
    </>
}

const styles=StyleSheet.create({
    text:{
        fontSize: 20
    }
})

export default SearchScreen;