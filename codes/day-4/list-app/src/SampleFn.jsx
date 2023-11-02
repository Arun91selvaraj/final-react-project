import React, { useState } from 'react'

const SampleFn = () => {
    const [counterValue, setCounterValue] = useState(0)
    const [name, setName] = useState('enter name here')
    const [status, setStatus] = useState(false)
    const [person, setPerson] = useState({ name: '', id: 0, salary: 0 })

    const counterValueHandler = () => {
        setCounterValue(
            (oldValue) => oldValue + 1
        )
    }
    const nameHandler = () => {
        setName('anil')
    }
    const statusHandler = () => {
        setStatus(
            (oldStatus) => !oldStatus
        )
    }
    const personHandler = () => {
        setPerson(
            (oldPerson) => {
                return {
                    ...oldPerson,
                    name: 'sunil',
                    id: 1,
                    salary: 10000
                }
            }
        )
    }
    return (
        <div>
            <button>Incrase Counter</button>
        </div>
    )
}

export default SampleFn