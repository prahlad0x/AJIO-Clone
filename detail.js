
let AllProducts = JSON.parse(localStorage.getItem('allProducts')) ||[]
product=localStorage.getItem("ProductId")||''
// console.log(product)
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
            if(btn1.innerText=="ADD TO BAG")  {
              alert("Product added to the bag")
              btn1.innerText="Remove from bag"
              localStorage.setItem("PID",data.id)
            }
            else {
              alert("Product removed from the bag")
              btn1.innerText="ADD TO BAG"
              localStorage.removeItem("PID",data.id)
            }  
      })
      btn2.addEventListener('click',(e)=>{
        if(btn2.innerText=="SAVE TO WISHLIST")  {
            alert("Product added to the wishlist")
            btn2.innerText="Remove from wishlist"
            localStorage.setItem('pid',data.id)
          }
          else {
            alert("Product removed from the wishlist")
            btn2.innerText="Save to wishlist"
            localStorage.removeItem("pid",data.id)
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
    
     


