module.exports = function(app) {
    var Schema = require('mongoose').Schema;

    var comments = Schema({
            first_name: {type: String, required: true},
            last_name: {type: String, required: true},
            email: {type: String, required: true},
            date: {type: Date, default: Date.now(), required: true},
    });

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

    var call = Schema({
            event_id: {type: String, required: true},
            first_name: {type: String, required: true},
            user_infos: [user],
            costs: {type: Boolean, default: false ,required: true},
            notes: {type: String},
            count_likes: {type: Number, default: 0, required: true},
            count_comments: {type: Number, default: 0, required: true},
            date: {type: Date, default: Date.now(), required: true},
            first_name: {type: String, required: true},
            first_name: {type: String, required: true},
            first_name: {type: String, required: true},
            url: {type: String, index: {unique: true}, required: true},
            comments: [comments]
    });

    return db.model('calls', call);
};