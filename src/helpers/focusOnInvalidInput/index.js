export const focusOnInvalidInput = (parentElement) => {
    const invalidInput = parentElement.querySelector(
        ".form-input.invalid input"
    );
    if (invalidInput) {
        invalidInput.focus();
    }
};
