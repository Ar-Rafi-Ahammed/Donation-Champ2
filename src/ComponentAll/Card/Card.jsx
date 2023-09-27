import { Link } from "react-router-dom";


const Card = ({card}) => {
    const { id, picture, title, category, category_bg, card_bg, text_color } = card || {}



    return (
        <>
            <section  >
                <Link to={`/Cards/${id}`}>
                    <div className="w-72  rounded-lg mt-6" style={{ backgroundColor: card_bg }}>
                        <img src={picture} alt="" />
                        <div className="p-4 ">
                            <button className="px-2 rounded-sm mb-1" style={{ backgroundColor: category_bg, color: text_color }}>{category}</button>
                            <h1 style={{ color: text_color }} className="text-lg font-bold">{title}</h1>
                        </div>
                    </div>
                </Link>
            </section>
        </>
    );
};

export default Card;