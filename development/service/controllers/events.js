module.exports = function(app) {
var app = app.service;

var Events = app.models.events;

var EventsController = {
    events: function(req, res) {
        app.helpers.database.getRecords(req, res, Events);
    },
    event: function(req, res) {
        var query = {_id: req.params.id};

        app.helpers.database.getRecord(req, res, Events, query);
    },
    createEvent: function(req, res) {
        var data = {
        };

        app.helpers.database.setRecord(req, res, Events, data, '/');
    },
    updateEvent: function(req, res) {
        var query = {_id: req.params.id};
        var data = {
        };

        app.helpers.database.updateRecord(req, res, Events, query, data, '/');
    },
    removeEvent: function(req, res) {
        var query = {_id: req.params.id};
        app.helpers.database.removeRecord(req, res, Events, query, '/');
    }
};

return EventsController;

};