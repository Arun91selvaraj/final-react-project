import { Employee } from "../models/employee";
import { employees } from "../repository/employees";
//const { employees } = require('../repository/employees')
import { Manager } from "./manager";

export class EmployeeManager implements Manager<Employee>{
    add(obj: Employee): boolean {

        if (this.doesExist(obj.id))
            throw new Error(`employee with id${obj.id} already exists`)

        employees.push(obj)
        return true
    }
    update(id: number, obj: Employee): boolean {
        if (!this.doesExist(obj.id))
            throw new Error(`employee with id${obj.id} does not exist`)
        const index = employees.findIndex(e => e.id == id)
        employees.splice(index, 1, obj)
        return true
    }
    remove(id: number): boolean {
        if (!this.doesExist(id))
            throw new Error(`employee with id${id} does not exist`)
        const index = employees.findIndex(e => e.id == id)
        employees.splice(index, 1)
        return true
    }
    get(id: number): Employee | undefined {
        return this.doesExist(id)
    }
    getAll(): Employee[] {
        if (employees.length > 0)
            return [...employees]
        else
            return []
    }


    private doesExist(id: number): Employee | undefined {
        if (employees.length > 0) {
            const emp = employees.find(e => e.id == id)
            if (emp)
                return emp
            else
                return undefined
        }
        return undefined
    }
}