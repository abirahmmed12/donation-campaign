import { useLoaderData } from "react-router-dom";
import Phones from "../../components/Phones/Phones";
import Banner from "../../components/header/Banner/Banner";
import { useState } from "react";


const Home = () => {


    let filteredPhones;
    filteredPhones = useLoaderData()

    const [filterQuery, setFilterQuery] = useState("")
    if (filterQuery) {
        filteredPhones = filteredPhones?.filter((item) => item.Category === filterQuery);

    }
    return (
        <div>

            <Banner filterQuery={filterQuery} setFilterQuery={setFilterQuery}></Banner>
            <div className="mt-10">
                <Phones phones={filteredPhones}></Phones>
            </div>

        </div>
    );
};

export default Home;