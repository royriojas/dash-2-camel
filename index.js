module.exports = function dash2Camel( name ) {
  return name.replace( /-+(.)/gi, function ( match, capture1 ) {
    return capture1.toUpperCase();
  } );
};
