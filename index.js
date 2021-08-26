const ShopifyNodeApi = require('shopify-api-node');
const createShopifyStoreFrontScriptTag = async ({
	widgetScriptTagUrl,
	shopName,
	accessToken,
	apiVersion = '2021-01'
}) => {
	try {
		const shopifyNodeInstance = new ShopifyNodeApi({
			shopName,
			accessToken,
			apiVersion,
		});

		const existingShopifyScriptTags = await shopifyNodeInstance.scriptTag.list();
		await Promise.all(existingShopifyScriptTags.map(async tag => await shopifyNodeInstance.scriptTag.delete(tag.id)))
		await shopifyNodeInstance.scriptTag.create({
			event: "onload",
			src: widgetScriptTagUrl
		});
		return true;
	} catch (e) {
		throw e;
	}
}

const deleteShopifyStoreFrontScriptTag = async ({
	shopName,
	accessToken,
	apiVersion = '2021-01'
}) => {
	try {
		const shopifyNodeInstance = new ShopifyNodeApi({
			shopName,
			accessToken,
			apiVersion,
		});
		const existingShopifyScriptTags = await shopifyNodeInstance.scriptTag.list();
		await Promise.all(existingShopifyScriptTags.map(async tag => await shopifyNodeInstance.scriptTag.delete(tag.id)))
		return true;
	} catch (e) {
		throw e;
	}
}

module.exports = {
	createShopifyStoreFrontScriptTag,
	deleteShopifyStoreFrontScriptTag,
};
