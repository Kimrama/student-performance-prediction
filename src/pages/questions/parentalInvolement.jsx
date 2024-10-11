import { useState } from "react";
import PropTypes from "prop-types";

const ParentalInvolement = ({ updateParentalInvolement }) => {
    const [parentalInvolement, setParentalInvolement] = useState(undefined);
    const handleParentalInvolement = (e) => {
        setParentalInvolement(e.target.value);
        updateParentalInvolement(e.target.value);
    };
    return (
        <div className="mb-14">
            <h1 className="text-7xl font-extrabold text-theme-blue">
                PARENTAL INVOLEMENT
            </h1>
            <div className="flex">
                <button
                    className={`mt-8 w-80 h-16 border-[1px] border-black text-center rounded-full mr-12 ${
                        parentalInvolement == 1 ? "bg-theme-green" : "bg-white"
                    }`}
                    onClick={handleParentalInvolement}
                    value={1}
                >
                    Yes
                </button>
                <button
                    className={`mt-8 w-80 h-16 border-[1px] border-black text-center rounded-full mr-12 ${
                        parentalInvolement == 0 ? "bg-theme-green" : "bg-white"
                    }`}
                    onClick={handleParentalInvolement}
                    value={0}
                >
                    No
                </button>
            </div>
        </div>
    );
};

ParentalInvolement.propTypes = {
    updateParentalInvolement: PropTypes.func.isRequired,
};
export default ParentalInvolement;
