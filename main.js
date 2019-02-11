/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable space-infix-ops */
/* eslint-disable prefer-template */
function imageSeccess(response) {
  
//   console.log(response.data.urls.regular);

  $('body').css('background-image', "url(" + response.data.urls.regular + ")");
}
function wh(response) {
  console.log(response);
  $('#name').text( response.data.name); 
//   $('#humidity').text('Humidity:'+ response.data.main.humidity); 
//   $('#pressure').text('Pressure:'+ response.data.main.pressure); 
  
 $('#temp').text(response.data.main.temp+'C'); 
  if (response.data.weather[0].main === 'Rain') {
    $('#weather').text(':sweat_drops: :('); 

  }
  else if (response.data.weather[0].main === "Clouds") {
    $('#weather').text('cloudy :)'); 

  }
}

function Quo(response) {
  console.log(response);
   $('#q').text( response.data.quoteText); 
}

function Time(response) {
    console.log(response);
     $('#t').text(moment().format('h:mm A')); 
  }
  Time();

function imageFail(error) {
    
  console.log(error);
}
console.log(moment().format('h:mm A'));
axios({
  method: 'get',
  url: 'https://api.unsplash.com/photos/random/?client_id=32227ac59c79cd0462b39a2e392b154aaddc545d888a69f2cf57e3e3494888ff',
})
  .then(imageSeccess)
  .catch(imageFail);
const city = "Riyadh";
axios({
  method: 'get',
  url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=e419ddb0685f5e9e13c4aaa9edf2f165`,
})
  .then(wh)
  .catch(imageFail)

  axios({
  method: 'get',
  url: 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en',
  })
  .then(Quo)
  .catch(imageFail)