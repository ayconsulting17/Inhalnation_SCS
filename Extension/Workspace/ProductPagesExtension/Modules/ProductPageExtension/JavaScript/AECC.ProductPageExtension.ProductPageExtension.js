
define(
	'AECC.ProductPageExtension.ProductPageExtension'
,   [
		'ProductDetails.Full.View',
		'Facets.ItemCell.View',
		'ProductDetails.QuickView.View',
		'Profile.Model',
		'jQuery',
		'Utils'
	]
,   function (
		ProductDetailsFullView,
		FacetsItemCellView,
		ProductDetailsQuickViewView,
		ProfileModel,
		jQuery,
		Utils
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{

			var layout = container.getComponent('Layout');
			var profile = ProfileModel.getInstance();
			
			var shoppingDomain = SC.ENVIRONMENT.shoppingDomain
			var existingFrag = Backbone.history.location.pathname;

			// var fragment = (existingFrag !== "/" && "/signup") && (profile.get('isLoggedIn') === 'F')

			if (layout) {

		
			}

			ProductDetailsFullView.prototype.getContext = _.wrap(ProductDetailsFullView.prototype.getContext, function (fn) {
				var context = fn.apply(this, _.toArray(arguments).slice(1));	
				var onlineprice = this.model.get('item').get('pricelevel5'); // Online Price - Original Price
				var saleprice = this.model.get('item').get('pricelevel7'); //Sale Price
				context.onlineprice = this.model.get('item').get('pricelevel5_formatted');
				context.saleprice = this.model.get('item').get('pricelevel7_formatted');
				context.isonsale = this.model.get('item').get('custitem_onsaleitem');
				context.isnew = this.model.get('item').get('custitem_new_arrival');
				context.manufacturer = this.model.get('item').get('manufacturer');
				context.percentoff = Math.round(Number(onlineprice) - Number(saleprice))/  Number(onlineprice)  * 100;	
				return context;
			});

			FacetsItemCellView.prototype.getContext = _.wrap(FacetsItemCellView.prototype.getContext, function (fn) {
				var view = this;
				console.log('view',view);
				var context = fn.apply(this, _.toArray(arguments).slice(1));
				var onlineprice = this.model.get('pricelevel5'); // Online Price - Original Price
				var saleprice = this.model.get('pricelevel7'); //Sale Price
				context.manufacturer = this.model.get('manufacturer');
				context.sku = this.model.get('itemid');
				context.priceplp = this.model.get('onlinecustomerprice_formatted'); // Base Price
				context.oldprice = this.model.get('pricelevel5_formatted'); // Online Price / Original price
				context.isonsale = this.model.get('custitem_onsaleitem');
				context.isnew = this.model.get('custitem_new_arrival');
				context.percentoff = Math.round(Number(onlineprice) - Number(saleprice))/  Number(onlineprice)  * 100;	
				return context;
			});

			ProductDetailsQuickViewView.prototype.getContext = _.wrap(ProductDetailsQuickViewView.prototype.getContext, function (fn) {
				var view = this;
				console.log('view-quick',view);
				var context = fn.apply(this, _.toArray(arguments).slice(1));
				var onlineprice = this.model.get('item').get('pricelevel5'); // Online Price - Original Price
				var saleprice = this.model.get('item').get('pricelevel7'); //Sale Price
				context.manufacturer = this.model.get('item').get('manufacturer');
				context.sku = this.model.get('item').get('itemid');
				context.priceplp = this.model.get('item').get('pricelevel7_formatted'); // Base Price
				context.oldprice = this.model.get('item').get('pricelevel5_formatted'); // Online Price / Original price
				context.isonsale = this.model.get('item').get('custitem_onsaleitem');
				context.isnew = this.model.get('item').get('custitem_new_arrival');
				context.percentoff = Math.round(Number(onlineprice) - Number(saleprice))/  Number(onlineprice)  * 100;	
				return context;
			});

		}
	};
});
