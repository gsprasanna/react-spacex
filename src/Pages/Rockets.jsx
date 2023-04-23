import { useEffect, useState } from "react";
import fetchData from "../services/fetchData";
import { GET_ROCKETS } from "../constants/serverUrls";
import Cards from "../components/Cards";

const Rockets = () => {
    const [rockets, setRockets] = useState([]);

    useEffect(()=> {
        fetchAllRockets();
    },[])

    const fetchAllRockets = async () =>{
        const rockets = await fetchData(GET_ROCKETS);
        setRockets(rockets);
    }
    return (
        <div className="container">
        <div class="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 hd:grid-cols-3 gap-4">
            {
                rockets?.map((item, itemIndex)=>{
                    return <Cards name={item?.name} description={item?.description} rocketId={item?.id} cardImg={item?.flickr_images[0]} key={itemIndex} />
                })
            }
            </div>
        </div>
    );
}

export default Rockets;