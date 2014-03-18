$(function(){
Parse.initialize("bCi5dBHvGtOYnVzhkhS8f0GFjeEKElpFEt2IIVeO", "0JO22w3zsha7daj0NCQ3hNsIAbAsO03eH1RKhxa8");
var Backer = Parse.Object.extend("Backer");

var BackersCollection = Parse.Collection.extend({
	model: Backer
});

window.backers = new BackersCollection();
backers.fetch();