import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const AcessToResources = ({ updateAcessToResources }) => {
    const [acessToResources, setAcessToResources] = useState(undefined);
    const handleAcessToResources = (e) => {
        setAcessToResources(e.target.value);
        updateAcessToResources(e.target.value);
        localStorage.setItem("acessToResources", e.target.value);
    };

    useEffect(() => {
        setAcessToResources(localStorage.getItem("acessToResources"));
    }, []);
    return (
        <div className="mb-14">
            <h1 className="text-6xl font-extrabold text-theme-blue">
                ACCESS TO RESOURCES
            </h1>
            <div className="text-2xl flex">
                Do you have all the learning equipment?
            </div>
            <div className="flex">
                <button
                    className={`mt-8 w-80 h-16 border-[1px] border-black text-center rounded-full mr-12 ${
                        acessToResources == 0 ? "bg-theme-green" : "bg-white"
                    }`}
                    onClick={handleAcessToResources}
                    value={0}
                >
                    Low
                </button>
                <button
                    className={`mt-8 w-80 h-16 border-[1px] border-black text-center rounded-full mr-12 ${
                        acessToResources == 1 ? "bg-theme-green" : "bg-white"
                    }`}
                    onClick={handleAcessToResources}
                    value={1}
                >
                    Medium
                </button>
                <button
                    className={`mt-8 w-80 h-16 border-[1px] border-black text-center rounded-full mr-12 ${
                        acessToResources == 2 ? "bg-theme-green" : "bg-white"
                    }`}
                    onClick={handleAcessToResources}
                    value={2}
                >
                    High
                </button>
            </div>
        </div>
    );
};

AcessToResources.propTypes = {
    updateAcessToResources: PropTypes.func.isRequired,
};
export default AcessToResources;
