
define(
	'AECC.CheckoutExtension.CheckoutExtension'
,   [
	'ProductLine.Sku.View',

	]
,   function (
	ProductLineSkuView,
	HeaderMiniCartItemCellView
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
			
			if(layout)
			{
				ProductLineSkuView.prototype.getContext = _.wrap(ProductLineSkuView.prototype.getContext, function (fn) {
					var context = fn.apply(this, _.toArray(arguments).slice(1));
					console.log('ProductLineSkuView',context)
					var quantityavailable = this.model.get('item').get('quantityavailable');
					var lineqty = this.model.get('quantity');
					context.quantityavailable = this.model.get('item').get('quantityavailable');
					context.showStockWarning = lineqty > quantityavailable;
					return context;

				});
			}

		}
	};
});
