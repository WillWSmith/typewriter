const sentence = "hello there from lighthouse labs";
    //index starting point
let index = 0;
    //determines that we want to do something with each individual character
function eachCharacter() {
  if (index < sentence.length) {
    let currentChar = sentence[index];
    //does something with current character
    process.stdout.write(currentChar);
    //increment index for the next character
    index++;
    //sets the delay for calling the function 
    setTimeout(eachCharacter, 50);                               
  } else {
    //add new line at end
    process.stdout.write("\n");
  }
}

eachCharacter();