"use client"
import React, { createContext, useState } from "react";


export const WorkoutContext = createContext(null);




const WorkoutsProvider = ({ children }) => {

    const [addWorkouts, setAddWorkouts] = useState([]);
    const [savedWorkouts, setSavedWorkouts] = useState([]);
    const sharedData= {
        addWorkouts,
        setAddWorkouts,
        savedWorkouts,
        setSavedWorkouts
    }

    return (
       < WorkoutContext.Provider value={sharedData}>
            {children}
        </WorkoutContext.Provider>
    );
};

export default WorkoutsProvider;