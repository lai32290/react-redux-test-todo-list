import React from 'react';
import { add } from '../actions/TodoList.js';
import { connect } from 'react-redux';

const TodoForm = (props) => {
    this.inputs = {};

    const onAdd = (e) => {
        e.preventDefault();

        const desc = this.inputs.desc.value;
        props.add(desc);
        this.inputs.desc.value = '';
    };

    const applyRef = (element) => {
        this.inputs[element.name] = element;
    };

    return (
        <form action="" onSubmit={onAdd}>
            <input type="text" name="desc" ref={applyRef}/>
            <button type="submit" onClick={onAdd}>Add</button>
        </form>
    );
};

const mapDispatchToProps = (dispatch) => ({
    add: (desc) => {
        dispatch(add(desc));
    }
});

export default connect(null, mapDispatchToProps)(TodoForm);
