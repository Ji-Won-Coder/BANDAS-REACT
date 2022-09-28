import React, { createContext } from "react";
import {useSocket} from '../hooks/useSocket';


export const  socketContex = createContext();

export const socketProvider = ({children})=> {

    const {socket, online} = useSocket('http://localhost:8080');

    return (
        <socketContex.Provider value={{socket, online}}>
            {children}
        </socketContex.Provider>
    )
}