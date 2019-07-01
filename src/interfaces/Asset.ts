'use strict'

export default interface Asset {

	// The type of asset this asset is. Ex (image, audio, etc).
	type: string,

	// The unique key for this asset.
	key: string,

	// The path to the asset.
	src: (string|Array<string>);

	// The HTMLElement data for this asset once loaded.
	data?: any;

}
