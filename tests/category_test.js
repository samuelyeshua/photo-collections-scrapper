let assert = require('assert');
let category = require('../lib/category');

describe('category Functions', () => {

    it('should be return an array of object contain categories', function(done) {
    	this.timeout(5000);
        let result = category();

        assert.equal( Object.prototype.toString.call( result ), '[object Array]' );

        result.map( el => {
            assert.equal( Object.prototype.toString.call( el ), '[object Object]' );
        });

        done();
    })
})
