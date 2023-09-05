import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { todolistsReducer } from "./reducers/todolistsSlice/slice";
import {tasksReducer} from "./reducers/tasksSlice/slice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
    todolists: todolistsReducer,
    tasks: tasksReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer
})

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;