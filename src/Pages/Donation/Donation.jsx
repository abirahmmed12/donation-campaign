import { useEffect, useState } from "react";

import Phonescard from "../../components/Phones/Phonescard";


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
        <div >
            {nodata ? <p className="h-[80vh] flex justify-center items-center text-4xl ">{nodata}</p> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 m-auto">
                {
                   item.map(phone=><Phonescard key={phone.id}phone={phone}></Phonescard> )
                }
                </div>}
           
        </div>
    );
};

export default Donation;