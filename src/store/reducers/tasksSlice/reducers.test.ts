import {
  addTask,
  deleteTask,
  tasksReducer,
  updateCheckbox
} from "./slice";
import {ITasksSliceInitialState} from "./types";

describe('tasksReducer', () => {
  let initialState: ITasksSliceInitialState

  beforeEach(() => {
    initialState = { tasks: [
      { id: '1',todolistId: '1', title: 'Task 1', completed: false },
      { id: '2',todolistId: '1', title: 'Task 2', completed: false },
      { id: '3',todolistId: '2', title: 'Task 1', completed: false },
      ] };
  })

  it('should add a task', () => {
    const initialState:ITasksSliceInitialState = { tasks: [] };

    const newState = tasksReducer(initialState, addTask({todolistId: '1',title: 'New Todolist'}));

    expect(newState.tasks.length).toBe(1);
    expect(newState.tasks[0].title).toBe('New Todolist');
  });

  it('should delete a task', () => {

    const newState = tasksReducer(initialState, deleteTask({id: '2'}));
    expect(newState.tasks.length).toBe(2);
    expect(newState.tasks[1].id).toBe('3');
  });

  it('should change checkbox for a task', () => {

    const newState = tasksReducer(initialState, updateCheckbox({id:'3', completed: true}));
    expect(newState.tasks[2].completed).toBe(true);
    expect(newState.tasks[0].completed).toBe(false);
  });
});