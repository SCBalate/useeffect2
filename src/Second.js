import React from 'react'
import { fakeFetch } from './Constants/SecondConst'
import{useState,useEffect} from 'react'

function Second() {
    const [todos,setTodos] = useState([]);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData=async()=>{
      
        try{
            const response = await fakeFetch("https://example.com/api/todos");
            const{data}=response;
            setTodos(data?.todos);
        
        }catch(err){
            console.log("error while fetching todos" + err)
        }
    }
  return (
    <div>{
        todos?.map((x,index)=>{
            return(<>
            <h3 key={index}>{x?.title} : {x?.desc}</h3>
            <ol>
                {x?.todos?.map((x,index)=>{
                    return(
                        <li key={index}>{x}</li>
                    )
                })}
            </ol>
            <hr/>
            </>)
        })
    }</div>
  )
}

export default Second