import { useState } from "react";
import PropTypes from "prop-types";

const DistanceFromHome = ({ updateDistanceFromHome }) => {
    const [content, setContent] = useState(undefined);
    const handleContent = (e) => {
        setContent(e.target.value);
        updateDistanceFromHome(e.target.value);
    };
    return (
        <div className="mb-14">
            <h1 className="text-7xl font-extrabold text-theme-blue">
                FAMILY INCOME
            </h1>
            <div className="flex">
                <button
                    className={`mt-8 w-80 h-16 border-[1px] border-black text-center rounded-full mr-12 ${
                        content == 2 ? "bg-theme-green" : "bg-white"
                    }`}
                    onClick={handleContent}
                    value={2}
                >
                    Near
                </button>
                <button
                    className={`mt-8 w-80 h-16 border-[1px] border-black text-center rounded-full mr-12 ${
                        content == 1 ? "bg-theme-green" : "bg-white"
                    }`}
                    onClick={handleContent}
                    value={1}
                >
                    Moderate
                </button>
                <button
                    className={`mt-8 w-80 h-16 border-[1px] border-black text-center rounded-full mr-12 ${
                        content == 0 ? "bg-theme-green" : "bg-white"
                    }`}
                    onClick={handleContent}
                    value={0}
                >
                    Far
                </button>
            </div>
        </div>
    );
};

DistanceFromHome.propTypes = {
    updateDistanceFromHome: PropTypes.func.isRequired,
};
export default DistanceFromHome;
