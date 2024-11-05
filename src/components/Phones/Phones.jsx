
import axios from "axios";
import { useEffect, useState } from "react";
import { XAxis, YAxis } from "recharts";

const phones = () => {
    const [phones, setPhones] = useState([]);

    useEffect(() =>{ 
    //     fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    //     .then(res => res.json())
    //     .then(data => setPhones(data))

    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
    
        // .then(data => setPhones(data.data.data));
.then(data =>{
    const phoneData = data.data.data;
    const phoneWithFakeData = phoneData.map(phone =>{
        const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split('_')[1])

        }
        return obj;

    })
    console.log(phoneWithFakeData);
    setPhones(phoneWithFakeData);
})


}, [])

      
    return (
        <div>
            <h2 className="text-5xl"> Phones:{phones.length} </h2>
            <BarChart width ={600} height={400} data={phones}>
            <Bar dataKey="price" stackId="a" fill="#8884d8" />
          <XAxis dataKey={name}></XAxis>
          <YAxis dataKey={price}></YAxis>
        </BarChart>
        </div>
    );
};

export default phones;