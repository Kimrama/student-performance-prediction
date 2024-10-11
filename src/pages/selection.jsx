import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import HourStudied from "./questions/hourStudied";
import Gender from "./questions/gender";
import ParentalInvolement from "./questions/parentalInvolement";
import AcessToResources from "./questions/accessToResoures";
import ExtracurricularActivities from "./questions/extracurricularActivities";
import HourSleeped from "./questions/hourSleeped";
const Selection = () => {
    const [gender, setGender] = useState(undefined);
    const updateGender = (val) => {
        setGender(val);
    };
    const [hourStudied, setHourStudied] = useState(undefined);
    const updateHourStudied = (val) => {
        setHourStudied(val);
    };

    const [parentalInvolement, setParentalInvolement] = useState(undefined);
    const updateParentalInvolement = (val) => {
        setParentalInvolement(val);
    };

    const [acessToResources, setAcessToResources] = useState(undefined);
    const updateAcessToResources = (val) => {
        setAcessToResources(val);
    };

    const [extracurricularActivities, setExtracurricularActivities] =
        useState(undefined);
    const updateExtracurricularActivities = (val) => {
        setExtracurricularActivities(val);
    };

    const [hourSleeped, setHourSleeped] = useState(undefined);
    const updateHourSleeped = (val) => {
        setHourSleeped(val);
    };
    return (
        <>
            <Link to="/">
                <div className="fixed m-8 top-15 w-[80px] h-[80px] bg-theme-green rounded-full flex justify-center items-center">
                    <FontAwesomeIcon
                        icon={faLeftLong}
                        className="text-white text-5xl"
                    />
                </div>
            </Link>
            <div className="flex justify-center w-screen mt-32">
                <div className="w-[80vw]">
                    <HourStudied updateHourStudied={updateHourStudied} />
                    <HourSleeped updateHourSleeped={updateHourSleeped} />
                    <Gender updateGender={updateGender} />
                    <ParentalInvolement
                        updateParentalInvolement={updateParentalInvolement}
                    />
                    <AcessToResources
                        updateAcessToResources={updateAcessToResources}
                    />
                    <ExtracurricularActivities
                        updateExtracurricularActivities={
                            updateExtracurricularActivities
                        }
                    />
                </div>
            </div>
        </>
    );
};

export default Selection;
