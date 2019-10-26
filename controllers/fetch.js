var db = require("../models");
var scrape = require("../scripts/scrape.js");

module.exports = {
    scrapeHeadlines: function (req, res) {
        return scrape().then(function (articles) {
            return db.Headline.create(articles);
        }).then(function (dbHeadline) {
            if (dbHeadline.length === 0) {
                res.json({ message: "No new articles found" });
            } else {
                res.json({ message: "Added new articles" });
            }
        }).catch(function (err) {
            res.json({message: "Scraped"});
        });
    }
};