mongoose = require("mongoose");
Schema = mongoose.Schema;


headlineSchema = new Schema({
    headline: {
        type: String,
        require: true,
        unique: { index: { unique: true } }
    },
    summary: {
        type: String,
        require: true
    },
    url: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    saved: {
        type: Boolean,
        default: false
    }
});


var Headline = mongoose.model("Headline", headlineSchema);

module.exports = Headline;