import { useEffect, useState } from "react";
import ShowingDonation from "./ShowingDonation";

const Donation = () => {
    const [item, setItem] = useState([]);
    const [nodata, setNodata] = useState(false);
    const [isshow, setIsShow] = useState(false);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("item"));
        if (items) {
            setItem(items);
        } else {
            setNodata("no data found");
        }
    }, []);

    return (
        <div>
            {nodata ? (
                <p className="h-[80vh] flex justify-center items-center text-4xl ">{nodata}</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2  gap-5 m-auto p-5">
                    {isshow
                        ? item.map((phone) => <ShowingDonation key={phone.id} phone={phone}></ShowingDonation>)
                        : item.slice(0, 4).map((phone) => <ShowingDonation key={phone.id} phone={phone}></ShowingDonation>)}
                </div>
            )}
            {item.length >= 5 && (
                <div style={{ textAlign: "center", marginTop: "20px" }}>
                <button onClick={() => setIsShow(!isshow)} className="btn mx-auto btn-active btn-neutral">
                    {isshow ? 'See Less' : 'See More'}
                </button>
            </div>
            )}
        </div>
    );
};

export default Donation;
