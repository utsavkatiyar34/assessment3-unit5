
let area=document.getElementById("container");

function home(){
  window.location.href = "indicidual-brevery.html";
}


async function getData(){
 console.log(`https://api.openbrewerydb.org/breweries`);
  try{
    const res=await fetch(`https://api.openbrewerydb.org/breweries`);
    let data=await res.json();
    console.log(typeof data);
    localStorage.setItem("collection",JSON.stringify(data));
    displayData(data);
      }
  catch(err){
 }
}
// address_2: null
// address_3: null
// brewery_type: "planning"
// city: "Fayetteville"
// country: "United States"
// county_province: null
// created_at: "2021-10-23T02:24:55.243Z"
// id: "banjo-brewing-fayetteville"
// latitude: null
// longitude: null
// name: "Banjo Brewing"
// phone: "3042164231"
// postal_code: "25840"
// state: "West Virginia"
// street: null
// updated_at: "2021-10-23T02:24:55.243Z"
// website_url: null
  function displayData(data){

  data.forEach(function(data){
        let box=document.createElement("div");
        
      
        let Name=document.createElement("h1");
        Name.textContent=data.name;
        
        let Temp=document.createElement("h2");
        Temp.textContent="Type: "+ data.brewery_type;
    
        let feels_like=document.createElement("h2");
        feels_like.textContent="Country: "+data.country;
    
        let TempMax=document.createElement("h2");
        TempMax.textContent="City: "+ data.city;
        
        let TempMin=document.createElement("h2");
        TempMin.textContent="State: "+ data.state;
    
        let humidity=document.createElement("h2");
        humidity.textContent="Phone: "+data.phone;
    
        let pressure=document.createElement("h2");
        pressure.textContent="Brevery ID: "+data.id;
    
        let sunrise=document.createElement("h2");
        sunrise.textContent="Type: " +data.Type;
        
    
        box.append(Name,sunrise, sunset, Temp, feels_like, TempMax, TempMin,humidity, pressure);
        console.log(area);
        area.append(box);
      });
        }

        getData()