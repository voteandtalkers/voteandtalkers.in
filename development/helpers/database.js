module.exports = function(app) {

var database = {

    setRecord: function(req, res, model, data, redirect) {

      if (typeof redirect === 'undefined') {
        redirect = '/';
      }

      var record = new model(data);
      record.save(function(err, record) {
          res.redirect(redirect);
      });

    },
    getRecords: function(req, res, model, query) {

      if (typeof query === 'undefined') {
        query = {};
      }

      model.find(query, function (err, data) {
        if(err) {
          console.log('Houve algum erro na listagem', err);
        } else {
          res.json({
            data: data
          });
        }
      });

    },
    updateRecord: function(req, res, model, query, data, redirect) {

      model.update(query, data, function(err, data) {
          res.redirect(redirect);
      });

    },
    removeRecord: function(req, res, model, query, redirect) {

      model.remove(query, function (err, data) {
          res.redirect(redirect);
      });

    }

};

return database;

}