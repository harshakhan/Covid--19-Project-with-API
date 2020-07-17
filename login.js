window.onload=function(){
    var form=document.querySelector('form')
    form.addEventListener("submit",handleForm)
}
function handleForm(){
    event.preventDefault()
    var email=document.getElementById("email").value
    var password=document.getElementById("password").value
    
     
    var payload={
     email:email,
     password:password
    }


    var xhr=new XMLHttpRequest()

    xhr.open('Post', 'https://reqres.in/api/register')

   
    xhr.onload = function () {
        if (this.status == 200) {
            localStorage.setItem("user", this.response)
            window.location.replace("covid.html")
        }
        else {
            alert("Wrong Input")
        }
    }
    xhr.onerror = function () {
        alert("error")
    }

    


    xhr.setRequestHeader('Content-Type','application/json; charset=utf-8')

    xhr.send(JSON.stringify(payload))
}