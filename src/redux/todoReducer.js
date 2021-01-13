import { ADDTASK, EDITTASK, COMPLETETASK, DELETETASK, CANCEL, FILTERDONE } from "../redux/actionType";

const tasks ={ 
    t:[
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
],
str:'ALL',
}

export const todoReducer = (state = tasks, action) => {
    
    switch (action.type) {
        case ADDTASK:
            return {...state, t:[...state.t, action.payload] }
        case EDITTASK:
            
            return {
                ...state,
                t:state.t.map(el => el.id === action.payload.id ? { ...el, edit:!action.payload.edit, description: action.payload.description } : el)
            }
        case COMPLETETASK:
            
            return {
                ...state,
                t:state.t.map(el => el.id === action.payload ? { ...el, isDone: !el.isDone } : el)
            }
        case DELETETASK:
            
            return {
                ...state,
                t:state.t.filter(el => el.id !== action.payload)
            }
        case CANCEL:
            
            return {
                ...state,
                t:state.t.map(el => el.id === action.payload ? { ...el, edit:!el.edit } : el)
            }
        case FILTERDONE:
          return      { ...state, 
            str:action.payload}
                
       
                
        default:
            return state
    }
}
