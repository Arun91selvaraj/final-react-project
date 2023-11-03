import { useEffect } from "react"

type ValueCompPropType = {
    value: number,
    valueChangeHandler: () => void
}
const ValueComp = (props: Readonly<ValueCompPropType>) => {
    console.log('Value Comp rendered')

    useEffect(
        () => {
            console.log('always will be called')
            return () => console.log('will be cleaned-up always')
        }
    )

    useEffect(
        () => {
            console.log('will be called when value changes')
            return () => console.log('will be cleaned-up when value changes')
        },
        [props.value]
    )
    useEffect(
        () => {
            console.log('ONLY one time will be called')
            return () => console.log('ONLY one time will be cleaned-up')
        },
        []
    )

    return (
        <div>
            Value:&nbsp;{props.value}
            <br />
            <button
                type="button"
                onClick={props.valueChangeHandler}
            >
                Increase
            </button>
        </div>
    )
}

export default ValueComp