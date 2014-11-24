var path = require( "path" );

function stripExtension( string ) {
	return string.replace( /\.[^.]*/, "" );
}

function get( data, key ) {
	var match = data.match( new RegExp( "\/\/>>" + key + ": (.*)" ) );
	return match && match[ 1 ];
}

function getDependencies( data ) {
	return "implement-me";
}

function JqueryUiManifests_1_12_0() {
	this.manifests = this.files().componentFiles.filter(function( component ) {
		return ( /ui\// ).test( component.path );
	}).map(function( component ) {
		var data = component.data;
		return {
			name: stripExtension( path.basename( component.path ) ),
			description: get( data, "description" ),
			docs: get( data, "docs" ),
			category: get( data, "group" ),
			dependencies: getDependencies( data )
		};
	});
}

module.exports = JqueryUiManifests_1_12_0;
