
import { useEffect, useState } from "react";

const phones = () => {
    const [phones, setPhones] = useState([]);

    useEffect(() =>{ 
        fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(res => res.json())
        .then(data => setPhones(data))
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default phones;