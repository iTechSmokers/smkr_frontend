import { useEffect, useState } from "react";
import { timer } from "../../helpers/timer";

export const useTextWriting = (startWriting, template) => {
    const [message, setMessage] = useState("");

    const fillMessage = async () => {
        for (let letter of template.split("")) {
            setMessage((prev) => prev + letter);
            await timer(100);
        }
    };

    useEffect(() => {
        setMessage("");
        if (startWriting) {
            fillMessage();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [startWriting]);

    return { message };
};
