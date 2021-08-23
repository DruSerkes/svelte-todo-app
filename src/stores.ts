import axios from 'axios';
import { v4 as uuid } from 'uuid';
import { writable } from 'svelte/store';
import type { todo } from './types';

export const BASE_URL = "https://jsonplaceholder.typicode.com";

const createTodoAPI = () => {
  const { subscribe, update, set } = writable<todo[]>([]);

  const getTodos = async () => {
    const response = await axios.get(`${BASE_URL}/todos?userId=1`);
    const data: todo[] = response.data;
    set(data.slice(0, 10));
  }

  const addTodo = async (title: string) => {
    const body = JSON.stringify({ userId: 1, completed: false, title });
    try {
      const response = await axios.post(`${BASE_URL}/posts`, { body });
      const newTodo: todo = response.data;
      update(todos => [...todos, newTodo]);
    } catch (e) {
      console.log(e);
      const newTodo = JSON.parse(body);
      newTodo.id = uuid();
      update(todos => [...todos, newTodo]);
    }
  };

  const updateTodo = async ({ id, title, completed, userId }: todo) => {
    const body = JSON.stringify({ id, userId, title, completed });
    try {
      const response = await axios.put(`${BASE_URL}/posts/${id}`, { body });
      const newTodo: todo = response.data;
      update(todos => todos.map(todo => todo.id === newTodo.id ? newTodo : todo));
    } catch (e) {
      console.log(e);
      const newTodo = JSON.parse(body);
      update(todos => todos.map(todo => todo.id === newTodo.id ? newTodo : todo));
    }
  };

  const removeTodo = async (id: number) => {
    try {
      const response = await axios.delete(`${BASE_URL}/posts/${id}`);
      console.log({ response });
      update(todos => todos.filter(todo => todo.id !== id));
    } catch (e) {
      console.log(e);
      update(todos => todos.filter(todo => todo.id !== id));
    }
  };

  return {
    subscribe,
    getTodos,
    addTodo,
    updateTodo,
    removeTodo
  }
};

export const todos = createTodoAPI();