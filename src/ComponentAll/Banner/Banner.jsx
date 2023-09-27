import { useEffect, useState } from "react";

const Banner = () => {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);



    // console.log(data)

    useEffect(() => {
        // Fetch your JSON data here and set it to the "data" state variable
        fetch("../../../public/Json/File.json")
            .then((res) => res.json())
            .then((jsonData) => setData(jsonData)
            );
    }, []);

    const handleInput = (e) => {
        setSearch(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();

        // Filter the data based on the search value
        const filtered = data.filter((item) =>
            item.category.includes(search)
        );

        setFilteredData(filtered);




    };
    //   console.log(filteredData);

    // const { title, category, card_bg, category_bg, picture, text_color } = filteredData;

    return (
        <div className="bg-[url('../../../public/media/bg.png')] bg-cover bg-center h-[70vh] mt-6 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-center mb-8">
                I Grow By Helping People In Need
            </h1>

            <form onSubmit={handleSearch} className="flex items-center flex-col sm:flex-row">
                <label htmlFor="voice-search" className="sr-only">
                    Search
                </label>
                <div className="relative mb-4 sm:mb-0">
                    <input
                        type="text"
                        id="voice-search"
                        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg px-6 py-3"
                        placeholder="Search here..."
                        value={search}
                        onChange={handleInput}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="inline-flex items-center py-2.5 px-4 text-sm font-medium text-white bg-[#FF444A] rounded-lg border border-[#FF444A]"
                >
                    Search
                </button>
            </form>

            <div className="grid grid-cols-1 ml-2 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-4">
                {filteredData.map((item) => (
                    <div key={item.id}>
                        <div className="w-72  rounded-lg mt-6" style={{ backgroundColor: item.card_bg }}>
                            <img src={item.picture} alt="" />
                            <div className="p-4 ">
                                <button className="px-2 rounded-sm mb-1" style={{ backgroundColor: item.category_bg, color: item.text_color }}>{item.category}</button>
                                <h1 style={{ color: item.text_color }} className="text-lg font-bold">{item.title}</h1>
                            </div>
                        </div>
                    </div>
                ))}
                      
            </div>

                      

        </div>
    );
};

export default Banner;
