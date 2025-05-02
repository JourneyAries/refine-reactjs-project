import React from 'react';
import { InputTodoProvider } from './useInputTodo';

export const AllProvider = ({ children }) => {
	return <InputTodoProvider>{children}</InputTodoProvider>;
};
