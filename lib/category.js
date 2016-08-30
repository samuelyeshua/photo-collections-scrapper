let request = require('sync-request');
let cheerio = require('cheerio');

/**
* Retorna todas as categorias disponiveis no site no estilo:
*
*       [
*           {
*               name: "Nome da categoria",
*               url: "Url para a categoria"
*           }
*       ]
* @name Category
* @returns {Array} categories lista de categorias
*/
module.exports = () => {

    let baseUrl = 'http://photocollections.io';
    let req = request('GET',baseUrl);
    let bodyPage = req.getBody('utf8')

    let $ = cheerio.load(bodyPage);

    let categories = $('.sub-menu li').map( (i, elem) => {
        return {
            name: $(elem).find('a').text(),
            url: $(elem).find('a').attr('href')
        }
    }).get()

    return categories;
}
