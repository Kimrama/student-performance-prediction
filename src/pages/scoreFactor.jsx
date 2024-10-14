import { useLocation, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";

const ScoreFactors = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [factor, setfactor] = useState(undefined);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    useEffect(() => {
        setfactor(location.state?.prediction.suggestion);
    }, []);

    const doneHandle = () => {
        localStorage.clear();
        navigate("/");
    };

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <>
            <Link to="/prediction">
                <div className="fixed m-8 top-15 w-[80px] h-[80px] bg-theme-green rounded-full flex justify-center items-center transform transition ease-in-out duration-300 hover:scale-125">
                    <FontAwesomeIcon
                        icon={faLeftLong}
                        className="text-white text-5xl"
                    />
                </div>
            </Link>
            <div className="flex justify-center w-screen mt-32">
                <div className="flex flex-col items-center">
                    <h1 className="text-7xl font-extrabold text-theme-blue mb-16">
                        SCORE FACTORS
                    </h1>
                    <div className="flex w-[80vw] justify-evenly mb-5">
                        <div className="flex flex-col">
                            <h2 className="text-4xl mb-8 font-bold text-[#7ED7C1]">
                                IMPROVE FACTORS
                            </h2>
                            <ul>
                                {factor &&
                                    factor.improve_factors.map(
                                        (factor, index) => (
                                            <li key={index}>{factor}</li>
                                        )
                                    )}
                            </ul>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-4xl mb-8 font-bold text-[#DC8686]">
                                REDUCE FACTORS
                            </h2>
                            <ul>
                                {factor &&
                                    factor.reduce_factors.map(
                                        (factor, index) => (
                                            <li key={index}>{factor}</li>
                                        )
                                    )}
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button
                            className="my-8 w-80 h-16 border-[1px] border-black text-center rounded-full mr-12 bg-[#F0DBAF]"
                            onClick={openModal}
                        >
                            MATRIX CORRELATION
                        </button>
                        <button
                            className="my-8 w-80 h-16 border-[1px] border-black text-center rounded-full mr-12 bg-theme-green"
                            onClick={doneHandle}
                        >
                            DONE
                        </button>
                    </div>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={{
                            overlay: {
                                backgroundColor: "rgba(0, 0, 0, 0.50)",
                            },
                            content: {
                                color: "lightsteelblue",
                            },
                        }}
                        contentLabel="matrix correlation"
                    >
                        <img
                            className="w-full h-full object-contain"
                            src="/src/assets/matCorr.png"
                            alt=""
                        />
                    </Modal>
                </div>
            </div>
        </>
    );
};

export default ScoreFactors;
