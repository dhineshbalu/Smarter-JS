const Collections  = require('./Collections')
const Arrays = require('./Arrays')
const Objects = require('./Objects')
const Numbers = require('./Numbers')
const Strings = require('./Strings')

class _S {
    //Collections methods from _
    static findWhere(arr,obj) {
      return Collections.findWhere(arr,obj)
    }
    static removeWhere(arr,obj) {
        return Collections.removeWhere(arr,obj)
    }
    static where(arr,obj) {
        return Collections.where(arr,obj)
    }
    static pluck(arr,prop) {
        return Collections.pluck(arr,prop)
    }
    static max(arr,cb) {
        return Collections.max(arr,cb)
    }
    static min(arr,cb) {
        return Collections.min(arr,cb) 
    }
    static find(arr,cb) {
        return Collections.find(arr,cb)        
    }
    static filter(arr,cb) {
        return Collections.filter(arr,cb)
    }
    static reject(arr,cb) {
        return Collections.reject(arr,cb)
    }
    static every(arr,cb) {
        return Collections.every(arr,cb)
    }
    static some(arr,cb) {
        return Collections.some(arr,cb)
    }
    static map(arr,cb) {
        return Collections.map(arr,cb)
    }
    static each(arr,cb) {
        return Collections.each(arr,cb)
    }
    static reduce(arr,cb,init) {
        return Collections.reduce(arr,cb,init)
    }
    static partition(arr,cb) {
        return Collections.partition(arr,cb)
    }
    static size(arr) {
        return Collections.size(arr) 
    }
    static groupBy(arr,cb) {
        return Collections.groupBy(arr,cb)
    }
    static countBy(arr,cb) {
        return Collections.countBy(arr,cb)
    }
    static indexBy(arr,prop) {
        return Collections.indexBy(arr,prop)
    }
    static sortBy(arr,prop) {
        return Collections.sortBy(arr,prop)
    }
    //Arrays methods from _
    static first(arr) {
        return Arrays.first(arr)
    }
    static last(arr) {
        return Arrays.last(arr)
    }
    static initial(arr) {
        return Arrays.initial(arr)
    }
    static without() {
        return Arrays.without()
    }
    static union() {
        return Arrays.union() 
    }
    static intersection() {
        return Arrays.intersection() 
    }
    static difference() {
        return Arrays.difference()
    }
    static indexVal(arr,val) {
        return Arrays.indexVal(arr,val)
    }
    static lastIndexOf(arr,val) {
        return Arrays.lastIndexOf(arr,val)
    }
    static findFirstIndex(arr,obj) {
        return Arrays.findFirstIndex(arr,obj)
    }
    static findLastIndex(arr,obj) {
        return Arrays.findLastIndex(arr,obj)
    }
    static ToObject(arr1,arr2) {
        return Arrays.ToObject(arr1,arr2)
    }
    static zip() {
        return Arrays.zip() 
    }
    static unzip() {
        return Arrays.unzip()
    }
    static uniq(arr) {
        return Arrays.uniq(arr)
    }
    static chunk(arr,chunk) {
        return Arrays.chunk(arr,chunk)
    }
    //Objects methods from _
    static getKeys(obj) {
        return Objects.getKeys(obj)
    }
    static getValues(obj) {
        return Objects.getValues(obj) 
    }
    static getPairs(obj) {
        return Objects.getPairs(obj)
    }
    static getInvert(obj) {
        return Objects.getInvert(obj)
    }
    static getExtended(obj1,obj2) {
        return Objects.getExtended(obj1,obj2)
    }
    static findKey(obj,key) {
        return Objects.findKey(obj,key)
    }
    static pick(obj,arg) {
        return Objects.pick(obj,arg)
    }
    static omit(obj,arg) {
        return Objects.omit(obj,arg) 
    }
    static has(obj,key) {
        return Objects.has(obj,key)
    }
    static getPropertyOf(obj,arg) {
        return Objects.getPropertyOf(obj,arg)
    }
    static getClone(obj) {
        return Objects.getClone(obj)
    }
    static isEqual(a,b) {
        return Objects.isEqual(a,b)
    }
    static isEmpty(obj) {
        return Objects.isEmpty(obj) 
    }
    static isArray(arr) {
        return Objects.isArray(arr)
    }
    static isObject(obj) {
        return Objects.isObject(obj)
    }
    static isFunction(fn) {
        return Objects.isFunction(fn)
    }
    static isString(str) {
        return Objects.isString(str)
    }
    static isNumber(num) {
        return Objects.isNumber(num)
    }
    static checkIsFinite(num) {
        return Objects.checkIsFinite(num)
    }
    static isDate(date) {
        return Objects.isDate(date)
    }
    static checkIsMatched(obj1,obj2) {
        return Objects.checkIsMatched(obj1,obj2)
    }
    static checkIsMap(obj) {
        return Objects.checkIsMap(obj)
    }
    static checkIsWeakMap(obj) {
        return Objects.checkIsWeakMap(obj)
    }
    static checkIsSet(obj) {
        return Objects.checkIsSet(obj)
    }
    static checkIsWeakSet(obj)  {
        return Objects.checkIsWeakSet(obj) 
    }
    static checkIsNull(obj) {
        return Objects.checkIsNull(obj)
    }
    static checkIsUndefined(obj) {
        return Objects.checkIsUndefined(obj)
    }
    static checkIsNaN(obj) {
        return Objects.checkIsNaN(obj)
    }
    static setDefault(obj1,obj2) {
        return Objects.setDefault(obj1,obj2)
    }
    static checkIsBoolean(obj) {
        return Objects.checkIsBoolean(obj)
    }
    //array methods from loadash
    static compact(arr) {
        return Arrays.compact(arr)
    }
    static concat() {
        return Arrays.concat()
    }
    static drop(arr,count) {
        return Arrays.drop(arr,count)
    }
    static dropRight(arr,count) {
        return Arrays.dropRight(arr,count)
    }
    static dropWhile(arr,cb) {
        return Arrays.dropWhile(arr,cb) 
    }
    static dropRightWhile(arr,cb) {
        return Arrays.dropRightWhile(arr,cb) 
    }
    static fill(arr,val,start,end) {
        return Arrays.fill(arr,val,start,end)
    }
    static join(arr,sep) {
        return Arrays.join(arr,sep)
    }
    static nth(arr,index) {
        return Arrays.nth(arr,index)
    }
    // Number Methods from loadash
    static add(a,b) {
        return Numbers.add(a,b)
    }
    static ceil(num) {
        return Numbers.ceil(num)
    }
    static divide(a,b) {
        return Numbers.divide(a,b) 
    }
    static floor(num) {
        return Numbers.floor(num)
    }
    static mean(arr) {
        return Numbers.mean(arr)
    }
    static multiply(a,b) {
        return Numbers.multiply(a,b)
    }
    static subtract(a,b) {
        return Numbers.subtract(a,b) 
    }
    static sum(arr,cb) {
        return Numbers.sum(arr,cb) 
    }
    // Strings methods from loadash
    static toLower(str) {
        return Strings.toLower(str)
    }
    static toUpper(str) {
        return Strings.toUpper(str)
    }
    static trim(str) {
        return Strings.trim(str)
    }
    static repeat(str,count) {
        return Strings.repeat(str,count)
    }
    static split(str,split,count) {
        return Strings.split(str,split,count)
    }
    static camelCase(str) {
        return Strings.camelCase(str)
    }
    static capitalize(s) {
        return Strings.capitalize(s)
    }
    static snakeCase(str) {
        return Strings.snakeCase(str)
    }
    static startsWith(str,check,count) {
        return Strings.startsWith(str,check,count) 
    }
    static endsWith(str,check,count) {
        return Strings.endsWith(str,check,count)
    }
}
module.exports = _S