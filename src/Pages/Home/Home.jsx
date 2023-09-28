import { useLoaderData } from "react-router-dom";
import Phones from "../../components/Phones/Phones";
import Banner from "../../components/header/Banner/Banner";


const Home = () => {
    const phones = useLoaderData()
    console.log(phones)
    return (
        <div>
           
            <Banner></Banner>
            <div className="mt-10">
            <Phones phones={phones}></Phones>
            </div>
           
        </div>
    );
};

export default Home;