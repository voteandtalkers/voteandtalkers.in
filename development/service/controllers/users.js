module.exports = function(app) {
var app = app.service;

var Users = app.models.users;

var UsersController = {
    users: function(req, res) {
        app.helpers.database.getRecords(req, res, Users);
    },
    user: function(req, res) {
        var query = {_id: req.params.id};
        app.helpers.database.getRecords(req, res, Users, query);
    },
    createUser: function(req, res) {
        var data = {
            "username":"username",
            "email":"email2@email.com",
            "password":"password",
            "avatar_id":"contato@betomuniz.com",
            "avatar_url":"",
            "first_name":"first_name",
            "secound_name":"secound_name",
            "bio":"bio",
            "profession":"profession",
            "company":"company",
            "socials": ["github", "twitter", "facebook", "gplus"],
            "main_contact":"github",
            "city":"city",
            "region":"region",
            "country":"country",
            "birthday":"01/01/9999",
            "events": ["as7d8asd","as7d8asd"],
            "calls": ["as7d8asd","as7d8asd"]
        };

        app.helpers.database.setRecord(req, res, Users, data, '/users');
    },
    updateUser: function(req, res) {
        var query = {_id: req.params.id};
        var data = {
            "username":"username",
            "email":"email@email.com",
            "password":"password",
            "avatar_id":"email@email.com",
            "avatar_url":"",
            "first_name":"first_name",
            "secound_name":"secound_name",
            "bio":"bio",
            "profession":"profession",
            "company":"company",
            "socials": ["github", "twitter", "facebook", "gplus"],
            "main_contact":"github",
            "city":"city",
            "region":"region",
            "country":"country",
            "birthday":"01/01/9999",
            "events": ["as7d8asd","as7d8asd"],
            "calls": ["as7d8asd","as7d8asd"]
        };

        app.helpers.database.updateRecord(req, res, Users, query, data, '/users');
    },
    removeUser: function(req, res) {
        var query = {_id: req.params.id};
        app.helpers.database.removeRecord(req, res, Users, query, '/users');
    }
};

return UsersController;

};