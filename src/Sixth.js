import React ,{useState,useEffect}from 'react'
import { fakeFetch } from './Constants/SixthCons'

function Sixth() {
    const[archieved,setArchieved]=useState([]);
    const[showArchieved,setShowArchieved] = useState(false);
    const [heaading,setHeading] = useState('Unarchieved');

    useEffect(()=>{
        fetchData();
    },[])

   const fetchData=async()=>{
try{
    const response= await fakeFetch("https://example.com/api/habits");
    const{data}=response;
    setArchieved(data.habits);
}catch(err){
console.log("failed to fetch habits",err);
}
    }

const filerArchieved=()=>{
    setShowArchieved(!showArchieved);
    setHeading(showArchieved ? "Unarchieved":"Archieved")

}

const filteredHabits = showArchieved ? archieved.filter(habit => habit.archived) : archieved.filter(habit => !habit.archived);

  return (
    <div>
        <h1>{heaading}</h1>
        {filteredHabits.map((x)=>(
        <>
        <h1>{x.title}</h1>
        <p>{x.desc}</p>
        <p><b>Days Followed : </b>{x.daysFollowed}</p>
        <p><b>Days Skipped : </b>{x.daysSkipped}</p>
        </>
    ))}
 <button onClick={filerArchieved}>
        {showArchieved ? 'Show Unarchived' : 'Show Archive'}
      </button>

    </div>
  )
}

export default Sixth