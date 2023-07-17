import React ,{useState,useEffect}from 'react'
import { fakeFetch } from './Constants/FifthConstant'

function Fifth() {
    const[posts,setPosts]=useState([]);

    useEffect(()=>{
        fetchData();
    },[])

const fetchData=async()=>{
    try{
        const response= await fakeFetch("https://example.com/api/posts");
        const{data}=response;
        setPosts(data.posts)
    }catch(err){
        console.log("error while fetching posts: " + err);
    }
}

const showBakery=()=>{
    const bakery = posts.filter((x)=>x.category === 'Bakery');
    setPosts(bakery);
}


  return (
    <div style={{display:"flex", justifyContent:"space-evenly", flexWrap:"wrap", margin:"5px"}}>{posts.map((x)=>(
        <div style={{border:"1px solid black", margin:"5px"}}>
          <img src={x.src} width={300} height={100} alt={x.caption}  style={{border:"1px solid black", margin:"5px"}}/>
        <h3>{x.caption}</h3>
        <p><b>Likes : </b>{x.likes}</p>
        <p><b>Views : </b>{x.views}</p>
        </div>
      
    ))}
    <button onClick={showBakery}>Show bakery</button>
    </div>
  )
}

export default Fifth