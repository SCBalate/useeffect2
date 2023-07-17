import React,{useState,useEffect} from 'react'
import { fakeFetch } from './Constants/SeventhConst';

function Seventh() {
    const[project,setProject]=useState([]);
    const[details,setDetails]=useState(null);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData=async()=>{
      
try{
    
    const response = await fakeFetch("https://example.com/api/projects");
    const{data} = response;
    setProject(data.projects)
}catch(err){
    console.log("unable to fetch project" + err);
}
    }

const displayDetails = async(project)=>{
setDetails(project);
}

  return (
    <div>{project.map((x,index)=>{
        return(
            <div key={index}>
            <p><b>Name : </b>{x.title}</p>
            <p><b>Description : </b>{x.description}</p>
            <button onClick={() => displayDetails(x)}>Show Details</button>
            </div>
        )
        
    })}
    {details && (
            <div>
                <h1>{details.title}</h1>
                <p>{details.description}</p>
                <ul>
                    {details?.technologies?.map((x,index)=>(
                        <li key={index}>{x}</li>
                    ))}
                </ul>
                <div>Completed : {details.completed ? "Yes" : "No"}</div>
            </div>
        )}
    </div>
  )
}

export default Seventh