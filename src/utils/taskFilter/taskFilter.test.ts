import {ITaskType} from "../../store/reducers/tasksSlice/types";
import {tasksFilter} from "./tasksFilter";

describe('tasksFilter', () => {

  let tasks: ITaskType[]

  beforeEach(() => {
    tasks = [
      { todolistId: '1', id: '1', title: 'Task 1', completed: true },
      { todolistId: '1', id: '2', title: 'Task 2', completed: false },
      { todolistId: '2', id: '3', title: 'Task 3', completed: true },
    ];
  })

  it('should return all tasks when filter is "all"', () => {
    const result = tasksFilter(tasks, 'all');
    const expected: ITaskType[] = [
      { todolistId: '1', id: '1', title: 'Task 1', completed: true },
      { todolistId: '1', id: '2', title: 'Task 2', completed: false },
      { todolistId: '2', id: '3', title: 'Task 3', completed: true },
    ];

    expect(result).toEqual(expected);
  });

  it('should return active tasks when filter is "active"', () => {
    const result = tasksFilter(tasks, 'active');
    const expected: ITaskType[] = [
      { todolistId: '1', id: '2', title: 'Task 2', completed: false },
    ];
    expect(result).toEqual(expected);
  });

  it('should return done tasks when filter is "done"', () => {
    const result = tasksFilter(tasks, 'done');
    const expected: ITaskType[] = [
      { todolistId: '1', id: '1', title: 'Task 1', completed: true },
      { todolistId: '2', id: '3', title: 'Task 3', completed: true },
    ];

    expect(result).toEqual(expected);
  });
});
