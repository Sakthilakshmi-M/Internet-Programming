const form = document.querySelector(".login")

form.addEventListener('submit',(e)=>{
  e.preventDefault();
   if(validateInputs())
   {
    form.submit();
   }
})

function validateInputs()
{
  let validate = true
  message = ''
  const username = document.querySelector("#username");
  const email = document.querySelector("#email");
  const address = document.querySelector("#address");
  const city = document.querySelector("#city");
  const country = document.querySelector("#country");
  const pincode = document.querySelector("#pincode");
  if(username.value === ""){
    message = "Please fill username!";
    validate=false
    showerror(username,message);
  }
  else
    showsuccess(username)

  if(email.value===""){
    message = "Please fill Email!"
    validate=false
    showerror(email,message);
  }
  else 
    showsuccess(email);

  if(address.value === '')
  {
    message = "Please enter address!"
    validate=false
    showerror(address,message);
  }
  else 
    showsuccess(address,message);

  if(city.value === '')
  {
    message = "Please enter City!"
    validate=false
    showerror(city,message);
  }
  else 
    showsuccess(city,message);

  if(country.value === '')
  {
    message = "Please enter country!"
    validate=false
    showerror(country,message);
  }
  else 
    showsuccess(country,message);

  if(pincode.value === '')
  {
    message = "Please enter pincode!"
    validate=false
    showerror(pincode,message);
  }
  else 
    showsuccess(pincode,message);
  return validate
}

function showerror(element,message) {
  const parent = element.parentElement;
  const error = parent.querySelector('.error');
  error.innerHTML = message;
}

function showsuccess(element) {
  const parent = element.parentElement;
  const error = parent.querySelector('.error');
  error.innerHTML = '';
}




