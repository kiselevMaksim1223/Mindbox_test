import {addTodolist, changeFilter, deleteTodolist, todolistsReducer} from "./slice";
import {ITodolistsSliceInitialState} from "./types";

describe('todolistsReducer', () => {
  let initialState: ITodolistsSliceInitialState

  beforeEach(() => {
    initialState = { todolists: [{ id: '1', title: 'Todolist 1', filter: 'all' }] };
  })

  it('should add a todolist', () => {
    const initialState:ITodolistsSliceInitialState = { todolists: [] };

    const newState = todolistsReducer(initialState, addTodolist({title: 'New Todolist'}));

    expect(newState.todolists.length).toBe(1);
    expect(newState.todolists[0].title).toBe('New Todolist');
  });

  it('should delete a todolist', () => {

    const newState = todolistsReducer(initialState, deleteTodolist({todolistId: '1'}));
    expect(newState.todolists.length).toBe(0);
  });

  it('should change filter for a todolist', () => {

    const newState = todolistsReducer(initialState, changeFilter({filter: 'done', todolistId: '1'}));
    expect(newState.todolists[0].filter).toBe('done');
  });
});