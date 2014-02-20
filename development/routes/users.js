module.exports = function(app) {
    var users = app.controllers.users;
    app.get('/user/:id', users.user);
    app.post('/user', users.createUser);
    app.put('/user/:id', users.updateUser);
    app.delete('/user/:id', users.removeUser);
};