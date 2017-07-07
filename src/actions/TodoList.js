export const ADD = 'ADD';
export const REMOVE = 'REMOVE';

export const add = (item) => {
    return {
        type: ADD,
        item
    };
};

export const remove = (id) => {
    return {
        type: REMOVE,
        id
    };
};
