(function($) {
	/**
	 * JsViewports module implementation.
	 *
	 * @author sharte
	 * @namespace Tc.Module
	 * @class JsViewports
	 * @extends Tc.Module
	 */
	Tc.Module.JsViewports = Tc.Module.extend({

		/**
		 * Initializes the JsViewports module.
		 *
		 * @method init
		 * @constructor
		 * @param {jQuery|Zepto} $ctx the jquery context
		 * @param {Sandbox} sandbox the sandbox to get the resources from
		 * @param {String} modId the unique module id
		 */
		init: function($ctx, sandbox, modId) {
			// call base constructor
			this._super($ctx, sandbox, modId);
			
			this.subscribe('media');
			
			this.$viewportDisplay = this.$$('.js-viewport');
		},

		/**
		 * Hook function to do all of your module stuff.
		 *
		 * @method on
		 * @param {Function} callback function
		 * @return void
		 */
		on: function(callback) {
			callback();
		},

		/**
		 * Hook function to trigger your events.
		 *
		 * @method after
		 * @return void
		 */
		after: function() {
		},
		
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		// CONNECTOR CALLBACKS

		onViewportChange: function(data) {
			if(data.state == 'match') {
				this.setViewportText(data.query.name);
			}
		},
		
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		// METHODS
		
		setViewportText: function(name) {
			this.$viewportDisplay.text(name);
		}
	});
})(Tc.$);
