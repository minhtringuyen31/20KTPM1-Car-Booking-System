import createError from 'http-errors';
import bcryptjs from 'bcryptjs';
import {Consultant, Customer, Driver, User} from '../models/User.model.js'


const UserService = {
    async getUserByIdentifier(email, phone) {
        const result = await User.findOne({
            $or: [
                {email: email},
                {phone: phone}
            ]
        });
        return result
    },
    async getUserById(user_id, filter) {
        const result = await User.findOne({
            _id: user_id,
            ...filter
        });
        return result
    },
    async updateUser(user_id, data) {
        const result = await User.findOneAndUpdate(
            {_id: user_id},
            data,
            {new: true}
        );
        return result
    },
    async createUser(role, data) {
        // Hash password
        const salt = bcryptjs.genSaltSync(10)
        data.password = bcryptjs.hashSync(data.password, salt)

        let newUser

        switch (role) {
            case "customer":
                data.role = "customer"
                newUser = new Customer(data)
                break
            case "consultant":
                data.role = "consultant"
                newUser = new Consultant(data)
                break
            case "driver":
                data.role = "driver"
                newUser = new Driver(data)
                break
            default:
                throw createError.BadRequest("Invalid role")
        }

        const result = await newUser.save()
        if (!result) {
            throw createError.BadRequest("Failed to save new user to the database");
        }
        return result
    }
}

export default UserService
