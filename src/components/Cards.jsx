import { useNavigate } from "react-router-dom";

const Cards = ({ cardImg, name, description, rocketId }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/rockets/${rocketId}`);
    }
    return (
        <button className="flex flex-col items-start rounded overflow-hidden shadow-lg h-full" onClick={handleCardClick}>
            <img className="w-full h-[350px]" src={cardImg} alt={name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">
                    {description}
                </p>
            </div>
        </button>
    )
}

export default Cards;