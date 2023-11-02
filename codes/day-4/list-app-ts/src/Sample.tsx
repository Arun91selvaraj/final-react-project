import { Component } from "react";
import { Person } from "./person";

type SampleStateType = {
    counterValue: number,
    name: string,
    status: boolean,
    person: Person
}
export default class Sample extends Component<{}, SampleStateType>{
    state: Readonly<SampleStateType> = {
        counterValue: 0,
        name: 'enter name here',
        status: true,
        person: {
            name: 'anil',
            id: 1,
            salary: 1000
        }
    }
    updateNameHandler = (newName: string) => {
        this.setState(
            (oldState) => {
                return {
                    name: newName
                }
            }
        )
    }
    render() {
        return (
            <div>
                <input
                    type='text'
                    value={this.state.name}
                    onChange={
                        (e) => this.updateNameHandler(
                            e.target.value)
                    } />
                <br />
                <span>{this.state.name}</span>
            </div>
        )
    }
}