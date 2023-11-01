import { Component } from "react"

type CounterStateType = {
    counterValue: number
}
class CounterWithClass extends Component<{}, CounterStateType> {
    state: Readonly<CounterStateType> = {
        counterValue: 0
    }
    increaseCounterHandler = () => {
        this.setState(
            (oldState) => {
                return {
                    counterValue: oldState.counterValue + 1
                }
            }
        )
    }
    render(): React.ReactNode {
        console.log('CounterWithClass rendered')
        return (
            <div>
                <div>
                    <span>Value: &nbsp; {this.state.counterValue}</span>
                </div>
                <button
                    type='button'
                    onClick={this.increaseCounterHandler}
                >
                    Increase
                </button>
            </div>
        )
    }
}
export default CounterWithClass