import { useState } from "react";
import PropTypes from "prop-types";

const PeerInfluence = ({ updatePeerInfluence }) => {
    const [content, setContent] = useState(undefined);
    const handlePeerInfluence = (e) => {
        setContent(e.target.value);
        updatePeerInfluence(e.target.value);
    };
    return (
        <div className="mb-14">
            <h1 className="text-7xl font-extrabold text-theme-blue">
                PEER INFLUENCE
            </h1>
            <div className="flex">
                <button
                    className={`mt-8 w-80 h-16 border-[1px] border-black text-center rounded-full mr-12 ${
                        content == 1 ? "bg-theme-green" : "bg-white"
                    }`}
                    onClick={handlePeerInfluence}
                    value={1}
                >
                    Positive
                </button>
                <button
                    className={`mt-8 w-80 h-16 border-[1px] border-black text-center rounded-full mr-12 ${
                        content == 0 ? "bg-theme-green" : "bg-white"
                    }`}
                    onClick={handlePeerInfluence}
                    value={0}
                >
                    Negative
                </button>
            </div>
        </div>
    );
};

PeerInfluence.propTypes = {
    updatePeerInfluence: PropTypes.func.isRequired,
};
export default PeerInfluence;
