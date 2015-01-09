SavePackage = function(name, data) {
  data = _.clone(data);
  delete data._id;
  data.stars = (data.repoInfo)? data.repoInfo.stars : 0;
  Packages.update(name, {$set: data}, {upsert: true});
};