import React, { FC, ReactNode } from 'react';

interface IButton {
  children?: ReactNode
  onClickCallback: () => void
  className?: string
}
export const Button:FC<IButton> = ({children, onClickCallback, className}) => {

  const onClickHandler = () => {
    onClickCallback()
  }

  return (
    <button className={`px-2 bg-blue-400 rounded hover:bg-blue-600 font-light ${className}`} onClick={onClickHandler}>{children}</button>
  );
};