const hasUpperCase = (character) => {
    for(i=0; i< character.length; i++) {   
      if(character[i] == character[i].toUpperCase() && isNaN(character[i])) {
        return true;
      }
    }
    return false;
  }
  
const checkStringForNumbers = (input) => {
    for( let i = 0; i < input.length; i++){
        if(!isNaN(input.charAt(0)) || !isNaN(input.charAt(input.length-1))) {
            return false
        }
        else if(!isNaN(input.charAt(i))){    
            return true;
        }
    }
}
  
export const isValidPassword = (input) => {
    if(input.length >=8 && hasUpperCase(input) && checkStringForNumbers(input)) {
        return true
    }
    return false
  }
  