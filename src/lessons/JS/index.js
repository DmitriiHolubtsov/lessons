function JS() {

  const sendwich = {
    bread: "dutch",
    meat: "tuna",
    cheese: "swiss"
  }
   
  let { bread, meat } = sendwich;
  
  console.log(bread, meat);
  bread = "123"
  console.log(bread, meat);
  return 
}

export default JS;
