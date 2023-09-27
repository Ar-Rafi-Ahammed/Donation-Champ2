import { useState, useEffect } from 'react';

import Chart from 'react-apexcharts'

const Statistics = () => {
    const [totalDonation, setTotalDonation] = useState(0);
    const [myDonation, setMyDonation] = useState(0);

    useEffect(() => {
        fetch('/public/Json/File.json')
            .then(res => res.json())
            .then(data => {
                const totalDonation = data.reduce((pv, cv) => pv + cv.price, 0);
                setTotalDonation(totalDonation);
            });

        const userDonation = JSON.parse(localStorage.getItem('item'));
        if (userDonation) {
            const myDonation = userDonation.reduce((pv, cv) => pv + cv.price, 0);
            setMyDonation(myDonation);
        }
    }, []);


    


    return (
        <div className='ml-16'>
            <div className='text-2xl font-bold flex justify-center items-center mb-12 gap-6'>
                <h2 > Total Donation:   {totalDonation}$</h2>
                <h2> Your Donation:   {myDonation}$</h2>
            </div>

            <div className='flex items-center justify-center'>
                <Chart series={[totalDonation, myDonation]} options={{ labels: ["Total-Donation", "Your-Donation"] }} type="pie" width={500} height={3920} />
            </div>
        </div>
    );

};
export default Statistics;
