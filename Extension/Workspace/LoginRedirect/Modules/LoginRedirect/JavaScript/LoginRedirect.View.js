// @module AECC.LoginRedirect.LoginRedirect
define('AECC.LoginRedirect.LoginRedirect.View'
,	[
	'aecc_loginredirect_loginredirect.tpl'
	
	
	,	'Backbone'
    ]
, function (
	aecc_loginredirect_loginredirect_tpl
	
	
	,	Backbone
)
{
    'use strict';

	// @class AECC.LoginRedirect.LoginRedirect.View @extends Backbone.View
	return Backbone.View.extend({

		template: aecc_loginredirect_loginredirect_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new LoginRedirectModel();
			// var self = this;
         	// this.model.fetch().done(function(result) {
			// 	self.message = result.message;
			// 	self.render();
      		// });
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return AECC.LoginRedirect.LoginRedirect.View.Context
	,	getContext: function getContext()
		{
			//@class AECC.LoginRedirect.LoginRedirect.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});
