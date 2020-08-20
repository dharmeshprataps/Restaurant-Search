import {useEffect,useState} from 'react'
import yelp from '../api/yelp'

export default ()=>{
    const [results,setResults]=useState([])
    const [error,setError]=useState("")

    const searchApi= async(searchTerm)=>{
        try{
            console.log(searchTerm)
            const response=await yelp.get('/search',{
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'delhi'
                }
            })
            setResults(response.data.businesses)
        }
        catch(err){
            console.log(err)
            setError("Something Went Wrong!!!")        
        }
    }
   
    useEffect(()=>{searchApi('pasta')},[])
    return [searchApi,results,error]
}