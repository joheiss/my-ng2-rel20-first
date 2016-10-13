import {SHOW_ALL, SHOW_LOCKED, SHOW_ADMINS, SHOW_UNLOCKED} from "./users-filter-actions";
export const usersFilter = (state = user => user, action) => {

    switch(action.type) {

        case SHOW_ALL:
            return user => user;

        case SHOW_ADMINS:
            return user => user.roles && user.roles.indexOf('admin') >= 0;

        case SHOW_LOCKED:
            return user => user.locked;

        case SHOW_UNLOCKED:
            return user => !user.locked;

        default:
            return state;
    }
};
