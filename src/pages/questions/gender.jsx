import { useState } from "react";
import PropTypes from "prop-types";

const Gender = ({ updateGender }) => {
    const [gender, setGender] = useState(undefined);

    const handleGender = (e) => {
        setGender(e.target.value);
        updateGender(e.target.value);
    };
    return (
        <div className="mb-14">
            <h1 className="text-7xl font-extrabold text-theme-blue">GENDER</h1>
            <div className="flex">
                <button
                    className={`mt-8 w-80 h-16 border-[1px] border-black text-center rounded-full mr-12 ${
                        gender == 1 ? "bg-theme-green" : "bg-white"
                    }`}
                    onClick={handleGender}
                    value={1}
                >
                    Male
                </button>
                <button
                    className={`mt-8 w-80 h-16 border-[1px] border-black text-center rounded-full mr-12 ${
                        gender == 0 ? "bg-theme-green" : "bg-white"
                    }`}
                    onClick={handleGender}
                    value={0}
                >
                    Female
                </button>
            </div>
        </div>
    );
};

Gender.propTypes = {
    updateGender: PropTypes.func.isRequired,
};

export default Gender;
