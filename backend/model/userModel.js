const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const validator = require('validator');

const userSchema = new Schema(
    {
        userName: {
            type: String,
            require: true,
        },
        password: {
            type: String,
            require: true,
        },
        phoneNumber: {
            type: Number,
            require: true,
            unique: true,
        },
        email: {
            type: String,
            require: true,
            unique: true,
        },
    },
    { timestamps: true }
);

//[GET]: get user
userSchema.statics.getUser = async function (_id) {
    const user = await this.findById({ _id });
    return user;
};

//[POST]: signup user
userSchema.statics.signup = async function (userName, password, phoneNumber, email) {
    if (!userName || !password || !phoneNumber || !email) {
        throw Error('All field must be filled');
    }

    if (!validator.isEmail(email)) {
        throw Error('Email invalid');
    }

    if (!validator.isStrongPassword(password)) {
        throw Error('Password is not strong enough');
    }

    //check if email is already exist or not
    const exist = await this.findOne({ email });
    if (exist) {
        throw Error('Email is already in used');
    }

    //encrypted password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    //save user to database
    const user = await this.create({ userName, password: hash, phoneNumber, email });
    return user;
};

//[POST]: login user
userSchema.statics.login = async function (userName, password) {
    if (!userName || !password) {
        throw Error('All field must be filled');
    }

    //check if userName is correct or not
    const user = await this.findOne({ userName });
    if (!user) {
        throw Error('Incorrect username');
    }

    //check if password is correct or not
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw Error('Incorrect password');
    }

    return user;
};

module.exports = mongoose.model('User', userSchema);
