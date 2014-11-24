function JqueryUiManifests_1_11_0() {
	this.manifests = glob( this.path + "/*.jquery.json" ).map(function( filepath ) {
		return JSON.parse( fs.readFileSync( filepath ) );
	}).map(function( manifest ) {
		manifest.name = manifest.name.replace( /ui\./, "" );
		manifest.title = manifest.title.replace( /^jQuery UI /, "" );
		manifest.dependencies = Object.keys( manifest.dependencies ).filter(function( dependency ) {
			return dependency !== "jquery";
		}).map(function( dependency ) {
			return dependency.replace( /ui\./, "" );
		});
		return manifest;
	});
}

module.exports = JqueryUiManifests_1_11_0;
