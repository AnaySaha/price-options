import PropTypes from "prop-types";



const PriceOption = ({option}) => {
    const { name, price, features} = option;
    return (
        <div>
            <h2>
                <span className="text-7xl"> {price} </span>
                <span className="text+3xl">/mon</span>
            </h2>
            <h4 className="text-5xl">
                {name}
            </h4>
        </div>

    );
};

PriceOption.PropTypes = {
Option: PropTypes.object
}

export default PriceOption;