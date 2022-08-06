const Intern = require('../lib/intern.class')

describe('Intern', () => {
    describe( 'Intern',() => {
        it('should return the name of Intern', () => {
            const intern = NewIntern ('bella', 11, 'bellaswan@gmail.com');
            expect(intern.name.toEqual('bella'));
            expect(intern.idNumber.toEqual(11));
            expect(intern.email.toEqual('bellaswan@gmail.com'))
        })
    })
})