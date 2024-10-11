import { Link } from "react-router-dom";
const Home = () => {
    return (
        <>
            <Link to="/selection">
                <div className="transform transition ease-in-out duration-300 hover:scale-125 hover:bg-blue-900 bg-theme-blue w-[400px] h-[400px] rounded-full leading-[400px] text-center absolute top-[40vh] left-[70vw] text-white text-6xl font-extrabold">
                    START
                </div>
            </Link>
            <div className="pl-32 pt-32">
                <h1 className="text-8xl font-black text-theme-blue">
                    STUDENT PERFORMANCE
                    <br />
                    PREDICTION
                </h1>
                <h2 className="text-3xl">
                    W&nbsp;&nbsp; I&nbsp;&nbsp; T&nbsp;&nbsp; H&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;L&nbsp;&nbsp; I&nbsp;&nbsp;
                    N&nbsp;&nbsp; E&nbsp;&nbsp; A&nbsp;&nbsp; R&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;R&nbsp;&nbsp; E&nbsp;&nbsp;
                    G&nbsp;&nbsp; R&nbsp;&nbsp; E&nbsp;&nbsp; S&nbsp;&nbsp;
                    S&nbsp;&nbsp; I&nbsp;&nbsp; O&nbsp;&nbsp; N
                </h2>
                <br />
                <p className="w-[500px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officiis eum ut assumenda in architecto unde rerum dolore,
                    explicabo accusantium corporis vel minima suscipit culpa
                    repellendus, expedita magni quos soluta numquam.
                </p>
            </div>
        </>
    );
};

export default Home;
