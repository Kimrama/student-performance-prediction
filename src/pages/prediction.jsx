import { useLocation, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import ReactLoading from "react-loading";
const Prediction = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [prediction, setPrediction] = useState(undefined);

    useEffect(() => {
        if (localStorage.getItem("predicData") === null) {
            const data = location.state?.dataObj;
            const reqBody = {
                Hours_Studied: data.Hours_Studied || null,
                Attendance: data.Attendance || null,
                Parental_Involvement: data.Parental_Involvement || null,
                Access_to_Resources: data.Access_to_Resources || null,
                Extracurricular_Activities:
                    data.Extracurricular_Activities || null,
                Sleep_Hours: data.Sleep_Hours || null,
                Previous_Scores: data.Previous_Scores || null,
                Motivation_Level: data.Motivation_Level || null,
                Internet_Access: data.Internet_Access || null,
                Tutoring_Sessions: data.Tutoring_Sessions || null,
                Family_Income: data.Family_Income || null,
                Teacher_Quality: data.Teacher_Quality || null,
                School_Type: data.School_Type || null,
                Peer_Influence: data.Peer_Influence || null,
                Physical_Activity: data.Physical_Activity || null,
                Learning_Disabilities: data.Learning_Disabilities || null,
                Parental_Education_Level: data.Parental_Education_Level || null,
                Distance_from_Home: data.Distance_from_Home || null,
                Gender: data.Gender || null,
            };
            axios
                .post("http://127.0.0.1:8000/predict", reqBody, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then(({ data }) => {
                    setPrediction(data);
                    localStorage.setItem("predicData", JSON.stringify(data));
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            setPrediction(JSON.parse(localStorage.getItem("predicData")));
        }
    }, []);
    const scoreFactorHandle = () => {
        navigate("/scoreFactors", { state: { prediction } });
    };
    const doneHandle = () => {
        localStorage.clear();
        navigate("/");
    };
    return (
        <>
            <Link to="/selection">
                <div className="fixed m-8 top-15 w-[80px] h-[80px] bg-theme-green rounded-full flex justify-center items-center transform transition ease-in-out duration-300 hover:scale-125">
                    <FontAwesomeIcon
                        icon={faLeftLong}
                        className="text-white text-5xl"
                    />
                </div>
            </Link>
            <div className="flex justify-center w-screen mt-32">
                <div className="flex flex-col items-center">
                    <h1 className="text-6xl font-extrabold text-theme-blue">
                        YOU MIGHT GOT
                    </h1>
                    <h2 className="text-[20vh] text-center font-bold text-theme-blue mt-11">
                        {prediction ? (
                            prediction.predicted_exam_score
                        ) : (
                            <ReactLoading
                                type={"cylon"}
                                color={"#4e6aff"}
                                height={375}
                                width={375}
                            />
                        )}
                    </h2>
                    {prediction && (
                        <div className="flex justify-center">
                            <button
                                className="mt-8 w-40 h-16 border-[1px] border-black text-center rounded-full mr-40"
                                onClick={scoreFactorHandle}
                            >
                                Score Factors
                            </button>

                            <button
                                className="mt-8 w-40 h-16 border-[1px] border-black text-center rounded-full bg-theme-green"
                                onClick={doneHandle}
                            >
                                Done
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Prediction;
