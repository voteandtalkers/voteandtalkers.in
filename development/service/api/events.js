module.exports = function(app) {
    var events = app.service.controllers.events;
    app.get('/api/events', events.events);
    app.get('/api/event/:id', events.event);
    app.post('/api/event', events.createEvent);
    app.put('/api/event/:id', events.updateEvent);
    app.delete('/api/event/:id', events.removeEvent);
};