import React, { ChangeEvent, FC } from "react";
import { useAppDispatch } from "../../../common/hooks/useAppDispatch";
import { Button } from "../../../common/components/Button/Button";
import {deleteTask, updateCheckbox} from "../../../store/reducers/tasksSlice/slice";
import {ITaskType} from "../../../store/reducers/tasksSlice/types";

interface ITask {
  task: ITaskType
}
export const Task:FC<ITask> = ({task: {title, completed, id}}) => {
  const dispatch = useAppDispatch()

  const changeCheckboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateCheckbox({id, completed:e.target.checked}))
  }
  const deleteTaskHandler = () => {
    dispatch(deleteTask({id}))
  }

  return (
    <section className={`bg-white p-1.5 rounded ${completed ? "opacity-50" : ""}`}>
      <header className={"flex justify-between gap-2"}>
        <h3 className="text-sm text-gray-700 max-w-xs overflow-hidden overflow-ellipsis">
          {title}
        </h3>
        <div className={"flex justify-between gap-2"}>
          <input type={"checkbox"} checked={completed} onChange={changeCheckboxHandler}/>
          <Button className={"hover:text-red-700 h-max self-center"} onClickCallback={deleteTaskHandler}>X</Button>
        </div>
      </header>
    </section>
  );
};