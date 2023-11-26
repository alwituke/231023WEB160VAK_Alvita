
let tempF   = prompt ("Šiuo metu Lietuvoje temperatūra pagal Farenheitą yra:");

function temperatureConverter(tempF) {
  let TemC = ((tempF-32)/1.8).toFixed(1);

  let tempResult = `Lietuvoje šiuo metu ${TemC} laipsnių pagal Celsijų`;

  return tempResult;

}

console.log(temperatureConverter(tempF));