import { useRef, useState } from "react";
import { InputPassword } from "../../../../components/inputPassword";
import { InputText } from "../../../../components/inputText";
import { focusOnInvalidInput } from "../../../../helpers/focusOnInvalidInput";

export const AuthMenuLoginContent = (props) => {
    const { backToPrevStage = () => {} } = props;
    const form = useRef(null);
    const formErrorMessageElement = useRef(null);
    const [formErrorMessage, setFormErrorMessage] = useState("");

    const handleErrorMessage = (errorMessage) => {
        setFormErrorMessage(errorMessage);
        formErrorMessageElement.current.focus();
    };

    const onSubmit = (event) => {
        setFormErrorMessage("");
        event.preventDefault();
        console.log("submit");

        handleErrorMessage("Wrong login or password");
    };

    return (
        <form
            onSubmit={onSubmit}
            onInvalid={() => focusOnInvalidInput(form.current)}
            ref={form}
        >
            <h2>Log in and explore 🔑</h2>
            <p
                className={`form-error-message${
                    formErrorMessage ? "" : " visually-hidden"
                }`}
                aria-live="assertive"
                tabIndex={-1}
                ref={formErrorMessageElement}
            >
                {formErrorMessage}
            </p>
            <InputText
                isRequired
                id="login-field"
                label="login"
                maxLength={20}
                minLength={6}
            />
            <InputPassword
                isRequired
                id="password-field"
                label="password"
                minLength={6}
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
        </form>
    );
};
