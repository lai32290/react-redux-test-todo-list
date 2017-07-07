export const ADD = 'ADD';
export const REMOVE = 'REMOVE';

export const add = (desc) => {
    return {
        type: ADD,
        desc
    };
};

export const remove = (id) => {
    return {
        type: REMOVE,
        id
    };
};
