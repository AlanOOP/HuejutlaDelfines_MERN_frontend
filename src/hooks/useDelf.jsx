import { useContext } from "react";

import HomeContext from "../context/homeProvider";

const useDelf = () => {
    return useContext(HomeContext)
};

export default useDelf;

