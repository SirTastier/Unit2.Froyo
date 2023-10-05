const userInputString = prompt(
    "Please enter some froyo flavors separated by commas.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );
  
  // Split the string of numbers into an array of strings.
  const stringArray = userInputString.split(",");
  
  function displayFlavors() {
    for (let i = 0; i < stringArray.length; i++) {
      console.log(stringArray[i]);
    }
  }
  displayFlavors();

  
