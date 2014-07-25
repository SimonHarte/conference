(function ($) {
	/**
	 * PageController module implementation.
	 *
	 * @author
	 * @namespace Tc.Module
	 * @class PageController
	 * @extends Tc.Module
	 */
	Tc.Module.PageController = Tc.Module.extend({
		enquire: window.enquire,
		// em based media queries
		media: {
			breakpoints: [
				40,
				65
			]
		},

		/**
		 * Initializes the PageController module.
		 *
		 * @method init
		 * @constructor
		 * @param {jQuery|Zepto} $ctx the jquery context
		 * @param {Sandbox} sandbox the sandbox to get the resources from
		 * @param {String} modId the unique module id
		 */
		init: function ($ctx, sandbox, modId) {
			// call base constructor
			this._super($ctx, sandbox, modId);

			this.subscribe('media');
			
			// retrieve breakpoints and define media queries
			var media = this.media,
				bp1 = media.breakpoints[0],
				bp2 = media.breakpoints[1];

			media.queries = [
				{
					name: 'small',
					string: '(max-width: ' + bp1 + 'em)'
				},
				{
					name: 'medium',
					string: '(min-width: ' + (bp1 + 0.01) + 'em) and (max-width: ' + bp2 + 'em)'
				},
				{
					name: 'large',
					string: '(min-width: ' + (bp2 + 0.01) + 'em)'
				}
			];
		},

		/**
		 * Hook function to do all of your module stuff.
		 *
		 * @method on
		 * @param {Function} callback function
		 * @return void
		 */
		on: function (callback) {
			
			callback();
		},

		/**
		 * Hook function to trigger your events.
		 *
		 * @method after
		 * @return void
		 */
		after: function () {
			// register queries here so it can only trigger after all the modules are set up
			if (this.enquire) {
				var i = 0,
					queries = this.media.queries,
					len = queries.length;

				for (i; i < len; i++) {
					this.registerQuery(queries[i]);
				}
			}
		},
		
		viewportMatch: function (query, state) {
			var data = {query: query, state: state};
			this.fire('viewportChange', data, ['media']);
		},
		
		/**
		 * register a media query to trigger callback when matched
		 * this callback contains a terrific fire which announces the matching query to all modules
		 * which have subscribed to the channel "media"
		 *
		 * @this {object} module instance
		 * @param {object} query containing the query name and string
		 */
		registerQuery: function (query) {
			var mod = this;

			// use enquire to trigger viewport changes on terrific channel "media"
			this.enquire.register(query.string, {
				setup: function () {
					mod.viewportMatch(query, 'setup');
				},
				match: function () {
					mod.viewportMatch(query, 'match');
				},
				deferSetup: true
			});
		}
	});
})(Tc.$);