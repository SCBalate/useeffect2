import React,{useState,useEffect} from 'react';
import { fakeFetch } from './Constants/EighthConst'

function Eighth() {
const[user,setUser]=useState([]);

useEffect(()=>{
    fetchData()
},[])

const fetchData = async()=>{
    const response = await fakeFetch("https://example.com/api/profile");
    // const{data}=response;
    setUser(response.data.profiles);
}

const updateName=()=>{
    setUser(PrevUser =>({...PrevUser, name : "Emily"}));
}

 return user && (
    <div>
<div>{user.name}</div>
<div>{user.age}</div>
<div>{user.gender}</div>
<div>{user.email}</div>
<div>{user.occupation}</div>
<button onClick={updateName}>Update name</button>

    </div>
  )
 
}

export default Eighth