import React, {FC} from "react";
import { Task } from "./Task/Task";
import { useAppSelector } from "../../common/hooks/useAppSelector";
import { Button } from "../../common/components/Button/Button";
import { useAppDispatch } from "../../common/hooks/useAppDispatch";
import { deleteTodolist } from "../../store/reducers/todolistsSlice/slice";
import { FilteredButtons } from "./FilteredButtons/FilteredButtons";
import { AddItem } from "../../common/components/addItem/AddItem";
import {ITodolistType} from "../../store/reducers/todolistsSlice/types";
import {addTask} from "../../store/reducers/tasksSlice/slice";
import {tasksFilter} from "../../utils/tasksFilter";
import {selectTodolists} from "../../store/reducers/todolistsSlice/selectors";
import {selectTasks} from "../../store/reducers/tasksSlice/selectors";

interface ITodolist {
  todolist: ITodolistType
}
export const Todolist:FC<ITodolist> = ({todolist: {id,title}}) => {
  const dispatch = useAppDispatch()

  const todolist = useAppSelector(selectTodolists).find(tl => tl.id === id)

  const tasks = useAppSelector(selectTasks).filter(t => t.todolistId === id)

  const filter = todolist?.filter

  const filteredTasks = tasksFilter(tasks, filter!)

  const addTaskHandler = (title: string) => {
      dispatch(addTask({todolistId: id, title}))
  }
  const deleteTodolistHandler = () => {
    dispatch(deleteTodolist({todolistId:id}))
  }

  return (
    <section className="group relative flex flex-col max-w-xs gap-2 bg-gray-100 p-5 rounded-xl h-max drop-shadow-md place-self-center sm:place-self-auto">
      <header className="flex justify-between">
        <h2 className="text-xl h-min max-w-xs overflow-hidden overflow-ellipsis" role="heading">
          {title}
        </h2>
        <Button onClickCallback={deleteTodolistHandler} className="hover:text-red-700">X</Button>
      </header>

      <AddItem name={'Add task'} onClickCallback={addTaskHandler}/>

      {!filteredTasks.length
        ? <p className={"text-lg mt-2"}>No tasks!</p>
        : (
          filteredTasks.map(task => (
            <Task key={task.id} task={task} />
          ))
        )
      }

      <FilteredButtons todolistId={id} todolistData={tasks}/>
    </section>
  );
};