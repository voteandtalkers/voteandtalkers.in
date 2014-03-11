module.exports = function(app) {
    var users = app.service.controllers.users;
    app.get('/api/users', users.users);
    app.get('/api/user/:id', users.user);
    app.post('/api/user', users.createUser);
    app.put('/api/user/:id', users.updateUser);
    app.delete('/api/user/:id', users.removeUser);
};