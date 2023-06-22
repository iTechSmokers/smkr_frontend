import "./contentBlock.scss";

export const ContentBlock = (props) => {
    const { className, children, isForm } = props;

    return isForm ? (
        <form className={`contentBlock${className ? ` ${className}` : ""}`}>
            {children}
        </form>
    ) : (
        <div className={`contentBlock${className ? ` ${className}` : ""}`}>
            {children}
        </div>
    );
};
