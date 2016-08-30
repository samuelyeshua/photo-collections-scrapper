let request = require('sync-request');
let cheerio = require('cheerio');
let urls = require('./urls');

/**
* Retornas todas as fotos selecionadas mediante
* parametros passados para a função
* @name Photos
* @param {String} [type='category'] "search" ou "category", tipo de busca
* @param {String} term Termo ou categoria de busca
* @param {Number} [page=1] Página de resultado
* @returns {Object} resultado Objecto contento fotos e informações sobre paginação
*/
module.exports = (...params) => {

	let endpoint = urls(...params);
	let req = request('GET', endpoint);
	let bodyPage = req.getBody('utf8');

	let $ = cheerio.load(bodyPage);

	let photos = $('.link-pool').map( (i, elem) => {
		return {
			title:  $(elem).children('h2').text(),
			url: $(elem).children('a').attr('href')
		};
	}).get();

	let pagination = {
		current_page: $('.current-page').text(),
		total_page: $('.total-pages').text()
	};

	return {
		photos,
		pagination,
	};
}
