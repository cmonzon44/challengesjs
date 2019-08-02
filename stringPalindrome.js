function isPalindrome(word)
{
  
  //v1
  let f=false;
  for(let w in word){
    let c2=word[word.length-(parseInt(w)+1)]
    if(word[w]==c2){
      f=true
    }else{
      return false;
    }
  }
  return f;
}

splitString.reverse()

//v2
function isPalindrome(word)
{
  
  debugger
  word = Array.from(word);
  var word2 = Array.from(word);
  var reverse = word2.reverse();

  for(var i in word ){
      if(word[i]!=reverse[i]){
        return false;
      }
  }
  return true;
}
