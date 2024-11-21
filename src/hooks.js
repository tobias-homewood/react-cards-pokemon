import { useState } from "react";
import axios from "axios";
import {v1 as uuid} from "uuid";

function useFlip(initialState = false) {
    const [isFacingUp, setIsFacingUp] = useState(initialState);
    const flipCard = () => {
        setIsFacingUp(isUp => !isUp);
    };

    return [isFacingUp, flipCard];
}

function useAxios(url) {
    const [data, setData] = useState([]);
    const addData = async (params) => {
        const response = await axios.get(params ? url + params : url);
        setData(data => [...data, { ...response.data, id: uuid() }]);
    }

    return [data, addData];
}

export { useFlip, useAxios };