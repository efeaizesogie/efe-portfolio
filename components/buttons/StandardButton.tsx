"use client"

import {JSX, MouseEventHandler} from "react";

interface Props {
    children: string | JSX.Element;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const StandardButton = ({ children, onClick }: Props) => {
    return (
        <button onClick={onClick} className="outline-0 border-0 cursor-pointer py-3 px-6 bg-brand color-text text-base rounded-sm relative z-20 overflow-hidden
         transition-all duration-150 opacity-0 hover:opacity-[0.9">
            {children}
        </button>
    );
};

