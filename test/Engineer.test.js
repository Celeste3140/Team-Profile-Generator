const Engineer = require('../lib/engineer.class')

describe('Engineer', () => {
    describe( 'Engineer',() => {
        it('should return the name of Engineer', () => {
            const engineer = NewEngineer ('Tom', 24, 'Tomnook@gmail.com');
            expect(engineer.name.toEqual('Tom'));
            expect(engineer.idNumber.toEqual(24));
            expect(engineer.email.toEqual('Tomnook@gmail.com'))
        })
    })
})
