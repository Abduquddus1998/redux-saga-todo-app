import {ADD_TODO,LOAD_TODO_LIST,RENDER_TODO_LIST} from "./actionTypes";


export default function addTodo(title) {
    return {
        type:ADD_TODO,
        toDoItem: {
            _id: (new Date().getTime().toString()),
            title
        }
    };

}

export function loadTodoList() {
    return {
        type: LOAD_TODO_LIST
    }
}