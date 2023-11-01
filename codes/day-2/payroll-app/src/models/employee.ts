export class Employee {

    private _totalSalary: number = 0;

    constructor(public id: number, public name: string, public basicPayment: number, public daPayment: number, public hraPayment: number) {

    }
    public get totalSalary(): number {
        return this._totalSalary;
    }
    protected set totalSalary(value: number) {
        this._totalSalary = value;
    }
    calculateSalary(): void {
        this._totalSalary = this.basicPayment + this.daPayment + this.hraPayment
    }
}