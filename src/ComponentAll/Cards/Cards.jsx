
import { useEffect, useState } from "react";
import Card from "../Card/Card";


const Cards = () => {

    const [cards, setCards]= useState([]);
    useEffect(()=>{
        fetch('/public/Json/File.json')
        .then(res => res.json())
        .then(data => setCards(data))
        // .catch(error => console.error('Error:', error));
    },[])
    return (
        <div className="grid grid-cols-1 ml-2 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-4">
            {
                cards.map(item =>{
                    return (
                       <Card card={item} key={item.id}></Card>
                    )
                })
            }
        </div>
    );
};

export default Cards;