
    let capital = document.getElementById("capitalName");
    let currency = document.getElementById("currencyName");
    let population = document.getElementById("populationName");
    let region = document.getElementById("regionName");
    let country = document.getElementById("countryName");
    let flagimage = document.getElementById("countryFlag");
    let Card = document.querySelector(".card");
    let parameterElement = document.getElementById("parameter");
    let errorbox = document.querySelector(".errorbox");
    let infobox = document.querySelector(".infobox");

    function showdata(obj){
        country.innerText = obj.name;
        currency.innerText = obj.currencies[0].name;
        capital.innerText = obj.capital;
        region.innerText = obj.region;
        population.innerText = obj.population;
        flagimage.src = `${obj.flag}`;
       
    }


        parameterElement.addEventListener("click",function(){
            infobox.classList.add("bounce-top");
        })

    function setinfoandurl(paramter){
        console.log('value changed');
        let param = parameterElement.value;
        Card.style.display = "none";
        infobox.classList.remove("bounce-top");
        if( param === "Name"){
            infobox.innerText = "Search by country name. It can be the native name or partial name e.g. Belgium";
            url = `https://restcountries.com/v2/name/${paramter}`;
          
        }
        else if(param  === "Capital"){
            infobox.innerText = "Search by capital city. e.g. New Delhi or few characters del";
            url = `https://restcountries.com/v2/capital/${paramter}`;
      
            
        }
       
        else if(param === "Calling Code"){
            infobox.innerText = "Search by calling code e.g. 92,91";
            url = `https://restcountries.com/v2/callingcode/${paramter}`;
      
            
        }
        else if(param === "Select Parameter"){
            infobox.innerText = "Please Select a Paramter";
        }
       
        infobox.style.display = "block";
        return url;
    }
    function getdata(url){
        fetch(url)
        .then((response) => response.json())
        .then((data) => showdata(data[0]))
        .catch(err => {
            errorbox.innerText = "Could not find the result Please Check the Parameter";
            errorbox.style.display = "block";
            errorbox.classList.add("bounce-top");
            Card.style.display = "none";
        }
            );
        infobox.style.display = "none";
        Card.style.display = "block";
    }
 
function Showdetails(){
    let country = document.querySelector(".querybox").value;
    if(country === ""){
        errorbox.innerText = "Please enter a Parameter to Search";
            errorbox.style.display = "block";
            errorbox.classList.add("bounce-top");
    }
    else{
        errorbox.style.display = "none";
        let url = setinfoandurl(country);
        getdata(url);
    }
}

