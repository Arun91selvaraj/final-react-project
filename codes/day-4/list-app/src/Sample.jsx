import { Component } from "react";
export default class Sample extends Component {
    state = {
        counterValue: 0,
        name: 'enter value here',
        status: false,
        person: {
            name: 'anil',
            id: 1,
            salary: 1000
        }
    }
    updateNameHandler = (newName) => {
        this.setState({ name: newName })
    }
    render() {
        return (
            <div>
                Enter Value: &nbsp;
                <input
                    type='text'
                    value={this.state.name}
                    onChange={(e) => this.updateNameHandler(e.target.value)} />
                <br />
                <span>{this.state.name}</span>
            </div>
        )
    }
}
