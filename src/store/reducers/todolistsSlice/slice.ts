import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {filterValueType, ITodolistsSliceInitialState} from "./types";
import {loadDataFromLocalStorage} from "../../../utils/loadDataFromLocalStorage";
import {saveDataToLocalStorage} from "../../../utils/saveDataToLocalStorage";

const initialState: ITodolistsSliceInitialState = {
  todolists: loadDataFromLocalStorage('todolists'),
}

const todolistsSlice = createSlice({
    name: 'todolists',
    initialState,
    reducers: {
      addTodolist(state, action: PayloadAction<{ title: string }>) {
        const todolistId = Date.now().toString(16)
        state.todolists.push({id: todolistId, title: action.payload.title, filter: 'all'})
        saveDataToLocalStorage('todolists', state.todolists)
      },
      deleteTodolist(state, action: PayloadAction<{ todolistId: string }>) {
        const todolistIndex = state.todolists.findIndex(tl => tl.id === action.payload.todolistId)
        if (todolistIndex !== -1) {
          state.todolists.splice(todolistIndex, 1)
          saveDataToLocalStorage('todolists', state.todolists)
        }
      },
      changeFilter(state, action: PayloadAction<{ filter: filterValueType, todolistId: string }>) {
        let todolist = state.todolists.find(tl => tl.id === action.payload.todolistId)
        if (todolist) {
          todolist.filter = action.payload.filter
        }
      }
    },
    extraReducers: {}
  }
)

export const todolistsReducer = todolistsSlice.reducer
export const {
  addTodolist,
  deleteTodolist,
  changeFilter,
} = todolistsSlice.actions