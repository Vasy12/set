'use strict';

const myFirstSet = new Set();

for (let i = 0; i < 1000000; i++) {

  myFirstSet.add( 'test' );

}

const user = {
  name: 'Test',
};

myFirstSet.add( user );
myFirstSet.add( user );
myFirstSet.add( user );
myFirstSet.add( user );

user.surname = 'Testovich';

myFirstSet.add( user );

const userCopy = JSON.parse( JSON.stringify( user ) );

myFirstSet.add( userCopy );

const map = new Map( myFirstSet.entries() );

const arr = [1, 7, 8, 1, 7, 8, 1, 7, 8, 1, 7, 8, 9, 9, 10, 11, 11, 20, 30, 40];
const setFromArray = new Set( arr );
const uniqueArrValue = [...setFromArray];

setFromArray.has( 1000 ); // false
setFromArray.has( 7 ); // true

const setValues = [...setFromArray.values()];



