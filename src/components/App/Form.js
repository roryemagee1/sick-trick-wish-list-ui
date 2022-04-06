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
            <form className="form">
                <label for="stance" className="label">Choose your Stance:</label>
                <select name="stance">
                    <option value="Test 1"> Test 1 </option>
                    <option value="Test 2"> Test 2 </option>
                </select>
                <input type="text"/>
                <label for="obstacle" className="label">Choose your Obstacle:</label>
                <select name="obstacle">
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