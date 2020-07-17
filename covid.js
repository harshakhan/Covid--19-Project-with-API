
window.onload =function(){
 

  var btn = document.getElementById("submit")
  btn.addEventListener("click", handleSubmit)
}

function handleSubmit(){
  var country = document.getElementById("country").value
  console.log(country)

  var xhr = new XMLHttpRequest()
  xhr.open("GET","https://corona.lmao.ninja/v2/countries/"+country)
  xhr.setRequestHeader('Content-Type','application/json; charset=utf-8')

  xhr.send()

  xhr.onload = function(){
    var x = JSON.parse(this.response)
    console.log(x) //data are coming 
    renderDom(x)
  }
 
  
}

function renderDom(x){
  // console.log(arr)
   var p1 = document.getElementById("country")
   p1.innerHTML = x.country

   var p2 = document.getElementById("active")
   p2.innerHTML = x.active

   var p3 = document.getElementById("cases")
   p3.innerHTML = x.cases

   var p4 = document.getElementById("critical")
   p4.innerHTML = x.critical

   var p5 = document.getElementById("deaths")
   p5.innerHTML = x.deaths

   var p6 = document.getElementById("recovered")
   p6.innerHTML = x.recovered

   var p7 = document.getElementById("tests")
   p7.innerHTML = x.tests

   var p8 = document.getElementById("flag")
   p8.src = x.countryInfo.flag

}