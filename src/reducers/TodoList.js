import { ADD, REMOVE } from '../actions/TodoList.js';

const _state = {
    list: []
};

const reducer = (state = _state, action) => {
    switch(action.type) {
        case ADD:
            const item = {
                desc: action.desc
            };
            const list = [...state.list, item];
            return Object.assign({}, state, {list});
        case REMOVE:
            const id = action.id;
            return state.list.filter(i => i.id !== id);
        default:
            return state;
    }
}

export default reducer;
