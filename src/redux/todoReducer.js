import { ADDTASK, EDITTASK, COMPLETETASK, DELETETASK, CANCEL, FILTERDONE, FILTERNOTDONE, FILTERALL } from "../redux/actionType";

const tasks = [
    {
        id: 1,
        description: "Get a job",
        isDone: false,
    },

    {
        id: 2,
        description: "Take a shower",
        isDone: false,
    },

    {
        id: 3,
        description: "Somke a cigarette",
        isDone: false,
    },

    {
        id: 4,
        description: "Sleep well",
        isDone: false,
    }
]

export const todoReducer = (state = tasks, action) => {
    let newTasks;
    switch (action.type) {
        case ADDTASK:
            newTasks = [...state, action.payload]
            return newTasks
        case EDITTASK:
            newTasks = [...state];
            newTasks = newTasks.map(el => el.id === action.payload.id ? { ...el, edit:!action.payload.edit, description: action.payload.description } : el)
            return newTasks
        case COMPLETETASK:
            newTasks = [...state];
            newTasks = newTasks.map(el => el.id === action.payload ? { ...el, isDone: !el.isDone } : el)
            return newTasks
        case DELETETASK:
            newTasks = [...state];
            newTasks = newTasks.filter(el => el.id !== action.payload)
            return newTasks
        case CANCEL:
            newTasks = [...state];
            newTasks = newTasks.map(el => el.id === action.payload ? { ...el, edit:!el.edit } : el)
            return newTasks
        case FILTERDONE:
                newTasks = [...state];
                newTasks = newTasks.filter(el => el.isDone=== true)
                return newTasks
        case FILTERNOTDONE:
                newTasks = [...state];
                newTasks = newTasks.filter(el => el.isDone=== false)
                return newTasks
        case FILTERALL:
            return state
        default:
            return state
    }
}

