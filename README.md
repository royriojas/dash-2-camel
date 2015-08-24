[![NPM Version](http://img.shields.io/npm/v/dash-2-camel.svg?style=flat)](https://npmjs.org/package/dash-2-camel)
[![Build Status](http://img.shields.io/travis/royriojas/dash-2-camel.svg?style=flat)](https://travis-ci.org/royriojas/dash-2-camel)

# dash-2-camel
A function to transform dash-style strings to camelCase ones

## Install

```bash
npm i --save dash-2-camel
```

## Usage

```javascript
describe( 'dash-2-camel', function () {
  it( 'should transform dash-style strings to camelCase ones', function () {
    var dash2Camel = require( 'dash-2-camel' );
    var str = 'dash-style-str';
    var expected = 'dashStyleStr';

    var actual = dash2Camel( str );
    expect( actual ).to.equal( expected )
  } );

  it( 'should ignore multiple dashes', function () {
    var dash2Camel = require( 'dash-2-camel' );
    var str = 'dash--style--str';
    var expected = 'dashStyleStr';

    var actual = dash2Camel( str );
    expect( actual ).to.equal( expected )
  } );
} );
```

## License

[MIT](./LICENSE)

## Changelog

[Changelog](./changelog.md)
