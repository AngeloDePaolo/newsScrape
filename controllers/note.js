var db = require("../models");

module.exports = {
    find: function(req, res) {
        db.Note.find({_headlineId:req.params.id}).then(function(searchResult){
            res.json(searchResult);
        });
    },
    create: function(req, res) {
        db.Note.create(req.body).then(function(newNote){
            res.json(newNote);
        });
    },
    delete: function(req, res) {
        db.Note.remove({_headlineId:req.params.id}).then(function(oldNote){
            res.json(oldNote);
        });
    }
};