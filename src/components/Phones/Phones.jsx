import Phonescard from "./Phonescard";



const Phones = ({phones}) => {
    return (
        <div>
            <h1>ok</h1>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
               {
                phones.map(phone => <Phonescard key ={phone.id} phone={phone}></Phonescard>)
               }
            </div>
        </div>
    );
};

export default Phones;