
function getData(form) {
    
    let animal1 = document.getElementById("dropdown1").value;
    //let feed1 = document.getElementById("dropdown2").value;
    let num1 = document.getElementById("number1").value;
    let animal2 = document.getElementById("dropdown3").value;
    //let feed2 = document.getElementById("dropdown4").value;
    let num2 = document.getElementById("number2").value;
    let animal3 = document.getElementById("dropdown5").value;
    //let feed3 = document.getElementById("dropdown6").value;
    let num3 = document.getElementById("number3").value;
    
    let machine1 = document.getElementById("dropdown1").value;
    //let fuel1 = document.getElementById("dropdown2").value;
    let litres1 = document.getElementById("number4").value;
    let machine2 = document.getElementById("dropdown3").value;
    //let fuel2 = document.getElementById("dropdown4").value;
    let litres2 = document.getElementById("number5").value;
    let machine3 = document.getElementById("dropdown5").value;
    //let fuel3 = document.getElementById("dropdown6").value;
    let litres3 = document.getElementById("number6").value;
    
    let treesQty1 = document.getElementById("number8").value;
    let treesQty2 = document.getElementById("number10").value;
    let treesQty3 = document.getElementById("number12").value;

    let gas = document.getElementById("number14").value;
    let elec = document.getElementById("number15").value;
  
    let gasEmis = gas * 3.71 / 1000 * 12;
    let elecEmis = elec * 3.71 / 1000 * 12;
    let totalGasAndElec = +(gasEmis + elecEmis).toFixed(2);
    let animalEmissions = +(num1 * 8.75 + num2 * 14.25 + num3 * 11.35).toFixed(2);
    
    let machineEmissions = +((litres1 * .125 + litres2 * .121 + litres3 * .128).toFixed(2));
    let treesOffset = +((treesQty1 * 0.2 + treesQty2 * 0.15 + treesQty3 * 0.175).toFixed(2));
    let totalEmissions = +(animalEmissions + machineEmissions + totalGasAndElec - treesOffset).toFixed(2);
    
    // 10% reductions
    let animalEmissionsRed = animalEmissions * 0.1;
    let machineEmissionsRed = machineEmissions * 0.1;
    let totalGasAndElecRed = totalGasAndElec * 0.1;
    let totalEmissionsReduction = totalEmissions * 0.1;


    localStorage.setItem("AnimalEmissions", animalEmissions);
    localStorage.setItem("MachineEmissions", machineEmissions);
    localStorage.setItem("TreesOffset", treesOffset);
    localStorage.setItem("TotalEmissions", totalEmissions);
    localStorage.setItem("GasAndElec", totalGasAndElec);
    // 10% reductions
    localStorage.setItem("ReductionTotal", totalEmissionsReduction);
    localStorage.setItem("ReductionAnimals", animalEmissionsRed);
    localStorage.setItem("ReductionMachines", machineEmissionsRed);
    localStorage.setItem("ReductionEnergy", totalEmissionsReduction);
  }
  
  document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();
    getData(e.target);
    console.log("sefsd");
  });

  

