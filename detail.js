
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

          btn1.addEventListener('click',(e)=>{
            if(btn1.innerText == "Add To Bag"){
                bagproduct.push(data.id);
                localStorage.setItem("bagproduct",JSON.stringify(bagproduct));
                btn1.textContent = "Remove from Bag";
                alert("Product Added to the Bag")
              }else if(Button2.innerText == "Remove from Bag"){
                bagproduct = bagproduct.filter((el) => el != data.id);
                localStorage.setItem("bagproduct",JSON.stringify(bagproduct));
                btn1.innerText = "Add To Bag";
                alert("Product removed from bag");
              } 
      })
      btn2.addEventListener('click',(e)=>{
        if(btn2.innerText == "Save To Wishlist"){
            wishproduct.push(data.id);
            localStorage.setItem("wishproduct",JSON.stringify(wishproduct));
            btn2.textContent = "Remove from Wishlist";
            alert("Product Added to the Bag")
          }else if(btn2.innerText == "Remove from Wishlist"){
            wishproduct = wishproduct.filter((el) => el != data.id);
            localStorage.setItem("wishproduct",JSON.stringify(wishproduct));
            btn2.innerText = "Add To Bag";
            alert("Product removed from wishlist");
          } 
    })

    
     }
     function Data(id){
        for(i=0;i<AllProducts.length;i++){
            if(AllProducts[i].id==id){
                showdata(AllProducts[i])
                console.log(AllProducts[i])
                break;
            }
        }
     }
     Data(product)
    
     


