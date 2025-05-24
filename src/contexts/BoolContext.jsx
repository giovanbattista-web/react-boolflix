import React from 'react';
import { createContext } from "react";
const BoolContext = createContext();

const BoolProvider = ({ children }) => {
    return (
        <div>BoolContext</div>
    )
};

export default BoolContext;