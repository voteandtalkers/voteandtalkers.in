module.exports = function(app) {
    var events = app.controllers.events;
    app.get('/events', events.events);
    app.get('/event/:id', events.event);
    app.post('/event', events.createEvent);
    app.put('/event/:id', events.updateEvent);
    app.delete('/event/:id', events.removeEvent);
};