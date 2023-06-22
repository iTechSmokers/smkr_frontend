import { useState } from "react";
import "./authForm.scss";
import ReactCodeInput from "react-code-input";

export const AuthForm = (props) => {
    const { className } = props;
    const [stage, setStage] = useState("welcome");

    const submitForm = (event) => {
        event.preventDefault();
    };

    const welcomeContent = (
        <>
            <h2>Welcome to Our App! 🌟</h2>
            <p className="auth-form__description">
                To access our amazing service, registration through Telegram is
                required. We have integrated a Telegram bot for smooth and
                secure interaction. Simply send a /start command to our bot to
                begin your journey! Join our lively community today and unleash
                the limitless possibilities! 💪
            </p>
            <div className="buttons-group">
                <a
                    className="button primary"
                    tabIndex={0}
                    onClick={() => setStage("code")}
                    type="button"
                >
                    /start
                </a>
                <button className="primary" type="button">
                    i have an account
                </button>
            </div>
        </>
    );

    const enterCodeContent = (
        <>
            <h2>Confirm Your Registration! ✅</h2>
            <p className="auth-form__description">
                After sending the /start command to our friendly bot, you will
                receive a unique code. Kindly enter the code in the field below
                to complete your registration and unlock the full benefits of
                our service. 😊
            </p>
            <ReactCodeInput
                fields={6}
                inputStyle={{
                    fontFamily: "inherit",
                    margin: "4px",
                    MozAppearance: "textfield",
                    width: "30px",
                    borderRadius: "10px",
                    fontSize: "20px",
                    height: "45px",
                    backgroundColor: "black",
                    textAlign: "center",
                    color: "white",
                    border: "1px solid white",
                }}
                inputStyleInvalid={{
                    fontFamily: "inherit",
                    margin: "4px",
                    MozAppearance: "textfield",
                    width: "30px",
                    borderRadius: "10px",
                    fontSize: "20px",
                    height: "45px",
                    backgroundColor: "black",
                    textAlign: "center",
                    color: "white",
                    border: "1px solid #ff3232",
                }}
                isValid={true}
            />
            <div className="buttons-group">
                <button
                    className="button primary"
                    tabIndex={0}
                    onClick={() => setStage("welcome")}
                    type="button"
                >
                    back
                </button>
                <button className="primary" type="submit">
                    done ✨
                </button>
            </div>
        </>
    );

    return (
        <form
            className={`auth-form${className ? ` ${className}` : ""}`}
            onSubmit={submitForm}
        >
            {stage === "welcome" && welcomeContent}
            {stage === "code" && enterCodeContent}
        </form>
    );
};
