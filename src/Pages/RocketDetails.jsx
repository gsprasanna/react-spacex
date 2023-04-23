import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GET_ROCKETS } from "../constants/serverUrls";
import fetchData from "../services/fetchData";

const RocketDetails = () => {
    const [rocketDetails, setRocketDetails] = useState(null);
    let { rocketId } = useParams();

    useEffect(() => {
        fetchRockets();
    }, [])

    const fetchRockets = async () => {
        const rocketDetails = await fetchData(`${GET_ROCKETS}/${rocketId}`);
        setRocketDetails(rocketDetails);
    }

    return (
        <>
            {rocketDetails && <div className="container">
                <p className="font-bold text-center text-xl aboveDesktop:text-2xl capitalize mb-3">{rocketDetails?.name}</p>
                <p>{rocketDetails?.description}</p>
                <h2 className="font-bold text-lg aboveDesktop:text-2xl my-2">Collections</h2>
                <div class="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 hd:grid-cols-3 gap-3">
                    {
                        rocketDetails?.flickr_images?.map((item, index) => {
                            return <img className="w-full h-52" src={item} alt={rocketDetails?.name} key={index} />
                        })
                    }
                </div>
            </div>}
        </>
    );
};

export default RocketDetails;