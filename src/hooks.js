import { useState } from "react";

function useFlip(initialState = false) {
    const [isFacingUp, setIsFacingUp] = useState(initialState);
    const flipCard = () => {
        setIsFacingUp(isUp => !isUp);
    };

    return [isFacingUp, flipCard];
}

export { useFlip };