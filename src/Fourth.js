import React,{useState,useEffect} from 'react'
import { fakeFetch } from './Constants/FourthConst'



function Fourth() {
    const[videos,setVideos] = useState([]);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async() =>{
        try{
            const response= await fakeFetch("https://example.com/api/videos");
            const{data}=response;
            setVideos(data?.videos);
        }catch(err){
            console.log("error while fetching videos" + err);
        }
    }

const DeleteFirstItem = () =>{
    if (videos.length > 0) {
        setVideos(prevVideos => prevVideos.slice(1));
      }
}

  return (
    <div style={{display:"flex",justifyContent:"space-between" ,flexWrap:"wrap",}}>{
        videos?.map((x,index)=>{
            return(
                <div key={index} style={{ border:"1px solid black" ,margin:"5px"}}>
            <img src={x.thumbnail} width={500} height={300} alt={x.title}/>
            <h3>{x.title}</h3>
            <p><b>Likes : </b>{x?.likes}</p>
            <p><b>Views : </b>{x?.views}</p>
          
            </div>
            
            )
            
        })
    
        }
            <button onClick={DeleteFirstItem}>Delete</button>
        </div>
  )
}

export default Fourth