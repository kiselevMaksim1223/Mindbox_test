import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {ITasksSliceInitialState} from "./types";
import {loadDataFromLocalStorage} from "../../../utils/loadDataFromLocalStorage";
import {saveDataToLocalStorage} from "../../../utils/saveDataToLocalStorage";

const initialState: ITasksSliceInitialState = {
  tasks: loadDataFromLocalStorage('tasks'),
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
      addTask(state, action:PayloadAction<{todolistId: string, title: string}>){
        const randomId = action.payload.todolistId + Date.now()
        state.tasks.unshift({todolistId: action.payload.todolistId, completed:false, id: randomId, title: action.payload.title})
        saveDataToLocalStorage('tasks', state.tasks)
      },
      updateCheckbox(state, action:PayloadAction<{id: string, completed: boolean}>) {
        const task = state.tasks.find(t => t.id === action.payload.id)
        if (task) {
          task.completed = action.payload.completed
          saveDataToLocalStorage('tasks', state.tasks)
        }
      },
      deleteTask(state, action:PayloadAction<{id: string}>){
        const taskIndex = state.tasks.findIndex(t => t.id === action.payload.id)
        if (taskIndex !== -1) {
          state.tasks.splice(taskIndex, 1)
          saveDataToLocalStorage('tasks', state.tasks)
        }
      },
    },
    extraReducers: {}
  }
)

export const tasksReducer = tasksSlice.reducer
export const {
  updateCheckbox,
  deleteTask,
  addTask,
} = tasksSlice.actions