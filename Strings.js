class Strings {
    static toLower(str) {
        return str.toLowerCase()
    }
    static toUpper(str) {
        return str.toUpperCase()
    }
    static trim(str) {
        return str.trim()
    }
    static repeat(str,count) {
        if (typeof count == "undefined")
          return str
        let s = ''
        for (let i=1;i<=count;i++) 
          s += str
        return s
    }
    static split(str,split,count) {
        let s = str.split(split)
        return s.splice(0,count)
    }
    static camelCase(str) {
        let Ccount = 0,Rstr = ''
        for (let i=0;i<str.length;i++) {
            if (str.charAt(i) == '_' || str.charAt(i) == '.' || str.charAt(i) == '-' || str.charAt(i) == ' ') {
                if (Ccount <= 0) {
                    continue
                } else if (str.charAt(i+1) != '_' && str.charAt(i+1) != '.' && str.charAt(i+1) != '-' && str.charAt(i+1) != ' ') {
                  Rstr += str.charAt(i+1).toUpperCase()
                  i++
                  Ccount = 0
                }
            } else if (str.charAt(i).toLowerCase() >= 'a' && str.charAt(i).toLowerCase() <='z') {
                Rstr += str.charAt(i).toLowerCase()
                Ccount++
           }
        }
        return Rstr
    }
    static capitalize(s) {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()   
    }
    static snakeCase(str) {
        let Ccount = 0,Rstr = '',flag = false,CapCount = 0
        for (let i=0;i<str.length;i++) {
            if (str.charAt(i) == '_' || str.charAt(i) == '.' || str.charAt(i) == '-' || str.charAt(i) == ' ') {
                if (Ccount <= 0 && CapCount <= 0) {
                    continue
                } else if ((Ccount > 0 || CapCount > 0) && str.charAt(i+1) >= 'A' && str.charAt(i+1) <= 'Z') {
                   flag = true
                   Rstr += '_'
                   Rstr += str.charAt(i+1).toLowerCase()
                   i++
                }
            } else if (str.charAt(i) >= 'a' && str.charAt(i) <='z') {
                Rstr += str.charAt(i).toLowerCase()
                Ccount++
           } else if (str.charAt(i) >= 'A' && str.charAt(i) <='Z') {
               CapCount++
               if (flag == false && Ccount > 0) {
                flag = true
                Rstr += '_'
                Rstr += str.charAt(i).toLowerCase()
               } else {
                Rstr += str.charAt(i).toLowerCase()
               }
           }
        }
        return Rstr
    }
    static startsWith(str,check,count) {
       if (count > 0) {
           str = str.substr(count)
           return str.startsWith(check)
       }
      else 
          return str.startsWith(check)
    }
    static endsWith(str,check,count) {
        let arr = [],s
        arr = str.split("")
        arr = arr.reverse()
        s = arr.join("")
        if (count > 0) {
            s = s.substr(count)
            return s.startsWith(check)
        }
       else 
           return s.startsWith(check)
    }
    static padEnd(str,len,s) {
       if (typeof s == "undefined") {
           s = "    "
       }
       if (str.length < len) {
            while(1) {
                for (let i=0;i<s.length && str.length < len;i++) {
                    str += s[i]
                }
                if (str.length >= len) 
                  break
            }
            return str
       }
    }
    static padStart(str,len,s) {
        let Estr = ''
        if (typeof s == "undefined") {
            s = "    "
        }
        if (str.length + Estr.length < len) {
             while(1) {
                 for (let i=0;i<s.length && str.length + Estr.length < len;i++) {
                     Estr += s[i]
                 }
                 if (str.length + Estr.length >= len) 
                   break
             }
        }
        return Estr + str
    }
    static pad(str,len,s) {
        let total = Math.abs(str.length-len)
        let pStart =  this.padStart(str,str.length + Math.floor(total/2),s)
        let pEnd =  this.padEnd("", Math.ceil(total/2),s)
        return pStart + pEnd
    }
    static upperFirst(s) {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)  
    }
    static lowerFirst(s) {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toLowerCase() + s.slice(1)   
    }
}
module.exports = Strings