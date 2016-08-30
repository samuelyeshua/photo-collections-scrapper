let assert = require('assert');
let photoCollections = require('../');

describe('photoCollections functions test', () => {

	it('check if the category features loaded to the module', () => {
		assert.equal( photoCollections.hasOwnProperty('category'), true );
		assert.equal( photoCollections.hasOwnProperty('photos'), true );
		assert.equal( photoCollections.hasOwnProperty('urls'), true );

		assert.notEqual( photoCollections.category, undefined );
		assert.notEqual( photoCollections.photos, undefined );
		assert.notEqual( photoCollections.urls, undefined );
	})
})