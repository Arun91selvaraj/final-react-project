import React from 'react'

type NameCompPropType = {
    name: string,
    nameChangeHandler: (nameValue: string) => void
}
const NameComp = (props: Readonly<NameCompPropType>) => {
    console.log('Name Comp rendered')
    return (
        <div>
            <label htmlFor="txtName">Name:&nbsp;</label>
            <input type="text"
                id='txtName'
                value={props.name}
                onChange={
                    (e) =>
                        props.nameChangeHandler(e.target.value)
                }
            />
        </div>
    )
}

export default NameComp