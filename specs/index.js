describe( 'dash-2-camel', function () {
  it( 'should transform dash-style strings to camelCase ones', function () {
    var dash2Camel = require( '../' );
    var str = 'dash-style-str';
    var expected = 'dashStyleStr';

    var actual = dash2Camel( str );
    expect( actual ).to.equal( expected );
  } );

  it( 'should ignore multiple dashes', function () {
    var dash2Camel = require( '../' );
    var str = 'dash--style--str';
    var expected = 'dashStyleStr';

    var actual = dash2Camel( str );
    expect( actual ).to.equal( expected );
  } );
} );
