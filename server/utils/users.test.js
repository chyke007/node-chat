const expect = require('expect')

const {Users} = require('./users')

describe('Users', () => {

	let users;
	beforeEach(() => {
		users = new Users();
		users.users = [{
			id:'1',
			name:'Mike',
			room:'Node course'
		},
		{
			id:'2',
			name:'Jen',
			room:'React course'
		},
		{
			id:'3',
			name:'Julie',
			room:'Node course'
		}]
	})

	it('Should add new user', () => {
		let users = new Users();
		let user = {
			id:'123',
			name: 'Andrew',
			room:'Test'
		}

		let resUser = users.addUser(user.id,user.name,user.room)
		expect(users.users).toEqual([user])

	})

	it('Should remove user', () => {
		let userId = '3'
		let user = users.removeUser(userId)
		expect(user.id).toEqual(userId)
		expect(users.users.length).toBe(2)

	})

	it('Should not remove user', () => {
		
		let userId = '99'
		let user = users.removeUser(userId)
		expect(user).toBeUndefined()
		expect(users.users.length).toBe(3)


	})

	it('Should find user', () => {
		
		let userId = '2'
		let user = users.getUser(userId)
		expect(user.id).toBe(userId)

	})

	it('Should not find user', () => {
		
		let userId = '99'
		let user = users.getUser(userId)
		expect(user).toBeUndefined()

	})

	it('Should return user for Node course', () => {
		
		let userList = users.getUserList('Node course')
		expect(userList).toEqual(['Mike','Julie'])

	})
	

	it('Should return user for react course', () => {
		
		let userList = users.getUserList('React course')
		expect(userList).toEqual(['Jen'])

	})
})