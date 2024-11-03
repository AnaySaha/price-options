
import PropTypes from "prop-types";
import { FaArchway } from "react-icons/fa6";
const Feature = ({feature}) => {
    return (
        <div>
            <p> <FaArchway></FaArchway> {feature} </p>
        </div>
    );
};

Feature.PropTypes = {
    Option: PropTypes.string
    }
    <button className='mt-12 bg-green-600 w-full py-4'> Buy Now</button>
export default Feature;