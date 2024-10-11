import { useState } from "react";
import PropTypes from "prop-types";

const InternetAccess = ({ updateInternetAccess }) => {
    const [internetAccess, setInternetAccess] = useState(undefined);
    const handleInternetAccess = (e) => {
        setInternetAccess(e.target.value);
        updateInternetAccess(e.target.value);
    };
    return (
        <div className="mb-14">
            <h1 className="text-7xl font-extrabold text-theme-blue">
                INTERNET ACCESS
            </h1>
            <div className="flex">
                <button
                    className={`mt-8 w-80 h-16 border-[1px] border-black text-center rounded-full mr-12 ${
                        internetAccess == 1 ? "bg-theme-green" : "bg-white"
                    }`}
                    onClick={handleInternetAccess}
                    value={1}
                >
                    Yes
                </button>
                <button
                    className={`mt-8 w-80 h-16 border-[1px] border-black text-center rounded-full mr-12 ${
                        internetAccess == 0 ? "bg-theme-green" : "bg-white"
                    }`}
                    onClick={handleInternetAccess}
                    value={0}
                >
                    No
                </button>
            </div>
        </div>
    );
};

InternetAccess.propTypes = {
    updateInternetAccess: PropTypes.func.isRequired,
};
export default InternetAccess;
