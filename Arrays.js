class Arrays {
    static first(arr) {
       return arr[0]
    }
    static last(arr) {
      return arr[arr.length - 1]
    }
    static initial(arr) {
        arr.splice(arr.length - 1)
        return arr
    }
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
    static indexVal(arr,val) {
      return arr.indexOf(val)
    }
    static lastIndexOf(arr,val) {
      for (let i=arr.length-1;i>=0;i--) {
        if (arr[i] == val) {
          return i
        }
      }
      return -1
    }
    static findFirstIndex(arr,obj) {
      if (typeof obj == "function") {
        for (let i=0;i<arr.length;i++) {
          if (obj(arr[i])) {
            return i
          }
        }
        return -1
      } else {
        let i,j,count
        for (i=0;i<arr.length;i++) {
          count = 0
          let objNames = Object.getOwnPropertyNames(obj)
          for (j=0;j<objNames.length;j++) {
            let prop = objNames[j]
            if (arr[i].hasOwnProperty(prop)) {
              if (obj[prop] == arr[i][prop]) {
                count++
              }
            }
          }
          if (count == objNames.length)
            return i       
        }
        return -1
      }
    }
    static findLastIndex(arr,obj) {
      if (typeof obj == "function") {
        for (let i=arr.length-1;i>=0;i--) {
          if (obj(arr[i])) {
            return i
          }
        }
        return -1
      } else {
        let i,j,count
        for (i=arr.length-1;i>=0;i--) {
          count = 0
          let objNames = Object.getOwnPropertyNames(obj)
          for (j=0;j<objNames.length;j++) {
            let prop = objNames[j]
            if (arr[i].hasOwnProperty(prop)) {
              if (obj[prop] == arr[i][prop]) {
                count++
              }
            }
          }
          if (count == objNames.length)
            return i      
        }
        return -1
      }
      
    }
    static ToObject(arr1,arr2) {
      let o = {}
      for (let i=0;i<arr1.length;i++) {
        o[arr1[i]] = arr2[i]
      }
      return o
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
    static uniq(arr) {
      let a = []
      for (let i=0;i<arr.length;i++) {
        if (a.indexOf(arr[i]) == -1) {
          a.push(arr[i])
        }
      }
      return a
    }
    static chunk(arr,chunk) {
      let a = new Array(Math.ceil(arr.length/chunk))
      for (let i=0,k=0;i<arr.length;i+=chunk,k++) {
        a[k] = new Array()
        for (let j=0;j<chunk && i+j<arr.length;j++) {
          a[k].push(arr[i+j])
        }
      }
      return a
    }
    //loadash methods
    static compact(arr) {
       let newArr = []
       for (let a of arr) {
         if (a != null && typeof a != "undefined" && a != false &&  !isNaN(a)) {
           newArr.push(a)
         }
       }
       return newArr
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
    static drop(arr,count) {
       if (typeof count == "undefined") {
         count = 1
       }
       arr.splice(0,count)
       return arr
    }
    static dropRight(arr,count) {
      if (typeof count == "undefined") {
        count = 1
      }
      arr.reverse().splice(0,count)
      return arr.reverse()
    }
    static dropWhile(arr,cb) {
      for (let i=0;arr.length;i++) {
        if (!cb(arr[i])) {
          arr.splice(0,i)
          return arr
        } 
      }
    }
    static dropRightWhile(arr,cb) {
      for (let i=arr.length-1;i>=0;i--) {
        if (!cb(arr[i])) {
          arr.reverse().splice(0,arr.length-i-1)
          return arr.reverse()
        } 
      }
    }
    static fill(arr,val,start,end) {
      if (typeof start == "undefined") {
        start = 0
      } 
      if (typeof end == "undefined") {
        end = arr.length
      }
      for (let i=start;i<end;i++) {
        arr[i] = val
      }
      return arr
    }
    static join(arr,sep) {
      let str = ''
      for (let i=0;i<arr.length;i++) {
         str +=arr[i]
         if (i != arr.length-1)
           str += sep
      }
      return str
    }
    static nth(arr,index) {
      if (index < 0) 
        return arr[arr.length+index]
      else 
        return arr[index]
    }
}
module.exports = Arrays