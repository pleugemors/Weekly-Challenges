"use strict";

function isVowel(char) {
      return /[aeiou]/.test(char);
  }

function getVowelSubstrings(phrase){
    let initial = -1;
    let final =0;
    let indexes = [];
    let words = []
    for(let i =0; i< phrase.length; i++){
        if(isVowel(phrase.charAt(i))){
            indexes.push(i)
        }
    }

    for(let i =0; i < indexes.length; i++){
        if(indexes.length == 1){
            words.push(phrase.charAt(indexes[0]))
        }else{
            if(!words.includes(phrase.charAt(indexes[i]))){
                words.push(phrase.charAt(indexes[i]))
            }
            for(let j = i; j< indexes.length; j++){
                let tempPhrase = phrase.substr(indexes[i],indexes[j]-indexes[i]+1);
                if(!words.includes(tempPhrase)){
                    words.push(tempPhrase);
                }
            }
            if(i == indexes.length){
                if(!words.includes(phrase.charAt(indexes[i]))){
                    words.push(phrase.charAt(indexes[i]));
                }
            }
        }
    }
    return words.sort();

}

console.log(getVowelSubstrings("anatomy"));
console.log(getVowelSubstrings("apple"));//--> ["a", "apple", "e"]
console.log(getVowelSubstrings("hmm")); //--> []

function getConsonantSubstrings(phrase){
    let initial = -1;
    let final =0;
    let indexes = [];
    let words = []
    for(let i =0; i< phrase.length; i++){
        if(!isVowel(phrase.charAt(i))){
            indexes.push(i)
        }
    }

    for(let i =0; i < indexes.length; i++){
        if(indexes.length == 1){
            words.push(phrase.charAt(indexes[0]))
        }else{
            if(!words.includes(phrase.charAt(indexes[i]))){
                words.push(phrase.charAt(indexes[i]))
            }
            for(let j = i; j< indexes.length; j++){
                let tempPhrase = phrase.substr(indexes[i],indexes[j]-indexes[i]+1);
                if(!words.includes(tempPhrase)){
                    words.push(tempPhrase);
                }
            }
            if(i == indexes.length){
                if(!words.includes(phrase.charAt(indexes[i]))){
                    words.push(phrase.charAt(indexes[i]));
                }
            }
        }
    }
    return words.sort();
}
console.log(getConsonantSubstrings("aviation"));//--> ["n", "t", "tion", "v", "viat", "viation"]

console.log(getConsonantSubstrings("motor"));//-->["m", "mot", "motor", "r", "t", "tor"]

function redundant(str){
	return () => str;
}
const f1 = redundant("apple")//f1() --> "apple"
console.log(f1);
const f2 = redundant("pear")//f2() --> "pear"
console.log(f2);
const f3 = redundant("")//f3() -->""
console.log(f3);