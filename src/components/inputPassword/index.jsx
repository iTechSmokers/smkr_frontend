import { useState } from "react";

export const InputPassword = (props) => {
    const {
        maxLength,
        minLength,
        id = "unique-id",
        label = "",
        errorMessage = "",
        customValidationOnChange = () => "",
        customValidationOnBlur = () => "",
        isRequired = false,
        setInputValue = () => {},
    } = props;

    const [value, setValue] = useState("");
    const [error, setError] = useState("");

    const handleOnInvalid = (event) => {
        event.preventDefault();
        const { value } = event.target;

        if (isRequired && value.length === 0) {
            setError("This field is required.");
        }

        if (minLength && value.length < minLength) {
            setError(`Min length for this field is ${minLength}`);
        }
    };

    const handleOnChange = (event) => {
        setError("");
        const { value } = event.target;

        const validationErrorMessage = customValidationOnChange(value);
        if (validationErrorMessage) {
            setError(validationErrorMessage);
        }

        setValue(value);
        setInputValue(value);
    };

    const handleOnBlur = (event) => {
        const validationErrorMessage = customValidationOnBlur(
            event.target.value
        );
        if (validationErrorMessage) {
            setError(validationErrorMessage);
        }
    };

    return (
        <div className={`form-input${error || errorMessage ? " invalid" : ""}`}>
            <label htmlFor={id}>{label}</label>
            <input
                required={isRequired}
                onInvalid={handleOnInvalid}
                type="password"
                value={value}
                maxLength={maxLength}
                minLength={minLength}
                aria-invalid={error || errorMessage}
                aria-errormessage={`${id}-error`}
                id={id}
                onChange={handleOnChange}
                onBlur={handleOnBlur}
            ></input>
            <p
                className="form-input__error"
                aria-live="assertive"
                id={`${id}-error`}
            >
                {error || errorMessage}
            </p>
        </div>
    );
};
