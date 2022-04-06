import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <form>
                <select>
                    <option value="Test 1"> Test 1 </option>
                    <option value="Test 2"> Test 2 </option>
                </select>
                <input type="text"/>
                <select>
                    <option value="Test 1"> Test 1 </option>
                    <option value="Test 2"> Test 2 </option>
                </select>
                <input type="text"/>
                <input type="submit" value="Send it!"/>
            </form>
        )
    }

}

export default Form;