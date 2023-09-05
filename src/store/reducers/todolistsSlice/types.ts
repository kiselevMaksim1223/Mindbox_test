export type filterValueType = "all" | "active" | "done"
export interface ITodolistType {
  id: string
  title: string
  filter: filterValueType
}

export interface ITodolistsSliceInitialState {
  todolists: ITodolistType[]
}