let animalEmissions = localStorage.getItem("AnimalEmissions");
let animalText = document.createTextNode(animalEmissions);
document.getElementById("animalEmissions").appendChild(animalText);

let machineEmissions = localStorage.getItem("MachineEmissions");
let machineText = document.createTextNode(machineEmissions);
document.getElementById("machineEmissions").appendChild(machineText);

let totalEmissions = localStorage.getItem("TotalEmissions");
let totalText = document.createTextNode(totalEmissions);
document.getElementById("totalEmissions").appendChild(totalText);

let treesOffset =  localStorage.getItem("TreesOffset");
let treesOffetText = document.createTextNode(treesOffset);
document.getElementById("treesOffset").appendChild(treesOffetText);

let gasAndElec =  localStorage.getItem("GasAndElec");
let gasAndElecText = document.createTextNode(gasAndElec);
document.getElementById("gasAndElec").appendChild(gasAndElecText);