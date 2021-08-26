
# Shopify Scripts Node

Node wrapper over Script tags API 

## Description

Add and remove scripit tags to your merchants Shopify stores via a single method call

## Getting Started

### Dependencies

* NodeJS

### Installing

* ```npm install https://github.com/srameshr/shopify-scripts-node --save```

### Executing program

* If you want to add or delete scripts to your merchants store
``` 
const {
	createShopifyStoreFrontScriptTag,
	deleteShopifyStoreFrontScriptTag,
} = require('shopify-scripts-node');

await createShopifyStoreFrontScriptTag({
	shopName: 'shopify-store-domain-name'
	accessToken: 'xxx-xxxx-xxxxxxxxxxxxxx'
})

await deleteShopifyStoreFrontScriptTag({
	shopName: 'shopify-store-domain-name'
	accessToken: 'xxx-xxxx-xxxxxxxxxxxxxx'
})
```

## Help

Raise on issue on the git repo.

## Authors

srameshr  


## License

This project is licensed under the MIT License - see the MIT license file for details