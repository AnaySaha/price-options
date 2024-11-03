

const PriceOption = () => {

    [
        {
            "id": 1,
            "name": "Basic",
            "price": 30,
            "billing_cycle": "monthly",
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Free Wi-Fi",
                "One personal training session per month",
                "Access to cardio machines",
                "Nutritional guidance (once per month)",
                "Standard mobile app access"
            ]
        },
        {
            "id": 2,
            "name": "Standard",
            "price": 50,
            "billing_cycle": "monthly",
            "features": [
                "Access to gym equipment",
                "Locker room access with towel service",
                "Free Wi-Fi",
                "Two personal training sessions per month",
                "Access to group fitness classes",
                "Guest pass (1 per month)",
                "Access to cardio and strength training machines",
                "Monthly fitness assessment",
                "Nutritional guidance and meal planning",
                "Advanced mobile app access with workout tracking",
                "Access to sauna"
            ]
        },
        {
            "id": 3,
            "name": "Premium",
            "price": 80,
            "billing_cycle": "monthly",
            "features": [
                "24/7 gym access",
                "Access to all gym equipment",
                "Locker room with complimentary towel and shower kits",
                "Free Wi-Fi",
                "Unlimited personal training sessions",
                "Access to group fitness classes",
                "Spa and sauna access",
                "Guest pass (5 per month)",
                "Access to exclusive premium lounge",
                "Access to specialized training equipment",
                "Monthly one-on-one session with a nutritionist",
                "Customizable workout plans",
                "Premium mobile app access with live class streaming",
                "Hydro massage access",
                "Complimentary smoothie or protein shake (1 per visit)"
            ]
        }
    ]
    
    return (
        <div className="m-12">
        
            <h2 className="text-5xl"> Best Price In the Town </h2>
            <div className="grid grid-cols-6 gap-6">
            {
                PriceOption.map(Option => <PriceOption key={Option.id} 
                    option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOption;