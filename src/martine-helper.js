export function isClass(elt) {
  return typeof elt === 'function' && /^\s*class\s+/.test(elt.toString());
}


String.prototype.interpolate = function(result){
  return this.replace(/\{\{([^}]+)\}\}/g, function(dummy, v){
    return result[v];
  });
};