import { useState } from "react";
import PropTypes from "prop-types";

const PreviousScores = ({ updatePreviousScores }) => {
    const [previousScores, setPreviousScores] = useState(undefined);

    const handlePreviousScores = (e) => {
        setPreviousScores(e.target.value);
        updatePreviousScores(e.target.value);
    };
    return (
        <div className="mb-14">
            <h1 className="text-7xl font-extrabold text-theme-blue">
                PREVIOUS SCORES
            </h1>
            <p className="text-2xl">format ex. 100, 95, 5, 0</p>
            <input
                type="text"
                placeholder="set"
                className="mt-8 w-80 h-16 border-[1px] border-black text-center rounded-full"
                onChange={handlePreviousScores}
            />
        </div>
    );
};
PreviousScores.propTypes = {
    updatePreviousScores: PropTypes.func.isRequired,
};

export default PreviousScores;
