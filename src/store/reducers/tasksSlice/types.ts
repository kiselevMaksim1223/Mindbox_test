export interface ITaskType {
  todolistId: string
  id: string
  title: string
  completed: boolean
}

export interface ITasksSliceInitialState {
  tasks: ITaskType[]
}