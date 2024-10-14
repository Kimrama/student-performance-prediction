import { useState } from "react";
import PropTypes from "prop-types";

const PreviousScores = ({ updatePreviousScores }) => {
    const [previousScores, setPreviousScores] = useState(undefined);

    const handlePreviousScores = (e) => {
        setPreviousScores(e.target.value);
        updatePreviousScores(e.target.value);
        localStorage.setItem("previousScores", e.target.value);
    };
    return (
        <div className="mb-14">
            <h1 className="text-6xl font-extrabold text-theme-blue">
                PREVIOUS SCORES
            </h1>
            <div className="text-2xl flex">
                What score did you get on your last test?--
                <p className="bg-yellow-200">0 - 100</p>
            </div>
            <input
                type="text"
                placeholder="set"
                className="mt-8 w-80 h-16 border-[1px] border-black text-center rounded-full"
                onChange={handlePreviousScores}
                value={localStorage.getItem("previousScores")}
            />
        </div>
    );
};
PreviousScores.propTypes = {
    updatePreviousScores: PropTypes.func.isRequired,
};

export default PreviousScores;
