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