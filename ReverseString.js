const reverseString = (s)=>{
     let i = 0;
        let j = s.length-1;
        console.log("before: " + s)
        while(i<j){            
            let temp =s[i];
            s[i] = s[j];
            s[j] = temp;
            i++;
            j--;
        }
    return s;
}

console.log(reverseString(["h","e","l","l","o"]));
console.log(reverseString(["H","a","s","s","a","n"]));

