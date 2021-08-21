
define(
	'AECC.HeaderExtension.HeaderExtension'
,   [
		'MultiLanguage.MultiLanguage.View',
		'Home.View',
		'Header.View',
		'Footer.View',
		'Profile.Model',
		'jQuery',
		'Utils'
	]
,   function (
		MultiLanguageView,
		HomeView,
		HeaderView,
		FooterView,
		ProfileModel,
		jQuery,
		Utils
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			// using the 'Layout' component we add a new child view inside the 'Header' existing view 
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
			
			/** @type {LayoutComponent} */
			var layout = container.getComponent('Layout');
			var profile = ProfileModel.getInstance();
			
			var shoppingDomain = SC.ENVIRONMENT.shoppingDomain
			var existingFrag = Backbone.history.location.pathname;
			
			if(layout)
			{

				layout.addToViewEventsDefinition('Header.View','click [data-action="homepage"]',
				function(event) {
				  Backbone.history.navigate(shoppingDomain, { trigger: true });
				}
			  );

				layout.addToViewContextDefinition('Home.View', 'isUserLoggedIn', 'boolean', function (context) {
					return profile.get('isLoggedIn') === 'T';
				});

				layout.addToViewContextDefinition('Header.View', 'shoppingDomain', 'string', function (context) {
					return shoppingDomain;
				});

				layout.addToViewContextDefinition('Header.View', 'showOverlay', 'boolean', function (context) {
					return (existingFrag !== "/" && "/signup") && (profile.get('isLoggedIn') === 'F') ;
				});

				layout.addToViewContextDefinition('Header.View', 'isUserLoggedIn', 'boolean', function (context) {
					return profile.get('isLoggedIn') === 'T';
				});

				layout.addToViewContextDefinition('Footer.View', 'isUserLoggedIn', 'boolean', function (context) {
					return profile.get('isLoggedIn') === 'T';
				});

				layout.addChildView('MultiLanguage.View', function () {
					return new MultiLanguageView({});
				});
				
			}

		}
	};
});
