import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add, remove } from './actions/TodoList.js';
import TodoItem from './components/TodoItem.js';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.inputs = {};

        this._add = this._add.bind(this);
        this.applyRef = this.applyRef.bind(this);
    }

    _add(e) {
        e.preventDefault();
        const desc = this.inputs.desc.value;
        this.props.add(desc);

        this.inputs.desc.value = '';
    }

    applyRef(node) {
        this.inputs[node.name] = node;
    }
    render() {
        const list = this.props.list
            .map((i, index) => <TodoItem item={i} key={index} />);
        return (
            <div>
                <form action="" onSubmit={this._add}>
                    <input type="text" name="desc" ref={this.applyRef}/>
                    <button type="submit" onClick={this._add}>Add</button>
                </form>

                <ul>
                    {list}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    list: state.list
});

const mapDispatchToProps = (dispatch) => {
    return {
        add: (desc) => {
            dispatch(add(desc));
        },
        remove: (id) => {
            dispatch(remove(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
