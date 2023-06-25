import ReactCodeInput from "react-code-input";

export const AuthMenuEnterCodeContent = (props) => {
    const { backToPrevStage = () => {} } = props;

    return (
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
                    onClick={() => backToPrevStage()}
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
};
