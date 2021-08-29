
define(
	'AECC.HomepageExtension.HomepageExtension'
,   [
		'Home.View',
		'Profile.Model'
	]
,   function (
		HomeView,
		ProfileModel
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
			
			if(layout)
			{
				layout.addToViewContextDefinition('Home.View', 'isUserLoggedIn', 'boolean', function (context) {
					return profile.get('isLoggedIn') === 'T';
				});
			}

		}
	};
});
