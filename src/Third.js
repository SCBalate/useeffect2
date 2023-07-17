import React,{useState,useEffect} from 'react'
import { fakeFetch } from './Constants/ThirdConstant'

function Third() {
    const[habits,setHabits] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
try{
const response= await fakeFetch("https://example.com/api/habits");
const{data} = response;
setHabits(data.habits);
}catch(err){
    console.log("error while fetching habits: " + err)
}
    }
  return (
    <div>{
        habits.map((x)=>{
            return(
                <div>
            <h1>{x.name}</h1>
            <p>{x.desc}</p>
            <p><b>Days Followed : </b>{x.daysFollowed}</p>
            <p><b>Days Skipped: </b>{x.daysSkipped}</p>
            </div>
            )
            
        })
        }</div>
  )
}

export default Third