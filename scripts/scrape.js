var axios = require("axios");
var cheerio = require("cheerio");

var scrape = function () {
    return axios.get("https://www.nytimes.com").then(function (res) {
        console.log("hello, scraper hit");
        var $ = cheerio.load(res.data);
        var articles = [];
        $("article.css-8atqhb").each(function (i, element) {
            var head = $(this).find("h2").text().trim();
            var url = $(this).find("a").attr("href");
            var sum = $(this).find("p").text().trim();
            var dataToAdd = {
                headline: head,
                summary: sum,
                url: "https://www.nytimes.com" + url
            };
                articles.push(dataToAdd);
        });
            return articles;
    });
}

module.exports = scrape;