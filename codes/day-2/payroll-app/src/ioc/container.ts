import { Manager } from "../manager/manager";
import { Employee } from "../models/employee";
import { EmployeeManager } from "../manager/employee-manager";

export class Container {
    private static containerInstance: Container | null = null;

    private constructor() { }

    static instantiate(): Container {
        if (this.containerInstance == null)
            this.containerInstance = new Container()

        return this.containerInstance
    }

    create(): Manager<Employee> {
        return new EmployeeManager()
    }
}