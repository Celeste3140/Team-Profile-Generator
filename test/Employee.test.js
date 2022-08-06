const Employee = require('../lib/employee.class')

describe('Employee', () => {
    describe( 'Employee',() => {
        it('should return the name of Employee', () => {
            const employee = NewEngineer ('celeste', 33, 'celeste@gmail.com'); 
            expect(employee.name.toEqual('celeste'));
            expect(employee.idNumber.toEqual(33));
            expect(employee.email.toEqual('celeste@gmail.com'))
        })
    })
})
