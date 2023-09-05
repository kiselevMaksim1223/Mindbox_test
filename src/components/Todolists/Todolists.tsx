import React from "react";
import { Todolist } from "../Todolist/Todolist";
import { useAppSelector } from "../../common/hooks/useAppSelector";
import {useAppDispatch} from "../../common/hooks/useAppDispatch";
import {addTodolist} from "../../store/reducers/todolistsSlice/slice";
import {AddItem} from "../../common/components/addItem/AddItem";
import {selectTodolists} from "../../store/reducers/todolistsSlice/selectors";

export const Todolists = () => {
  const dispatch = useAppDispatch()
  const todolists = useAppSelector(selectTodolists)

  const addTodolistHandler = (title: string) => {
    dispatch(addTodolist({title}))
  }

  return (
    <main>
      <section className="container mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-6xl lg:px-6">
        <h1 className="text-4xl font-semibold text-gray-900 text-center">TODOS</h1>
        <section className="w-fit mt-5 m-auto sm:mt-10 sm:ml-0">
          <AddItem name="Add todolist" onClickCallback={addTodolistHandler} />
        </section>
        {!todolists.length ? (
          <p className="mt-5 text-center text-gray-600">
            No todolist. Add something to see something :)
          </p>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {todolists.map((todolist) => (
              <Todolist key={todolist.id} todolist={todolist} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}