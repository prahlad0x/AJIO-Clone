
let uesrsName = localStorage.getItem('userName') || '';
let singupPage = document.getElementById('loginregister')

  singupPage.addEventListener('click',()=>{
    if(uesrsName == ''){
      location.href='logReg.html'
    }
    else{
      location.href ='cart.html'
    }
  })

  
let AllProducts = JSON.parse(localStorage.getItem('allProducts')) ||[]
product=localStorage.getItem("ProductId")||''
// console.log(product)
let bagproduct=JSON.parse(localStorage.getItem("bagproduct"))||[]
let wishproduct=JSON.parse(localStorage.getItem("wishproduct"))||[]

let btn1=document.getElementById("bag")
let btn2=document.getElementById("wishlist")
let image=document.getElementById("imj")
let price=document.getElementById("prc")
let category=document.getElementById("category")
let color=document.getElementById("color")
let title=document.getElementById("name")
function showdata(data){
          image.setAttribute('src',data.image)
          price.innerText=data.price
          category.innerText=data.category
          color.innerText=data.color
          title.innerText=data.title

          flag = false;
    for(let i = 0; i<bagproduct.length; i++){
      if(data.id == bagproduct[i]){
        flag = true;
      }
    }
    if(!flag){
      btn1.textContent = "Add To Bag";
    }
    else{
      
      btn1.textContent = "Remove from Bag";
    }

          btn1.addEventListener('click',(e)=>{
            if(btn1.innerText == "Add To Bag"){
                data.quantity=1
                bagproduct.push(data.id);
                console.log(data)
                localStorage.setItem("bagproduct",JSON.stringify(bagproduct));
                btn1.innerText = "Remove from Bag";
                alert("Product Added to the Bag")
              }else if(btn1.innerText == "Remove from Bag"){
                data.quantity=1
                bagproduct = bagproduct.filter((el) => el != data.id);
                localStorage.setItem("bagproduct",JSON.stringify(bagproduct));
                btn1.innerText = "Add To Bag";
                alert("Product removed from bag");
              } 
      })


      flag2 = false;
    for(let i = 0; i<wishproduct.length; i++){
      if(data.id == wishproduct[i]){
        flag2 = true;
      }
    }
    if(!flag2){
      btn2.textContent = "Save To Wishlist";
    }
    else{
      
      btn2.textContent = "Remove from Wishlist";
    }
      btn2.addEventListener('click',(e)=>{
        if(btn2.innerText == "Save To Wishlist"){
            wishproduct.push(data.id);
            console.log(wishproduct)
            localStorage.setItem("wishproduct",JSON.stringify(wishproduct));
            btn2.textContent = "Remove from Wishlist";
            alert("Product Added to the Wishlist")
          }else if(btn2.innerText == "Remove from Wishlist"){
            wishproduct = wishproduct.filter((el) => el != data.id);
            localStorage.setItem("wishproduct",JSON.stringify(wishproduct));
            btn2.innerText = "Save To Wishlist";
            alert("Product removed from wishlist");
          } 
    })


    
     }
     function Data(id){
        for(i=0;i<AllProducts.length;i++){
            if(AllProducts[i].id==id){
                showdata(AllProducts[i])

                // console.log(AllProducts[i])

                break;
            }
        }
     }
     Data(product)
    
     


