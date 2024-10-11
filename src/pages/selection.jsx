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
import MotivationLevel from "./questions/motivationLevel";
import PreviousScores from "./questions/previousScores";
import InternetAccess from "./questions/internetAccess";
import TutoringSessions from "./questions/tutoringSessions";
import FamilyIncome from "./questions/familyIncome";
import TeacherQuality from "./questions/teacherQuality";
import SchoolType from "./questions/schoolType";
import PeerInfluence from "./questions/peerInfluence";
import PhysicalActivity from "./questions/physicalActivity";
import LearningDisabilities from "./questions/learningDisabilities";
import ParentalEducationLevel from "./questions/parentalEducationLevel";
import DistanceFromHome from "./questions/distanceFromHome";
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

    const [motivationLevel, setMotivationLevel] = useState(undefined);
    const updateMotivationLevel = (val) => {
        setMotivationLevel(val);
    };

    const [previousScores, setPreviousScores] = useState(undefined);
    const updatePreviousScores = (val) => {
        setPreviousScores(val);
    };
    const [internetAccess, setInternetAccess] = useState(undefined);
    const updateInternetAccess = (val) => {
        setInternetAccess(val);
    };

    const [tutoringSessions, setTutoringSessions] = useState(undefined);
    const updateTutoringSessions = (val) => {
        setTutoringSessions(val);
    };

    const [familyIncome, setFamilyIncome] = useState(undefined);
    const updateFamilyIncome = (val) => {
        setFamilyIncome(val);
    };

    const [teacherQuality, setTacherQuality] = useState(undefined);
    const updateTeacherQuality = (val) => {
        setTacherQuality(val);
    };
    const [schoolType, setSchoolType] = useState(undefined);
    const updateSchoolType = (val) => {
        setSchoolType(val);
    };
    const [peerInfluence, setPeerInfluence] = useState(undefined);
    const updatePeerInfluence = (val) => {
        setPeerInfluence(val);
    };

    const [physicalActivity, setPhysicalActivity] = useState(undefined);
    const updatePhysicalActivity = (val) => {
        setPhysicalActivity(val);
    };

    const [learningDisabilities, setLearningDisabilities] = useState(undefined);
    const updateLearningDisabilities = (val) => {
        setLearningDisabilities(val);
    };
    const [parentalEducationLevel, setParentalEducationLevel] =
        useState(undefined);
    const updateParentalEducationLevel = (val) => {
        setParentalEducationLevel(val);
    };
    const [distanceFromHome, setDistanceFromHome] = useState(undefined);
    const updateDistanceFromHome = (val) => {
        setDistanceFromHome(val);
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
                    <PreviousScores
                        updatePreviousScores={updatePreviousScores}
                    />
                    <TutoringSessions
                        updateTutoringSessions={updateTutoringSessions}
                    />
                    <PhysicalActivity
                        updatePhysicalActivity={updatePhysicalActivity}
                    />
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
                    <MotivationLevel
                        updateMotivationLevel={updateMotivationLevel}
                    />
                    <InternetAccess
                        updateInternetAccess={updateInternetAccess}
                    />
                    <FamilyIncome updateFamilyIncome={updateFamilyIncome} />
                    <TeacherQuality
                        updateTeacherQuality={updateTeacherQuality}
                    />
                    <SchoolType updateSchoolType={updateSchoolType} />
                    <PeerInfluence updatePeerInfluence={updatePeerInfluence} />
                    <LearningDisabilities
                        updateLearningDisabilities={updateLearningDisabilities}
                    />
                    <ParentalEducationLevel
                        updateParentalEducationLevel={
                            updateParentalEducationLevel
                        }
                    />
                    <DistanceFromHome
                        updateDistanceFromHome={updateDistanceFromHome}
                    />
                </div>
            </div>
        </>
    );
};

export default Selection;
