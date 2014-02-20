module.exports = function(app) {
    var calls = app.controllers.calls;
    app.get('/call/:id', calls.call);
    app.post('/call', calls.createCall);
    app.put('/call/:id', calls.updateCall);
    app.delete('/call/:id', calls.removeCall);
};