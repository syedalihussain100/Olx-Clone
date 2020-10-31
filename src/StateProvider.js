///// Setup data layer
// We need to this basket

import React, { createContext, useContext, useReducer } from "react";

// This is the Data Layer
export const StateContext = createContext();

//   Build a provider

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// this is how we use it inside of a component

export const useStateValue = () => useContext(StateContext);
