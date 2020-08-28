function removeProperty(obj, prop) {
  var hasProps = obj.hasOwnProperty(prop);
  if(hasProps == true) {
    delete obj[prop]
  }

  return hasProps;
}
