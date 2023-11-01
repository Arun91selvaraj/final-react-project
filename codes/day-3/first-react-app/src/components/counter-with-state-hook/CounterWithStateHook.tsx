import React, { useState } from 'react'

type CounterStateType = {
    x: number,
    y: number
}
const CounterWithStateHook = () => {
    console.log('CounterWithStateHook rendered')
    //useState hook function stores the initial value
    //and returns the reference to the value 
    //as well as gives you a reference function to update the value
    const [counterValue, setCounterValue] = useState<number>(0)
    const [counterState, setCounterState] = useState<CounterStateType>({ x: 0, y: 0 })

    //let counterValue = 0

    const increaseCounterHandler = () => {
        setCounterValue(
            (oldValue) => oldValue + 1
        )

        setCounterState(
            (prevState) => {
                return {
                    ...prevState,
                    x: prevState.x + 1
                }
            }
        )
    }
    return (
        <div>
            <div>
                <span>Value: &nbsp; {counterValue}</span>
                <br />
                <span>X Value: &nbsp; {counterState.x}</span>
                <br />
                <span>Y Value: &nbsp; {counterState.y}</span>
            </div>
            <button
                type='button'
                onClick={increaseCounterHandler}
            >
                Increase
            </button>
        </div>
    )
}

/*

*/
export default CounterWithStateHook