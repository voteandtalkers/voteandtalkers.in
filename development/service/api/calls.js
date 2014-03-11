module.exports = function(app) {
    var calls = app.service.controllers.calls;
    app.get('/api/call/:id', calls.call);
    app.post('/api/call', calls.createCall);
    app.put('/api/call/:id', calls.updateCall);
    app.delete('/api/call/:id', calls.removeCall);
};