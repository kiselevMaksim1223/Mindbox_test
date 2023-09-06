import React, { FC } from "react";
import { Button } from "../../../common/components/Button/Button";
import { useAppDispatch } from "../../../common/hooks/useAppDispatch";
import { changeFilter } from "../../../store/reducers/todolistsSlice/slice";
import {useAppSelector} from "../../../common/hooks/useAppSelector";
import { ITaskType } from "../../../store/reducers/tasksSlice/types";
import { filterValueType } from "../../../store/reducers/todolistsSlice/types";

interface IFilteredButton {
  todolistId: string
  todolistData: ITaskType[]
}

export const FilteredButtons:FC<IFilteredButton> = ({todolistId}) => {
  const dispatch = useAppDispatch()
  const filterValue = useAppSelector(state =>
    state.todolists.todolists.find(tl => tl.id === todolistId)?.filter)

  const onClickHandler = (filter: filterValueType) => {
    dispatch(changeFilter({filter, todolistId}))
  }

  return (
    <div className={"flex gap-3 justify-center"}>
      <Button
        className={`${filterValue === 'all' && 'bg-blue-800'}`}
        onClickCallback={() => onClickHandler("all")}
      >
        All
      </Button>
      <Button
        className={`${filterValue === 'active' &&  'bg-blue-800'}`}
        onClickCallback={() => onClickHandler("active")}
      >
        Active
      </Button>
      <Button
        className={`${filterValue === 'done' && 'bg-blue-800'}`}
        onClickCallback={() => onClickHandler("done")}
      >
        Done
      </Button>
    </div>
  );
};