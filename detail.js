let uesrsName = localStorage.getItem('userName') || '';
let singupPage = document.getElementById('loginregister')

  singupPage.addEventListener('click',()=>{
    if(uesrsName == ''){
      location.replace('logReg.html')
    }
    else{
      location.replace('cart.html')
    }
  })