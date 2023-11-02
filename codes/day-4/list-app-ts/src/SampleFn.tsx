import React, { useState } from 'react'
import { Person } from './person'

const SampleFn = () => {
    const [counterValue, setCounterValue] = useState<number>(0)
    const [name, setName] = useState<string>('enter name here')
    const [status, setStatus] = useState<boolean>(false)
    const [person, setPerson] = useState<Person>({ name: '', id: 0, salary: 0 })

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