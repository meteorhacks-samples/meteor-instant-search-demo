Packages = new Mongo.Collection('packages');

if(Meteor.isServer) {
  Packages._ensureIndex({packageName: 1, description: 1});
}