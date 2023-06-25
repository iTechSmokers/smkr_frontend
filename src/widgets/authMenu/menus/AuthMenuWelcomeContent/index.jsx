export const AuthMenuWelcomeContent = (props) => {
    const { setCurrentStage = () => {} } = props;

    return (
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
                    onClick={() => setCurrentStage("code")}
                    type="button"
                >
                    /start
                </a>
                <button
                    className="primary"
                    type="button"
                    onClick={() => setCurrentStage("login")}
                >
                    i have an account
                </button>
            </div>
        </>
    );
};
