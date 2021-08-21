// @module NRA.MultiLanguage.MultiLanguage
define('MultiLanguage.MultiLanguage.View'
,	[
	'nra_multilanguage_multilanguage.tpl'
	,	'Backbone'
    ]
, function (
	nra_multilanguage_multilanguage_tpl
	,	Backbone
)
{
    'use strict';

	// @class NRA.MultiLanguage.MultiLanguage.View @extends Backbone.View
	return Backbone.View.extend({

		template: nra_multilanguage_multilanguage_tpl

		,	initialize: function (options) {

			this.language = [{
				selected:false
				,value: ''
				,name: "Language"
			},

			{
				
				selected:false
				,value: '/?lang=en_CA'
				,name: "EN"
			},
			{

				selected:false
				,value: '/?lang=fr_CA'
				,name: "FR"
			}

		];

		}


	,	events: {
		'change #language_selector': 'changeLanguage'
	}

	, changeLanguage: function(e){
		var selectedOption = $('#language_selector').val();
		console.log('selectedOption',selectedOption);
		//var selectedOption = jQuery(e.currentTarget).attr('value');
		// console.log(selectedOption, 'option');
		// window.location.href = Backbone.history.location.href + selectedOption;
		window.location.href = SC.SESSION.touchpoints.home+selectedOption;
	}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return NRA.MultiLanguage.MultiLanguage.View.Context
	,	getContext: function getContext()
		{
			//@class NRA.MultiLanguage.MultiLanguage.View.Context
			return {
				language: this.language
			};
		}
	});
});
