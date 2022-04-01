import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/Counter/counterslice";

export const store = configureStore({
  reducer: { counter: counterReducer },
});                  
                    