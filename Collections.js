class Collections {
    static findWhere(arr,obj) {
        let count
        let objNames = Object.getOwnPropertyNames(obj)
        for (let i=0;i<arr.length;i++) {
            count = 0
          for (let prop of objNames) {
              if (arr[i].hasOwnProperty(prop)) {
                   if (arr[i][prop] == obj[prop]) {
                       count++
                   }
              }
          }
          if (count == objNames.length) {
              return arr[i]
          }
        }
        return []
    }
    static removeWhere(arr,obj) {
        let count
        let objNames = Object.getOwnPropertyNames(obj)
        for (let i=0;i<arr.length;i++) {
            count = 0
          for (let prop of objNames) {
              if (arr[i].hasOwnProperty(prop)) {
                   if (arr[i][prop] == obj[prop]) {
                       count++
                   }
              }
          }
          if (count == objNames.length) {
              arr.splice(i,1)
              return arr
          }
        }
        return arr
    }
    static where(arr,obj) {
        let count
        let resultArray = []
        let objNames = Object.getOwnPropertyNames(obj)
        for (let i=0;i<arr.length;i++) {
            count = 0
          for (let prop of objNames) {
              if (arr[i].hasOwnProperty(prop)) {
                   if (arr[i][prop] == obj[prop]) {
                       count++
                   }
              }
          }
          if (count == objNames.length) {
              resultArray.push(arr[i])
          }
        }
        if (resultArray.length) 
           return resultArray
        else
           return []
    }
    static pluck(arr,prop) {
       let resultArray = []
       for (let i=0;i<arr.length;i++) {
           if (arr[i].hasOwnProperty(prop)) {
               resultArray.push(arr[i][prop])
           }
       }
       return resultArray
    }
    static max(arr,cb) {
        let max = 0,val,maxIndex = -1
        for (let i=0;i<arr.length;i++) {
            if (typeof cb == 'function')
               val = cb(arr[i])
            else 
              val = arr[i]
           if (max < val) {
               maxIndex = i
               max = val
           }
        }
        return arr[maxIndex]
    }
    static min(arr,cb) {
        let min = 100000,val,minIndex = -1
        for (let i=0;i<arr.length;i++) {
            if (typeof cb == 'function')
               val = cb(arr[i])
            else 
              val = arr[i]
           if (min > val) {
               minIndex = i
               min = val
           }
        }
        return arr[minIndex]
    }
    static find(arr,cb) {
        for (let a of arr) {
            if (cb(a)) {
                return a
            }
        }
        return []
    }
    static filter(arr,cb) {
        let resultArray = []
        for (let a of arr) {
            if (cb(a)) {
                resultArray.push(a)
            }
        }
        if (resultArray) 
           return resultArray
        else 
           return []
    }
    static reject(arr,cb) {
        let resultArray = []
        for (let a of arr) {
            if (!cb(a)) {
                resultArray.push(a)
            }
        }
        if (resultArray) 
           return resultArray
        else 
           return []
    }
    static every(arr,cb) {
        if (typeof cb == "undefined")
           return true
        for (let a of arr) {
            if (!cb(a)) {
               return false
            }
        }
        return true
    }
    static some(arr,cb) {
        if (typeof cb == "undefined")
            return true
        for (let a of arr) {
            if (cb(a)) {
               return true
            }
        }
        return false
    }
    static map(arr,cb) {
        let resultArray = []
        if (Array.isArray(arr)) {
            for (let a of arr){
                resultArray.push(cb(a))
            }
        } else {
            for (let [key,val] of Object.entries(arr)) {
                resultArray.push(cb(val,key))
            }
        }
       
        return resultArray
    }
    static each(arr,cb) {
        if (Array.isArray(arr)) {
            for (let a of arr) {
                cb(a)
            }
        } else {
            for (let [key,val] of Object.entries(arr)) {
                cb(val,key)
            }
        }
       
    }
    static reduce(arr,cb,init) {
        if (typeof init == "undefined") 
          init = 0
        for (let a of arr) {
            init = cb(init,a)
        }
        return init
    }
    static partition(arr,cb) {
        let resultArray1 = []
        let resultArray2 = []
        let resultArray = []
        for (let a of arr) {
            if (cb(a)) {
                resultArray1.push(a)
            } else {
                resultArray2.push(a)
            }
        }
        if (resultArray1.length && resultArray2.length) {
            resultArray.push(resultArray1)
            resultArray.push(resultArray2)
        } else if (resultArray1.length) {
            resultArray.push(resultArray1)
        } else if (resultArray2.length) {
            resultArray.push(resultArray2)
        }
        return resultArray
    }
    static size(arr) {
        if (Array.isArray(arr)) {
            return arr.length
        } else {
            return Object.getOwnPropertyNames(arr).length
        }
    }
    static groupBy(arr,cb) {
        let obj = {},val 
        for (let a of arr) {
          val = cb(a)
          if (obj.hasOwnProperty(val)) {
              obj[val].push(a)
          } else {
              obj[val] = []
              obj[val].push(a)
          }
        }
        return obj
    }
    static countBy(arr,cb) {
        let obj = {},val 
        for (let a of arr) {
          val = cb(a)
          if (obj.hasOwnProperty(val)) {
              obj[val]++
          } else {
              obj[val] = 1
          }
        }
        return obj
    }
    static indexBy(arr,prop) {
        let obj = {}
        for (let a of arr) {
            if (a.hasOwnProperty(prop)) {
                obj['"'+a[prop]+'"'] = a
            }
        }
        return obj
    }
    static sortBy(arr,prop) {
        let obj = {}
        let resultArray = []
       let pluckedArr =  this.pluck(arr,prop)
       for (let sArray of  pluckedArr.sort()) {
           obj[prop] = sArray
           resultArray.push(this.findWhere(arr,obj))
           arr = this.removeWhere(arr,obj)
       }
       return resultArray
    }
}
module.exports = Collections