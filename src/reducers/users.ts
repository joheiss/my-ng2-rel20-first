import {User} from "../models/user";
import {Action} from "@ngrx/store";
import {ADD_USER, CHANGE_USER, REMOVE_USER} from "./users-actions";


const initialState:User[] = [
    new User('1', 'Julia', false, []),
    new User('2', 'Josephina', false, []),
    new User('3', 'Lukas', true, []),
    new User('4', 'Luca', false, []),
    new User('5', 'Lisa', false, ['admin'])
];


export const users = (state = initialState, action:Action) => {

    console.log("ACTION:", action);
    switch (action.type) {
        case ADD_USER: {
            const newUser:User = Object.assign(new User(), action.payload);
            state = [
                ...state,
                newUser
            ];
            return state.sort((a:User, b:User) => a.userId.localeCompare(b.userId));
        }
        case CHANGE_USER: {
            const oldUser:User = state.filter(user => user.userId === action.payload['userId'])[0];
            const newUser:User = Object.assign(new User(), action.payload);
            state = [
                ...state.filter(user => user.userId !== oldUser.userId),
                newUser
            ];
            return state.sort((a:User, b:User) => a.userId.localeCompare(b.userId));
        }
        case REMOVE_USER: {
            state = state.filter(user => user.userId !== action.payload['userId']);
            return state.sort((a:User, b:User) => a.userId.localeCompare(b.userId));
        }
        default: {
            console.log("STATE:", state);
            return state.sort((a:User, b:User) => a.userId.localeCompare(b.userId));
        }
    }
};


