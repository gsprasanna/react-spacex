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
                <p className="font-bold text-base text-center aboveDesktop:text-lg capitalize mb-3">{rocketDetails?.name}</p>
                <p>{rocketDetails?.description}</p>
            </div>}
        </>
    );
};

export default RocketDetails;