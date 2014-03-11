module.exports = function(app) {
    var Schema = require('mongoose').Schema;

    var organizers = Schema({
            name: {type: String, default: '', required: true},
            email: {type: String, default: '', required: true},
            social: {type: String, default: '', required: true}
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

    var calls = Schema({
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

    var comments = Schema({
            first_name: {type: String, required: true},
            last_name: {type: String, required: true},
            email: {type: String, required: true},
            date: {type: Date, default: Date.now(), required: true}
    });

    var event = Schema({
            name: {type: String, default: '', required: true},
            logo: {type: String, default: '', required: true},
            url: {type: String, index: {unique: true}, required: true},
            description: {type: String, default: '', required: true},
            country: {type: String, default: '', required: true},
            city: {type: String, default: '', required: true},
            region: {type: String, default: '', required: true},
            organizers: [organizers],
            links: {type: [String], default: []},
            date: {type: Date, default: Date.now(), required: true},
            edition: {type: String, default: '', required: true},
            price: {type: Number, default: 0.00, required: true},
            like_function: {type: Boolean, default: true},
            count_likes: {type: Number, default: 0},
            count_views: {type: Number, default: 0},
            count_comments: {type: Number, default: 0},
            comments:[comments],
            calls:[calls]
    });

    return db.model('events', event);
};