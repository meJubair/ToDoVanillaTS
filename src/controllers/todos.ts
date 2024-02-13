//import { Request, Response, NextFunction } from "express";
import { RequestHandler } from "express";
import { Todo } from "../models/todo";

/* export const createTodos = (
    req: Request, 
    res: Response, 
    next: NextFunction
    ) => {
        res.status(200).json({ todos: [{ id: "1", text: "Do something" }] });
    }; 
*/

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
    const text = (req.body as {text: string}).text; // type casting
    const newTodo = new Todo(Math.floor(Math.random()*10).toString(), text);
    TODOS.push(newTodo);

    res.status(201).json({message: 'Created the ToDo Item.', createdTodo: newTodo});
};

export const getTodos: RequestHandler = (req, res, next) => {
    res.json({todos: TODOS});
};