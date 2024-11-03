import PropTypes from "prop-types";



const PriceOption = ({option}) => {
    const { name, price, features} = option;
    return (
        <div className="bg-blue-500 rounded-md p-4 flex-col text-white">
            <h2>
                <span className="text-7xl"> {price} </span>
                <span className="text+3xl">/mon</span>
            </h2>
            <h4 className="text-5xl">
                {name}
            </h4>
            <div className="pl-6 flex-grow">
            {
                features.map((feature, index) => <Feature key={} feature={feature}></Feature> )
            }
            </div>
            
        </div>

    );
};

PriceOption.PropTypes = {
Option: PropTypes.object
}

export default PriceOption;