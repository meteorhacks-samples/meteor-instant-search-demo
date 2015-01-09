var packagesDump = Assets.getText('packages.dump').split('\n').filter(function(p) {
  return !!p;
});

if(Packages.find().count() < packagesDump.length) {
  console.log("adding initial set of packages (%s)", packagesDump.length);
  for(var lc=0; lc<packagesDump.length; lc++) {
    if(lc > 0 && lc % 500 == 0) {
      console.log("  added packages: ", lc);
    }
    var p = packagesDump[lc];
    p = EJSON.parse(p);
    SavePackage(p.packageName, p);
  };
  console.log("completed!");
}

