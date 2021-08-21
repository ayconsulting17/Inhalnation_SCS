
define(
	'AECC.LoginRedirect.LoginRedirect'
,   [
		'AECC.LoginRedirect.LoginRedirect.View',
		'Header.Profile.View',
		'Profile.Model',
		'jQuery'
	]
,   function (
		LoginRedirectView,
		HeaderProfileView,
		ProfileModel,
		jQuery
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{

			var Layout = container.getComponent('Layout');

			var profile = ProfileModel.getInstance();

			var promise = jQuery.Deferred();
			
			if (profile.get('isLoggedIn') === 'T' && profile.get('isGuest') === 'F') {
				Backbone.history.navigate('', { trigger: true });
				promise.reject();
			}

			Layout.addToViewContextDefinition('Header.View', 'isUserLoggedIn', 'boolean', function (context) {
				return profile.get('isLoggedIn') === 'T';
			});

			container.getLayout().on('beforeRender', function () {

				function generateLoginUrl () {
                    var login = container.getComponent('Environment').getSiteSetting('touchpoints.login');
					console.log('login',login)
                    var origin = container.getComponent('Environment').getConfig('currentTouchpoint');
					console.log('origin',origin)
                    var hash = Backbone.history.fragment;
					console.log('hash',hash)
                    var loginUrl = login + '&origin=' + origin + '&origin_hash=' + hash;
					console.log('loginUrl',loginUrl)
                    return loginUrl;
                }

                
                var Layout = container.getComponent('Layout');
                Layout.addToViewContextDefinition('Header.Profile.View', 'loginUrl', 'string', function (context) {
                    return generateLoginUrl()
                })

                Backbone.history.on('route', function () {
                    container.getLayout().headerViewInstance.render()
                })
            })

		}
	};
});
