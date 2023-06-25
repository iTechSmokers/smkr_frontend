import { useEffect, useState } from "react";
import "./startPage.scss";
import { useTextWriting } from "../../hooks/useTextWriting";
import { AuthForm } from "../../widgets/authForm";

const StartPage = () => {
    const [videoClass, setVideoClass] = useState("black");
    const [headingClass, setHeadingClass] = useState("hidden");
    const [buttonClass, setButtonClass] = useState("hidden");
    const [authFormWrapperClass, setAuthFormWrapperClass] = useState("hidden");
    const [cloudsClass, setCloudsClass] = useState("");

    const [showButton, setShowButton] = useState(true);
    const [showAuthForm, setShowAuthForm] = useState(false);

    const [startFillMessage, setStartFillMessage] = useState(false);

    const { message: descriptionMessage } = useTextWriting(
        startFillMessage,
        "super mega ultra remarkable people"
    );

    useEffect(() => {
        const launchAnimation = (delay) => {
            [
                () => setVideoClass(""),
                () => setHeadingClass(""),
                () => setStartFillMessage(true),
                () => setButtonClass("visible"),
            ].forEach((f, index) => {
                setTimeout(f, delay * (index + 1));
            });
        };

        launchAnimation(1000);
    }, []);

    const handleJoinUsButtonClick = (event) => {
        event.preventDefault();
        setHeadingClass("small");
        setVideoClass("blur");
        setButtonClass("hidden");

        setTimeout(() => {
            setShowButton(false);
            setShowAuthForm(true);
            setTimeout(() => setAuthFormWrapperClass(""), 100);
            setCloudsClass("visible");
        }, 1000);
    };

    return (
        <main className="start-page">
            <video autoPlay loop muted className={videoClass}>
                <source src="/background.mp4" type="video/mp4"></source>
            </video>
            <div className={`heading ${headingClass}`}>
                <h1>iTechSmokers</h1>
                <p className="description">{descriptionMessage}</p>
            </div>
            {showButton && (
                <button
                    className={`primary big join-community ${buttonClass}`}
                    onClick={handleJoinUsButtonClick}
                >
                    Join us
                </button>
            )}
            {showAuthForm && (
                <AuthForm className={authFormWrapperClass}></AuthForm>
            )}
            <img
                src="/cloud.png"
                className={`cloud cloud-left ${
                    cloudsClass ? ` ${cloudsClass}` : ""
                }`}
            />
            <img
                src="/cloud.png"
                className={`cloud cloud-right ${
                    cloudsClass ? ` ${cloudsClass}` : ""
                }`}
            />
        </main>
    );
};

export default StartPage;
