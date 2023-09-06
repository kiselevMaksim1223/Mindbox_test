import {ITaskType} from "../../store/reducers/tasksSlice/types";
import {filterValueType} from "../../store/reducers/todolistsSlice/types";

export const tasksFilter = (tasks: ITaskType[], filter: filterValueType): ITaskType[] => {

  let filteredTasks: ITaskType[] = []

  if(filter === "all"){
    filteredTasks = tasks
  }
  if(filter === "active"){
    filteredTasks = tasks.filter(tl => !tl.completed)
  }
  if(filter === "done"){
    filteredTasks = tasks.filter(tl => tl.completed)
  }

  return filteredTasks
}