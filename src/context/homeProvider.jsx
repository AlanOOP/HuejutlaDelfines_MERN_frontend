import { useState, createContext, } from "react";

const HomeContext = createContext();

const HomeProvider = ({ children }) => {

    const [isStyle, setIsStyle] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);



    return (
        <HomeContext.Provider
            value={{
                isStyle,
                setIsStyle,
                isPlaying,
                setIsPlaying
            }}
        >
            {children}
        </HomeContext.Provider>
    );
}

export {
    HomeProvider
}
export default HomeContext;