import { useState } from "react";
import PropTypes from "prop-types";

const ExtracurricularActivities = ({ updateExtracurricularActivities }) => {
    const [extracurricularActivities, setExtracurricularActivities] =
        useState(undefined);
    const handleAcessToResources = (e) => {
        setExtracurricularActivities(e.target.value);
        updateExtracurricularActivities(e.target.value);
    };
    return (
        <div className="mb-14">
            <h1 className="text-7xl font-extrabold text-theme-blue">
                EXTRACURRICULAR ACTIVITIES
            </h1>
            <div className="flex">
                <button
                    className={`mt-8 w-80 h-16 border-[1px] border-black text-center rounded-full mr-12 ${
                        extracurricularActivities == 1
                            ? "bg-theme-green"
                            : "bg-white"
                    }`}
                    onClick={handleAcessToResources}
                    value={1}
                >
                    Participate
                </button>
                <button
                    className={`mt-8 w-80 h-16 border-[1px] border-black text-center rounded-full mr-12 ${
                        extracurricularActivities == 0
                            ? "bg-theme-green"
                            : "bg-white"
                    }`}
                    onClick={handleAcessToResources}
                    value={0}
                >
                    No Participate
                </button>
            </div>
        </div>
    );
};

ExtracurricularActivities.propTypes = {
    updateExtracurricularActivities: PropTypes.func.isRequired,
};
export default ExtracurricularActivities;
