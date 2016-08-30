let assert = require('assert');
let photos = require('../lib/photos');

describe('Photos functions', () => {

	describe('should return a array of objects contains photos informations', () => {

		it('should return photos with search', function(done) {
			this.timeout(5000);
			
			let listPhotos = photos('search', 'animals');
			assert.equal( Object.prototype.toString.call(listPhotos), '[object Object]' );
			
			assert.equal( listPhotos.hasOwnProperty('photos'), true );
			assert.equal( listPhotos.hasOwnProperty('pagination'), true );

			assert.equal( Object.prototype.toString.call(listPhotos.photos), '[object Array]' );
			assert.equal( Object.prototype.toString.call(listPhotos.pagination), '[object Object]' );

			done();
		});

		it('should return photos with category', () => {

			let listPhotos = photos('category', 'abstract');
			assert.equal( Object.prototype.toString.call(listPhotos), '[object Object]' );
			
			assert.equal( listPhotos.hasOwnProperty('photos'), true );
			assert.equal( listPhotos.hasOwnProperty('pagination'), true );

			assert.equal( Object.prototype.toString.call(listPhotos.photos), '[object Array]' );
			assert.equal( Object.prototype.toString.call(listPhotos.pagination), '[object Object]' );
		});

		it('should return photos with category and page', () => {

			let listPhotos = photos('category', 'abstract', 2);
			assert.equal( Object.prototype.toString.call(listPhotos), '[object Object]' );
			
			assert.equal( listPhotos.hasOwnProperty('photos'), true );
			assert.equal( listPhotos.hasOwnProperty('pagination'), true );

			assert.equal( Object.prototype.toString.call(listPhotos.photos), '[object Array]' );
			assert.equal( Object.prototype.toString.call(listPhotos.pagination), '[object Object]' );
		});
	})
})