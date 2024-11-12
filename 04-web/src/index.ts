import { User } from "./models/User";

const user = new User({id: 2, name: 'Oliver', age: 31});

user.on('save', () => {
	console.log(user);
});

user.save();


