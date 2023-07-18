import React ,{useState,useEffect}from 'react'
import { fakeFetch } from './Constants/TenthConst'

function Tenth() {
    const[post,setPost]=useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async()=>{
try{
    const reponse = await fakeFetch("https://example.com/api/profile");
    const{data}= reponse;
    setPost(data.profile)
}catch(err){
    console.log("error while fetching profiles: " + err)
}
    }

    const onFollow=()=>{
        setPost(prevPost =>({...prevPost,followers:prevPost.followers+1}))
    }

  return post &&(
    <div>
        <div> {post.name}</div>
        <div>{post.age}</div>
        <div>{post.gender}</div>
        <div>{post.email}</div>
        <div>{post.occupation}</div>
        <div>{post.followers}</div>
        <div>{post.followedBy}</div>
        <button onClick={onFollow}>Follow John</button>
    </div>
  )
}

export default Tenth