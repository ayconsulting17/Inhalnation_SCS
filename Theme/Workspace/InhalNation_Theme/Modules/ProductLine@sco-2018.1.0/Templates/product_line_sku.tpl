<div class="product-line-sku-container">
	
	<span class="product-line-sku-label">
		{{translate 'SKU:'}}
	</span>
	<span class="product-line-sku-value" itemprop="sku">
		{{sku}}
	</span>
	<div data-type="alert-placeholder">
		{{#if noLongerAvailable}}
		<div data-view="GlobalMessageNoLongerAvailable"></div>
		{{/if}}
	</div>

	<div class="line-stock-container">
	<span class="current-stock-line">
		{{translate 'Current Stock:'}} 
	</span>
	<span class="current-stock-line-value" itemprop="stock">
		{{quantityavailable}}
	</span>
	</div>

	{{#if showStockWarning}}
	<span class="stock-limit-warning">Stock Limit Exceeded</span>
	{{/if}}

</div>



{{!----
Use the following context variables when customizing this template:

	model (Object)
	model.item (Object)
	model.item.internalid (Number)
	model.item.type (String)
	model.quantity (Number)
	model.internalid (String)
	model.options (Array)
	model.shipaddress (undefined)
	model.shipmethod (undefined)
	model.location (String)
	model.fulfillmentChoice (String)
	sku (String)

----}}
