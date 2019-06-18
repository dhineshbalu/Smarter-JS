class Numbers {
   static add(a,b) {
       return a+b
   }
   static ceil(num) {
       return Math.ceil(num)
   }
   static divide(a,b) {
       return a/b
   }
   static floor(num) {
       return Math.floor(num)
   }
   static mean(arr) {
      let sum = 0
      for (let a of arr) {
          sum += a
      }
      return sum/arr.length
   }
   static multiply(a,b) {
       return a*b
   }
   static subtract(a,b) {
       return a-b
   }
   static sum(arr,cb) {
       let sum = 0
       for (let a of arr) {
         if (typeof cb == "function")
           sum += cb(a)
         else 
           sum += a
       }  
       return sum
   }
}
module.exports = Numbers