xtc.tests.Teaser = function(mod, options) {

	 // Start a QUnit module for this Terrific module
	module(this.name, {
		 // prepare something for each following test()
		setup: function () {},
		 // clean up after each test()
		teardown: function () {}
	});

	test( 'Dummy test', function() {

		ok( true, 'Teaser tests are working.' );
	});
};
