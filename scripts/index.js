/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/



var fun = ()=>{
    event.preventDefault()
    let user_name = document.querySelector("#user_name").value
    let user_mail = document.querySelector("#user_email").value
    let user_country = document.querySelector("#user_country").value
    let user_obj = {
        name: user_name,
        mail: user_mail,
        country: user_country
    }
    console.log(user_obj)



   localStorage.setItem("userData", JSON.stringify(user_obj))
}
document.querySelector("#form").addEventListener("submit",fun)