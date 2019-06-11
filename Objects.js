class Objects {
  static getKeys(obj) {
     return Object.keys(obj)
  }
  static getValues(obj) {
    return Object.values(obj)
  }
  static getPairs(obj) {
    let pairs = []
    Object.entries(obj).forEach((v)=> {
      pairs.push(v)
    })
    return pairs
  }
  static getInvert(obj) {
    let invert = {}
     for(var key in obj) {
      invert[obj[key]] = key;
    }
    return invert   
  }
  static getExtended(obj1,obj2) {
    return Object.assign(obj1,obj2)
  }
  static findKey(obj,key) {
    let o = {}
    o[key] = obj[key]
    if (obj.hasOwnProperty(key))
      return o 
     else 
      return  {}
  }
  static pick(obj,arg) {
    let o = {}
    for (let a of arg) {
      if (obj.hasOwnProperty(a)) 
        o[a] = obj[a]
    }
    return o
  }
  static omit(obj,arg) {
    for (let a of arg) {
      delete obj[a]
    }
    return obj
  }
  static has(obj,key) {
    if (obj.hasOwnProperty(key)) 
      return true
    else
      return false
  }
  static getPropertyOf(obj,arg) {
    let values = []
    if (typeof arg == 'string') {
      return obj[arg]
    } else {
      for (let a of arg) {
          if (obj.hasOwnProperty(a)) {
            values.push(obj[a])
          }
      }
      return values
    }
  }
  static getClone(obj) {
    return Object.assign({},obj)
  }
  static isEqual(a,b) {
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        if (a[propName] !== b[propName]) {
            return false;
        }
    }

    return true;
  }
  static isEmpty(obj) {
    return typeof obj == 'object' &&  Object.keys(obj).length == 0 ? true : false
  }
  static isArray(arr) {
        return  Array.isArray(arr)
  }
  static isObject(obj) {
    return typeof obj == 'object'
  }
  static isFunction(fn) {
    return typeof fn == 'function'
  }
  static isString(str) {
    return typeof str == "string"
  }
  static isNumber(num) {
    return typeof num == "number"
  }
  static checkIsFinite(num) {
    return isFinite(num)
  }
  static isDate(date) {
    return date instanceof Date
  }
  static checkIsMatched(obj1,obj2) {
     for(let [key,val] of Object.entries(obj2)) {
       if (!(obj1.hasOwnProperty(key) && obj1[key] == val))
           return false
     }
     return true
  }
  static checkIsMap(obj) {
    return obj instanceof Map
  }
  static checkIsWeakMap(obj) {
    return obj instanceof WeakMap
  }
  static checkIsSet(obj) {
    return obj instanceof Set
  }
  static checkIsWeakSet(obj) {
    return obj instanceof WeakSet
  }
  static checkIsNull(obj) {
    return obj == null
  }
  static checkIsUndefined(obj) {
    return typeof obj == "undefined"
  }
  static checkIsNaN(obj) {
    return isNaN(obj)
  }
  static setDefault(obj1,obj2) {
    for(let [key,value] of Object.entries(obj1)) {
      if (obj2.hasOwnProperty(key)) {
        obj2[key] = value
      }
    }
    return obj2
  }
  static checkIsBoolean(obj) {
    return typeof obj == "boolean"
  }
}
var smarter = {
  keys: function(obj) {
    return Objects.getKeys(obj)
  },
  values: function(obj) {
    return Objects.getValues(obj)
  },
  pairs: function(obj) {
    return Objects.getPairs(obj)
  },
  invert: function(obj) {
    return Objects.getInvert(obj)
  },
  extend: function(obj1,obj2) {
    return Objects.getExtended(obj1,obj2)
  },
  findKey: function(obj,key) {
    return Objects.findKey(obj,key)
  },
  pick: function(obj,arg) {
    return Objects.pick(obj,arg)
  },
  omit: function(obj,arg) {
    return Objects.omit(obj,arg)
  },
  has: function(obj,key) {
    return Objects.has(obj,key)
  },
  propertyOf: function(obj,arg) {
    return Objects.getPropertyOf(obj,arg)
  },
  clone: function(obj) {
    return Objects.getClone(obj)
  },
  defaults: function(obj1,obj2) {
    return Objects.setDefault(obj1,obj2)
  },
  isEqual: function(obj1,obj2) {
    return Objects.isEqual(obj1,obj2)
  },
  isEmpty: function(obj) {
    return Objects.isEmpty(obj)
  },
  isArray: function(arr) {
    return Objects.isArray(arr)
  },
  isObject: function(obj) {
    return Objects.isObject(obj) && !Array.isArray(obj)
  },
  isFunction: function(fn) {
    return Objects.isFunction(fn)
  },
  isString: function(str) {
    return Objects.isString(str)
  },
  isNumber: function(num) {
    return Objects.isNumber(num)
  },
  isFinite: function(num) {
    return Objects.checkIsFinite(num)
  },
  isDate: function(date) {
    return Objects.isDate(date)
  },
  isMatch: function(obj1,obj2) {
    return Objects.checkIsMatched(obj1,obj2)
  },
  isMap: function(obj) {
    return Objects.checkIsMap(obj)
  },
  isWeakMap: function(obj) {
    return Objects.checkIsWeakMap(obj)
  },
  isSet: function(obj) {
    return Objects.checkIsSet(obj)
  },
  isWeakSet: function(obj) {
    return Objects.checkIsWeakSet(obj)
  },
  isNull: function(obj) {
    return Objects.checkIsNull(obj)
  },
  isUndefined: function(obj) {
    return Objects.checkIsUndefined(obj)
  },
  isNaN: function(obj) {
    return Objects.checkIsNaN(obj)
  },
  isBoolean: function(obj) {
    return Objects.checkIsBoolean(obj)
  } 
}
// console.log(smarter.keys({one: 1, two: 2, three: 3}))
// console.log(smarter.values({one: 1, two: 2, three: 3}))
// console.log(smarter.pairs({one: 1, two: 2, three: 3}))
// console.log(smarter.invert({one: 1, two: 2, three: 3}))
// console.log(smarter.extend({one: 1, two: 2, three: 3}, {four: 4}))
// console.log(smarter.findKey({one: 1, two: 2, three: 3}, 'four'))
// console.log(smarter.pick({one: 1, two: 2, three: 3}, ['one','three']))
// console.log(smarter.omit({one: 1, two: 2, three: 3}, ['one','three']))
// console.log(smarter.has({one: 1, two: 2, three: 3}, 'two'))
// console.log(smarter.propertyOf({one: 1, two: 2, three: 3}, ['one','two']))
// console.log(smarter.isEqual({one: 1, two: 2, three: 3},{one: 1, two: 2, three: 3}))
// console.log(smarter.isEmpty({a: 'a'}))
// console.log(smarter.isArray([1,2,3]))
// console.log(smarter.isObject({}))
// console.log(smarter.isDate(new Date()))
// console.log(smarter.isFunction(() => {}))
// console.log(smarter.isFinite(1000/1))
// console.log(smarter.isString('abc'))
// console.log(smarter.isNumber(1))
// console.log(smarter.clone({a:'a'}))
// console.log(smarter.isMatch({name: 'moe', age: 32},{age: 32}))
// console.log(smarter.isMap(new Map()))
// console.log(smarter.isWeakMap(new WeakMap()))
// console.log(smarter.isSet(new Set()))
// console.log(smarter.isWeakSet(new WeakSet()))
// console.log(smarter.isNull(null))
// console.log(smarter.isUndefined())
// console.log(smarter.isNaN(undefined))
// console.log(smarter.defaults({flavor: "chocolate"},{flavor: "vanilla", sprinkles: "lots"}))
console.log(smarter.isBoolean(true))