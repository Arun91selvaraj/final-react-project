import React from 'react'

type ItemListPropType = {
    listOfNames: string[],
    nameChangeHandler: (name: string, i: number) => void
}
const ItemList = (props: ItemListPropType) => {
    const { listOfNames, nameChangeHandler } = props

    const liElements: JSX.Element[] =
        listOfNames.map(
            (name, i) => {
                return <li key={i}>
                    <div>
                        <input
                            type="text"
                            value={name}
                            onChange={
                                (e) => {
                                    nameChangeHandler(e.target.value, i)
                                }
                            } />
                    </div>
                </li>
            }
        )
    return (
        <div>
            <h3>List of Names</h3>
            <br />
            <ul>
                {
                    liElements
                }
            </ul>
        </div>
    )
}

export default ItemList