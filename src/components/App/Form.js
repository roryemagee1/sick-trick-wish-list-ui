import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    constructor() {
        super()
        this.state = {
            stance: '',
            trick: '',
            obstacle: '',
            link: '',
        }
    }

    updateState = (e) => {
        const {name, value} = e.target;
        this.setState({ ...this.state, [name]: value })
        console.log(this.state)
    }

    submitTrick = (e) => {
        e.preventDefault()
        console.log("working")
        const input = { ...this.state, id: Date.now() };
        console.log(input);
        this.props.addTrick(input);
        this.setState({
            stance: '',
            trick: '',
            obstacle: '',
            link: ''
        })
    }

    render() {
        return (
            <form className="form">
                <select name="stance" value={this.state.stance} onChange={(e) => this.updateState(e)} required>
                    <option value="stanceChoice"> Choose your Stance </option>
                    <option value="regular"> Regular </option>
                    <option value="switch"> Switch </option>
                </select>
                <input type="text" name="trick" value={this.state.trick} placeholder="Name of Trick" onChange={(e) => this.updateState(e)} required/>
                <select name="obstacle" value={this.state.obstacle} onChange={(e) => this.updateState(e)} required>
                    <option value="obstacleChoice"> Choose your Obstacle </option>
                    <option value="flatground"> Flatground </option>
                    <option value="ledge"> Ledge </option>
                    <option value="rail"> Rail </option>
                    <option value="stairs"> Stairs </option>
                    <option value="pool"> Pool </option>
                </select>
                <input type="text" name="link" value={this.state.link} placeholder="Link to Tutorial" onChange={(e) => this.updateState(e)} required/>
                <input type="submit" value="Send it!" onSubmit={(e) => this.submitTrick(e)}/>
            </form>
        )
    }

}

export default Form;