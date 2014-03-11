module.exports = function(app) {
var app = app.service;

var Calls = app.models.calls;

var CallsController = {
    call: function(req, res) {
        var query = {_id: req.params.id};

        app.helpers.database.getRecord(req, res, Calls, query);
    },
    createCall: function(req, res) {
        var data = {
        };

        app.helpers.database.setRecord(req, res, Calls, data, '/');
    },
    updateCall: function(req, res) {
        var query = {_id: req.params.id};
        var data = {
        };

        app.helpers.database.updateRecord(req, res, Calls, query, data, '/');
    },
    removeCall: function(req, res) {
        var query = {_id: req.params.id};
        app.helpers.database.removeRecord(req, res, Calls, query, '/');
    }
};

return CallsController;

};