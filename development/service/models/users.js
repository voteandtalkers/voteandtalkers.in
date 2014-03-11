module.exports = function(app) {
    var Schema = require('mongoose').Schema;

    var user = Schema({
            username: {type: String, default: ''},
            email: {type: String, index: {unique: true}, required: true},
            password:{type: String, required: true},
            avatar_id: {type: String, required: true},
            avatar_url: {type: String},
            first_name: {type: String, required: true},
            secound_name: {type: String, required: true},
            bio: {type: String, required: true},
            profession: {type: String},
            company: {type: String},
            socials: { type: [String], default: [] },
            main_contact: {type: String, required: true},
            city: {type: String, required: true},
            region: {type: String, required: true},
            country: {type: String, required: true},
            birthday: {type: Date, required: true},
            events: { type: [String], default: [] },
            calls: { type: [String], default: [] }
    });

    return db.model('users', user);
};