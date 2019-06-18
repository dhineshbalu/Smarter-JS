# Smato-JS

The use of this library is to create some predefined Object,Array,Collection methods to be used in large scale application inorder to reduce the code quality,code redundancy.

Object-Methods
--------------

_S.keys({one: 1, two: 2, three: 3});  => ["one", "two", "three"]

_S.values({one: 1, two: 2, three: 3});  => [1, 2, 3]

_S.pairs({one: 1, two: 2, three: 3});   => [["one", 1], ["two", 2], ["three", 3]]

_S.invert({Moe: "Moses", Larry: "Louis", Curly: "Jerome"});   => {Moses: "Moe", Louis: "Larry", Jerome: "Curly"};

_S.extend({name: 'moe'}, {age: 50});   => {name: 'moe', age: 50}

_S.findKey({one: 1,two: 2},one)    => {one: 1}

_S.pick({name: 'moe', age: 50, userid: 'moe1'}, 'name', 'age');  => {name: 'moe', age: 50}

_S.omit({name: 'moe', age: 50, userid: 'moe1'}, 'userid');  => {name: 'moe', age: 50}

_S.has({a: 1, b: 2, c: 3}, "b");  => true

_S.propertyOf({name: 'moe'})('name');   => 'moe'

_S.clone({name: 'moe'});  => name: 'moe'}

var stooge = {name: 'moe', luckyNumbers: [13, 27, 34]};
var clone  = {name: 'moe', luckyNumbers: [13, 27, 34]};

_S.isEqual(stooge, clone);   => true

_S.isEmpty({});  => true

_S.isArray([1,2,3]);   => true

_S.isObject({});   => true

_S.isFunction(alert);   => true

_S.isString("moe");    => true

_S.isNumber(8.4 * 5);   => true

_S.isBoolean(null);   => false

_S.isDate(new Date());  => true

_S.isMap(new Map());   => true

_S.isWeakMap(new WeakMap());   => true

_S.isSet(new Set());  => true

_S.isWeakSet(WeakSet());  => true

_S.isNaN(undefined);   => true

_S.isNull(null);   => true

_S.isUndefined(window.missingVariable);   => true
------------------------------------------------------------------------------------------------------------------

Array - methods
--------------

_S.first([5, 4, 3, 2, 1]);    =>   5

_S.initial([5, 4, 3, 2, 1]);   =>  [5, 4, 3, 2]

_S.last([5, 4, 3, 2, 1]);     =>   1

_S.without([1, 2, 1, 0, 3, 1, 4], 0, 1);     =>   [2, 3, 4]

_S.union([1, 2, 3], [101, 2, 1, 10], [2, 1]);     =>   [1, 2, 3, 101, 10]

_S.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]);    =>   [1, 2]

_S.difference([1, 2, 3, 4, 5], [5, 2, 10]);   =>  [1, 3, 4]
 
_S.uniq([1, 2, 1, 4, 1, 3]);   =>   [1, 2, 4, 3]

_S.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]);  
 =>  ["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]

_S.unzip([["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]);   
=>   [['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]]

_S.chunk(["Tyrone", "Elie","Aidan", "Sam","Katrina", "Billie"], 2); 
 => [["Tyrone", "Elie"], ["Aidan", "Sam"], ["Katrina", "Billie"]]

_S.object(['moe', 'larry', 'curly'], [30, 40, 50]);  =>   {moe: 30, larry: 40, curly: 50}


_S.indexVal([1,2,3],3)   =>   2

_S.lastIndexOf([1,2,3,4,1],1)   =>   5

var users = [{'id': 1, 'name': 'Bob', 'last': 'Brown'},
             {'id': 2, 'name': 'Ted', 'last': 'White'},
             {'id': 3, 'name': 'Frank', 'last': 'James'},
             {'id': 4, 'name': 'Ted', 'last': 'Jones'}];

_S.findFirstIndex(users, {
  name: 'Ted'
});

=>  1


_S.findLastIndex(users, {
  name: 'Ted'
});

=>  3

-----------------------------------------------------------------------------------------------------

Collection - methods
----------------------

_S.each([1, 2, 3], function(num) { console.log(num) });   =>   1 2 3

_S.map([1, 2, 3], function(num){ return num * 3; });    => [3, 6, 9]
_S.map({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; });   => [3, 6, 9]

_S.reduce([1, 2, 3], function(init, num){ return init + num; }, 0);    => 6

_S.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });   =>  2

_S.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });   =>  [2, 4, 6]


var users = [{'id': 1, 'name': 'Bob', 'last': 'Brown'},
             {'id': 2, 'name': 'Ted', 'last': 'White'},
             {'id': 3, 'name': 'Frank', 'last': 'James'},
             {'id': 4, 'name': 'Ted', 'last': 'Jones'}]

_S.findWhere(users,{id: 4})        =>  {'id': 4, 'name': 'Ted', 'last': 'Jones'}

_S.removeWhere(users,{id: 4}) 
     =>  [{'id': 1, 'name': 'Bob', 'last': 'Brown'},
          {'id': 2, 'name': 'Ted', 'last': 'White'},
          {'id': 3, 'name': 'Frank', 'last': 'James'}]

_S.where(users,{name: 'Ted'})
   =>   [ {'id': 2, 'name': 'Ted', 'last': 'White'},
         {'id': 4, 'name': 'Ted', 'last': 'Jones'}]

_S.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });      =>    [1, 3, 5]

_S.every([2, 4, 5], function(num) { return num % 2 == 0; });       =>     false


_S.some([2, 4, 5], function(num) { return num % 2 == 0; });        =>   true

var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];

_S.pluck(stooges, 'name');     =>      ["moe", "larry", "curly"]

_S.max(stooges, function(stooge){ return stooge.age; });    =>   {name: 'curly', age: 60};

_S.min(stooges, function(stooge){ return stooge.age; });    =>   {name: 'moe', age: 40};

_S.sortBy(stooges, 'name');   =>   [{name: 'curly', age: 60}, {name: 'larry', age: 50}, {name: 'moe', age: 40}];

_S.groupBy([1.3, 2.1, 2.4], function(num){ return Math.floor(num); });    => {1: [1.3], 2: [2.1, 2.4]}

_S.indexBy(stooges, 'age');   
 =>     {
  "40": {name: 'moe', age: 40},
  "50": {name: 'larry', age: 50},
  "60": {name: 'curly', age: 60}
}

_S.countBy([1, 2, 3, 4, 5], function(num) {
  return num % 2 == 0 ? 'even': 'odd';
});

=> {odd: 3, even: 2}

_S.size([1, 2, 3, 4, 5]);   =>   5
_S.size({one: 1, two: 2, three: 3});   => 3

_S.partition([0, 1, 2, 3, 4, 5], function(num) { return num%2 ==0 });  =>  [[1, 3, 5], [0, 2, 4]]

