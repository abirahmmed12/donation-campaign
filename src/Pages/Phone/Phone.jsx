import { useLoaderData, useParams } from "react-router-dom";
import Phonecard from "../../components/Phones/Phonecard";


const Phone = () => {
const phones = useLoaderData()
const {id} = useParams()
const phone = phones.find(phone => phone.id == id)
 console.log(phone)


  return (
    <div>
       <Phonecard phone={phone}></Phonecard>
    </div>
    
  )
};

export default Phone;
