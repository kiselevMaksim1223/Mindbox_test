import React, { FC, useState } from "react";
import { Button } from "../Button/Button";

interface IAddItem {
  name: string
  onClickCallback: (title: string) => void
}
export const AddItem:FC<IAddItem> = ({onClickCallback, name}) => {
  const [title, setTitle] = useState<string>('')

  const onClickHandler = () => {
    title.trim() !== '' && onClickCallback(title)
    setTitle('')
  }

  return (
    <div className={"flex gap-2 justify-between"}>
      <input placeholder={'Title'} value={title} className={"w-7/12 grow rounded-md h-10 border-2 border-gray-300 p-1"} onChange={(e) => setTitle(e.currentTarget.value)} />
      <Button  onClickCallback={onClickHandler}>{name}</Button>
    </div>
  );
};