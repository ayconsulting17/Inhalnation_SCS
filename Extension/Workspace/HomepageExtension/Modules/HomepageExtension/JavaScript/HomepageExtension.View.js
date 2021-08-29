// @module AECC.HomepageExtension.HomepageExtension
define('AECC.HomepageExtension.HomepageExtension.View'
,	[
	'aecc_homepageextension_homepageextension.tpl'
	
	,	'AECC.HomepageExtension.HomepageExtension.SS2Model'
	
	,	'Backbone'
    ]
, function (
	aecc_homepageextension_homepageextension_tpl
	
	,	HomepageExtensionSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class AECC.HomepageExtension.HomepageExtension.View @extends Backbone.View
	return Backbone.View.extend({

		template: aecc_homepageextension_homepageextension_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new HomepageExtensionModel();
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

		//@method getContext @return AECC.HomepageExtension.HomepageExtension.View.Context
	,	getContext: function getContext()
		{
			//@class AECC.HomepageExtension.HomepageExtension.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});
