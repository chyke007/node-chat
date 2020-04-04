const expect = require('expect');

let {isRealString} = require('./validator')


describe('isRealString', () => {
	let validated = null;
	it('Should reject non-string number',() => {
		validated = isRealString(123)
		expect(validated).toBe(false) 
	})
	it('Should reject string with only spaces',() => {
		validated = isRealString(' ')
		expect(validated).toBe(false) 
	})
	it('Should allow string with non-space character',() => {
		validated = isRealString('dd d ')
		expect(validated).toBe(true) 
	})
})