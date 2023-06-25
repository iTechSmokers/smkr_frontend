import { useState } from "react";
import "./authMenu.scss";
import { AuthMenuWelcomeContent } from "./menus/AuthMenuWelcomeContent";
import { AuthMenuEnterCodeContent } from "./menus/AuthMenuEnterCodeContent";
import { AuthMenuLoginContent } from "./menus/AuthMenuLoginContent";

export const AuthMenu = (props) => {
    const { className } = props;
    const [prevStages, setPrevStages] = useState([]);
    const [stage, setStage] = useState("welcome");

    const setCurrentStage = (newStage) => {
        setPrevStages((prev) => [...prev, stage]);
        setStage(newStage);
    };

    const backToPrevStage = () => {
        const prevStage = prevStages.pop();
        if (prevStage) {
            setStage(prevStage);
        }
    };

    return (
        <div className={`auth-menu${className ? ` ${className}` : ""}`}>
            {stage === "welcome" && (
                <AuthMenuWelcomeContent setCurrentStage={setCurrentStage} />
            )}
            {stage === "code" && (
                <AuthMenuEnterCodeContent backToPrevStage={backToPrevStage} />
            )}
            {stage === "login" && (
                <AuthMenuLoginContent backToPrevStage={backToPrevStage} />
            )}
        </div>
    );
};
