let assert = require('assert');
let urls = require('../lib/urls');

describe('Urls functions', () => {

    it('Should return the URL pointing to a category', () => {
        let params = ['category', 'abstract'];
        let expected = 'http://photocollections.io/category/abstract/p1';
        let result = urls(...params);

        assert.equal( result , expected );
    });

    it('Should return the URL pointing to a search', () => {
        let params = ['search', 'abstract'];
        let expected = 'http://photocollections.io/search/results/p1?q=abstract';
        let result = urls(...params);

        assert.equal( result , expected );
    });
})
