import { useEffect, useState } from "react";
import Phonecard from "../../components/Phones/Phonecard";


const Donation = () => {
    const [item , setitem]=useState([])
    const [nodata,setnodata]=useState(false)

    useEffect(()=>{
        const items = JSON.parse(localStorage.getItem("item"))
        if (items){
            setitem(items)

        }else{
            
            setnodata("no data found")
        }
       
        

    },[])
    console.log(item)
    return (
        <div className="">
            {nodata ? <p>{nodata}</p> : <div>
                {
                   item.map(phone=><Phonecard key ={phone.id} phone={phone}></Phonecard>) 
                }
                </div>}
           
        </div>
    );
};

export default Donation;