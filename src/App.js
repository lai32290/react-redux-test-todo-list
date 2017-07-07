import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add, remove } from './actions/TodoList.js';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this._add = this._add.bind(this);
    }

    _add(e) {
        const desc = event.target.value;
        this.props.add(desc);
    }
    render() {
        return (
            <div>
                <form>
                    <input type="text" name="desc" />
                    <button type="submit" onClick={this.props.add}>Add</button>
                </form>

                <ul>
                    <li>Item 1</li>
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
        add: (item) => {
            dispatch(add(item));
        },
        remove: (id) => {
            dispatch(remove(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
