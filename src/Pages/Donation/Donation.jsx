import { useEffect, useState } from "react";

const Donation = () => {
  const [donate, setDonate] = useState([]);
  const [notFound, setNotFound] = useState(false);

  const [isShow, setIsShow]= useState(false);

  const[total, setTotal] = useState(0)

  useEffect(() => {
    const clickedItem = JSON.parse(localStorage.getItem('item'));

    if (clickedItem) {
      setDonate(clickedItem);

        const totalDonation =clickedItem.reduce((pv,cv)=> pv + cv.price,0);
        setTotal(totalDonation)

    } else {
      setNotFound("NO DATA FOUND !!");
    }
  }, []);

  const handleDelete = () => {
    localStorage.clear();
    setNotFound("NO DATA FOUND !!");

  }

  console.log(isShow)

  return (
    <div>



      {notFound ?
        <p className="text-4xl text-red-500 font-bold h-[80vh] flex justify-center items-center">
          {notFound}
        </p>
        :
        <div>

         <div>
         <div className="flex items-center">
            {
              donate.length > 0 && <button onClick={handleDelete} className="py-1  px-3 text-white rounded-md font-bold bg-blue-600 mx-auto">remove all data</button>
            }
          </div>
           <h1 className="text-xl font-semibold"> Your Donation : {total} <span>$</span></h1>
         </div>

          <div className="grid grid-cols-1  lg:grid-cols-2 gap-4 ">
            {
           
              isShow ?  donate.map((item, index) => (
                <div key={index} className="card ">
                  <div className="w-full flex rounded-lg gap-2 mt-2" style={{ backgroundColor: item.card_bg }}>
                    <div>
                      <img src={item.picture} alt="" />
                    </div>
                    <div className="p-4 px-4">
                      <button className="px-2 rounded-sm mb-1" style={{ backgroundColor: item.category_bg, color: item.text_color }}>{item.category}</button>
                      <h1 style={{}} className="text-lg my-1 text-gray-700 font-black">{item.title}</h1>
                      <p className="text-xl my-1 font-bold" style={{ color: item.text_color }}>{item.price}<span>$</span></p>
  
                      <button style={{ background: item.text_color }} className="py-1 my-2 px-3 text-white rounded-sm">View Details</button>
                    </div>
                  </div>
                </div>
              ))
              :  donate.slice(0,4).map((item, index) => (
                <div key={index} className="card">
                  <div className="w-full flex rounded-lg gap-2 mt-2" style={{ backgroundColor: item.card_bg }}>
                    <div>
                      <img src={item.picture} alt="" />
                    </div>
                    <div className="p-4 px-4">
                      <button className="px-2 rounded-sm mb-1" style={{ backgroundColor: item.category_bg, color: item.text_color }}>{item.category}</button>
                      <h1 style={{}} className="text-lg my-1 text-gray-700 font-black">{item.title}</h1>
                      <p className="text-xl my-1 font-bold" style={{ color: item.text_color }}>{item.price}<span>$</span></p>
  
                      <button style={{ background: item.text_color }} className="py-1 my-2 px-3 text-white rounded-sm">View Details</button>
                    </div>
                  </div>
                </div>
              ))

            }
          </div>

          <div  className="flex items-center my-4">
            {
              donate.length > 4 && <button onClick={()=>setIsShow(!isShow)} className="py-1 my-2 px-3 text-white rounded-md font-bold bg-green-600 mx-auto"> {isShow ? "SEE LESS" : "SEE MORE"}</button>
            }
          </div>
        </div>
      }
    </div>
  );
};

export default Donation;
