const Manager = require('../lib/manager.class')

describe('Manager', () => {
    describe( 'Manager',() => {
        it('should return the name of Manager', () => {
            const manager = NewManager ('MothMan', 55, 'MothMan@gmail.com');
            expect(manager.name.toEqual('MothMan'));
            expect(manager.idNumber.toEqual(55));
            expect(manager.email.toEqual('MothMan@gmail.com'))
        })
    })
})