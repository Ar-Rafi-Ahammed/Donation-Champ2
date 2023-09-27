import { useEffect, useState } from "react";
import {  useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";


const CardDetails = () => {

    const [cardDetails, setCardDetails] = useState({})
    const { id } = useParams();
    const cards = useLoaderData();

    const {picture,text_color} =cardDetails;

    useEffect((() => {
        const findCard = cards.find(cardDetails => cardDetails.id == id)
        setCardDetails(findCard);

    }), [id, cards])
    // console.log(cardDetails)

     
    const handleClick =()=>{
        const addCard =[];

        const clickedItem = JSON.parse(localStorage.getItem('item'));

        if(!clickedItem){
            addCard.push(cardDetails);
            localStorage.setItem('item', JSON.stringify(addCard));
            swal("Good job!", "DONATION ADDED", "success");
        }
        else{

            const isExist= clickedItem.find(cardDetails=>cardDetails.id == id)

            if(!isExist){
                addCard.push(...clickedItem,cardDetails);
                localStorage.setItem('item', JSON.stringify(addCard));
                swal("Good job!", "DONATION ADDED", "success");
            }
            else{
                swal("SORRY!", "ALREADY CLICKED");
            }
           
        }
    }




    return (
        <div className="my-6">

            <div className={`bg-cover bg-center bg-no-repeat h-[500px] relative`} style={{ backgroundImage: `url(${picture})` }}>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4  w-full py-5">

                    <button onClick={handleClick}
                    
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-4  rounded" style={{ backgroundColor: text_color }}>
                        Donate $290
                    </button>

                </div>
            </div>
            <div className="mt-4">
                <h1 className="text-3xl font-bold mb-2">{cardDetails.title}</h1>
                <p className="text-base">{cardDetails.description}</p>
            </div>


           
        </div>

    );
};

export default CardDetails;