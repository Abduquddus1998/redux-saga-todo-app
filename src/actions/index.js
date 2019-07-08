import {ADD_TODO} from "./actionTypes";


export function addTodo(title) {
    return {
        type:ADD_TODO,
        toDoItem: {
            _id: (new Date().getTime().toString()),
            title
        }
    };

}