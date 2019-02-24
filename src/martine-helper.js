export function isClass(elt) {
  return typeof elt === 'function' && /^\s*class\s+/.test(elt.toString());
}