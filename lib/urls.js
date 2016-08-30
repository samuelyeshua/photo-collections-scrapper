/**
* Constroi as Urls que formaram o endpoint para as requisições
* @name Urls
* @param {String} [type='category'] "search" ou "category", tipo de busca
* @param {String} term Termo ou categoria de busca
* @param {Number} [page=1] Página de resultado
* @returns {String} Url Url formatada para uso
*/
module.exports = ( type, term, page ) => {

    let baseUrl = "http://photocollections.io";
    type = (type)? type : 'category';
    page = (page)? page : 1;

    if ( !term ) {
        throw new Error('You need to specify a term or category');
    }

    if ( type == 'category' )
        return baseUrl + "/category/" + term + "/p" + page;

    return baseUrl + "/search/results" + "/p" + page + "?q=" + term;
}
