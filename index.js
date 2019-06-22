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
    static object(arr1,arr2) {
        return Arrays.object(arr1,arr2)
    }
    static uniq(arr) {
        return Arrays.uniq(arr)
    }
    static chunk(arr,chunk) {
        return Arrays.chunk(arr,chunk)
    }
    //arguments methods  of arrays
    static without() {
        let arr1 = arguments[0]
        let arr2 = []
        let arr3 = []
        for (let i=1;i<arguments.length;i++)
           arr2.push(arguments[i])
        for (let i=0;i<arr1.length;i++) {
          if (!(arr2.indexOf(arr1[i]) >= 0)) {
              arr3.push(arr1[i])
          }
        }
     return arr3
    }
    static union() {
        let map = new Map()
        var arr = []
        for (let i=0;i<arguments.length;i++) {
            for(let j=0;j<arguments[i].length;j++) {
                 if (!map.has(arguments[i][j])) {
                     map.set(arguments[i][j],1)
                     arr.push(arguments[i][j])
                 }
            } 
        }
        return arr
    }
    static intersection() {
        var arr1 = arguments[0]
        var arr2 = []
        for (var i=0;i<arr1.length;i++) {
            for (var j=1;j<arguments.length;j++) {
                  if (!(arguments[j].indexOf(arr1[i]) >= 0))
                     break 
            }
            if (j == arguments.length) 
              arr2.push(arr1[i])
        }
      return arr2
    }
    static difference() {
        var arr = []
       for (var i=0;i<arguments[0].length;i++) {
         for(var j=1;j<arguments.length;j++) {
            if (arguments[j].indexOf(arguments[0][i]) >= 0)
              break 
         }
            if (j == arguments.length) 
              arr.push(arguments[0][i])
       }
       return arr
    }
    static zip() {
        let a = []
        let arr = new Array(arguments.length)
        for (let i=0;i<arguments.length;i++)
           arr[i] = new Array()
        for (let i=0;i<arguments.length;i++) {
            for (let j=0;j<arguments[i].length;j++) {
                arr[j].push(arguments[i][j])
            }
        }
        a.push(arr)
        return a
    }
    static unzip() {
        let a = arguments[0]
        let arr = new Array(a.length)
        for (let i=0;i<a.length;i++)
           arr[i] = new Array()
        for (let i=0;i<a.length;i++) {
            for (let j=0;j<a[i].length;j++) {
                arr[j].push(a[i][j])
            }
        }
        return arr
    }
    static concat() {
        let newArr = []
        for (let i=0;i<arguments.length;i++) {
          if (typeof arguments[i] == "number") {
              newArr.push(arguments[i])
          }  else {
             for (let j=0;j<arguments[i].length;j++) {
               newArr.push(arguments[i][j])
             }
          }
        }
        return newArr
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
    static propertyOf(obj,arg) {
        return Objects.propertyOf(obj,arg)
    }
    static clone(obj) {
        return Objects.clone(obj)
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
    static isFinite(num) {
        return Objects.checkIsFinite(num)
    }
    static isDate(date) {
        return Objects.isDate(date)
    }
    static isMatch(obj1,obj2) {
        return Objects.isMatch(obj1,obj2)
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
    static isNaN(obj) {
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
    static padEnd(str,len,s) {
        return Strings.padEnd(str,len,s)
    }
    static padStart(str,len,s) {
        return Strings.padStart(str,len,s)
    } 
    static pad(str,len,s) {
        return Strings.pad(str,len,s)
    }
    static upperFirst(s) {
        return Strings.upperFirst(s)
    }
    static lowerFirst(s) {
        return Strings.lowerFirst(s)
    }
}
module.exports = _S