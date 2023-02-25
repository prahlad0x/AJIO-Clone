let API = JSON.parse(localStorage.getItem('allProducts')) ||[];
let searchkey = localStorage.getItem("search-key") || "" ;
let rightDivEl = document.querySelector(".right");
let total = document.getElementById("total")

function Display(data) {
  // let categoryHead = "shirt";
  // let DescPara = "hthasshasjthkjjjdjjdksjdfsjdfsjcbnxcmdjfhfhhfjkjs";
    total.textContent = data.length
  rightDivEl.innerHTML = "";

  data.forEach((ele, ind) => {
    let div = document.createElement("div");
    let image = document.createElement("img");
    let headDiv = document.createElement("div");
    let brand = document.createElement("h4");
    let titleDiv = document.createElement("div");
    let title = document.createElement("p");
    let price = document.createElement("p");
    let btnDiv = document.createElement("div");
    let offerDiv = document.createElement("div");
    let offer = document.createElement("p");
    let a1 = document.createElement("a")
    let a2 = document.createElement("a")
    let Button1 = document.createElement("button");
    let Button2 = document.createElement("button");

    image.src = ele.image;
    headDiv.setAttribute("class", "headdiv");
    titleDiv.setAttribute("class", "headtitle");
    brand.textContent = ele.title;
    title.textContent = ele.description;
    // offer.textContent = ele.price - ((15/100)*ele.price)
    offer.textContent = `Rs. ${ele.price - Math.ceil((15 / 100) * ele.price)}`;
    offerDiv.setAttribute("class", "offerdiv");
    price.textContent = "Rs." + ele.price;
    Button1.textContent = "Show Details";
    Button2.textContent = "Add To Bag";

    // a1.href = ""
    // a2.href = ""

    // Button1.addEventListener("click",()=>{
      
    // })
    // Button2.addEventListener("click",()=>{

    // })

    a1.append(Button1)
    a2.append(Button2)
    btnDiv.append(a1, a2);
    // headDiv.append(brand)
    offerDiv.append(offer, price);
    // titleDiv.append(title)
    div.append(image, brand, title, offerDiv, btnDiv);
    rightDivEl.append(div);
  });
}
// Display(API);

if(searchkey !== ""){
  let filtered = API.filter((ele) =>{
    if(ele.category == searchkey){
      return ele;
    }
  })
  if(filtered.length == 0){
    Display(API);
  }else{
    Display(filtered);
  }
}else{
  Display(API);
}
// Catching all HTML element IDs for filtering

// ************************** According to gender *************************************************
let MaleEl = document.getElementById("Male");
let FemaleEl = document.getElementById("Female");

// ************************** According to Category ************************************************
let ShirtEl = document.getElementById("Shirt");
let JeansEl = document.getElementById("Jeans");
let KurtasEl = document.getElementById("Kurtas");
let SareesEl = document.getElementById("Sarees");
let ShoesEl = document.getElementById("Shoes");
let SandalEl = document.getElementById("Sandal");

// ************************** According to the Price *************************************************
let B1El = document.getElementById("B1");
let B2El = document.getElementById("B2");
let B3El = document.getElementById("B3");
let B4El = document.getElementById("B4");
let B5El = document.getElementById("B5");

// ************************** According to Color *****************************************************
let BlueEl = document.getElementById("Blue");
let WhiteEl = document.getElementById("White");
let BlackEl = document.getElementById("Black");
let GreyEl = document.getElementById("Grey");
let MaroonEl = document.getElementById("Maroon");
let OliveEl = document.getElementById("Olive");
let PinkEl = document.getElementById("Pink");
let MultiEl = document.getElementById("Multi");

// ********************************** Sorting Element ******************************************
let filterEl = document.getElementById("filter");

filterEl.addEventListener("change",() =>{
        if(filterEl.value == ""){
          let filtered = API.sort((a,b)=>{
          if(a.id > b.id ){
              return 1
          }
          if(a.id < b.id ){
              return -1;
          }
          return 0
      })
      Display(filtered)
      }
      else if(filterEl.value == "l2h"){
              let filtered =  API.sort((a,b)=>{
              return a.price - b.price
          })
          Display(filtered)
      }
      else if(filterEl.value == "h2l"){
          let filtered = API.sort((a,b)=>{
            return b.price - a.price
          })
          Display(filtered)
      }else if(filterEl.value == "asc"){
        let filtered = API.sort((a,b)=>{
            if(a.title > b.title ){
                return 1
            }
            if(a.title < b.title ){
                return -1;
            }
            return 0
        })
        Display(filtered)
    }else if(filterEl.value == "des"){
        let filtered = API.sort((a,b)=>{
            if(a.title < b.title ){
                return 1
            }
            if(a.title > b.title ){
                return -1;
            }
            return 0
        })
        Display(filtered)
    }
})

// ***************************** According to Color Functionality ******************************************

PinkEl.addEventListener("change", (e) => {
  if (e.target.checked) {
    let filteredData = API.filter((ele) => {
      if (ele.color == PinkEl.value) {
        return true;
      }
    });
    Display(filteredData);
    document.querySelector(".product-desc").textContent = `All ${PinkEl.value} Category`;
  } else {
    Display(API);
    document.querySelector(".product-desc").textContent = "Product";
  }
});

BlueEl.addEventListener("change", (e) => {
    if (e.target.checked) {
      let filteredData = API.filter((ele) => {
        if (ele.color == BlueEl.value) {
          return true;
        }
      });
      Display(filteredData);
      document.querySelector(".product-desc").textContent = `All ${BlueEl.value} Category`;
    } else {
      Display(API);
      document.querySelector(".product-desc").textContent = " All Product";
    }
  });

WhiteEl.addEventListener("change", (e) => {
    if (e.target.checked) {
      let filteredData = API.filter((ele) => {
        if (ele.color == WhiteEl.value) {
          return true;
        }
      });
      Display(filteredData);
      document.querySelector(".product-desc").textContent = `All ${WhiteEl.value} Category`;
    } else {
      Display(API);
      document.querySelector(".product-desc").textContent = " All Product";
    }
  });

BlackEl.addEventListener("change", (e) => {
    if (e.target.checked) {
      let filteredData = API.filter((ele) => {
        if (ele.color == BlackEl.value) {
          return true;
        }
      });
      Display(filteredData);
      document.querySelector(".product-desc").textContent = `All ${BlackEl.value} Category`;
    } else {
      Display(API);
      document.querySelector(".product-desc").textContent = " All Product";
    }
});

GreyEl.addEventListener("change", (e) => {
    if (e.target.checked) {
      let filteredData = API.filter((ele) => {
        if (ele.color == GreyEl.value) {
          return true;
        }
      });
      Display(filteredData);
      document.querySelector(".product-desc").textContent = `All ${GreyEl.value} Category`;
    } else {
      Display(API);
      document.querySelector(".product-desc").textContent = " All Product";
    }
});

MaroonEl.addEventListener("change", (e) => {
    if (e.target.checked) {
      let filteredData = API.filter((ele) => {
        if (ele.color == MaroonEl.value) {
          return true;
        }
      });
      Display(filteredData);
      document.querySelector(".product-desc").textContent = `All ${MaroonEl.value} Category`;
    } else {
      Display(API);
      document.querySelector(".product-desc").textContent = " All Product";
    }
});

OliveEl.addEventListener("change", (e) => {
    if (e.target.checked) {
      let filteredData = API.filter((ele) => {
        if (ele.color == OliveEl.value) {
          return true;
        }
      });
      Display(filteredData);
      document.querySelector(".product-desc").textContent = `All ${OliveEl.value} Category`;
    } else {
      Display(API);
      document.querySelector(".product-desc").textContent = " All Product";
    }
});

MultiEl.addEventListener("change", (e) => {
    if (e.target.checked) {
      let filteredData = API.filter((ele) => {
        if (ele.color == MultiEl.value) {
          return true;
        }
      });
      Display(filteredData);
      document.querySelector(".product-desc").textContent = `All ${MultiEl.value} Category`;
    } else {
      Display(API);
      document.querySelector(".product-desc").textContent = " All Product";
    }
});

// ****************************** According to Price functionality **************************************

B1El.addEventListener("change", (e) =>{
    if(e.target.checked){
        let filterData = API.filter((ele) => {
            if(ele.price < 100){
                return true;
            }
        });
        Display(filterData)
        document.querySelector(".product-desc").textContent = `All product less than ${B1El.value}`;
    }else{
        Display(API);
        document.querySelector(".product-desc").textContent = " All Product";
    }
});

B2El.addEventListener("change", (e) =>{
    if(e.target.checked){
        let filterData = API.filter((ele) => {
            if(ele.price > 100  && ele.price < 500){
                return true;
            }
        });
        Display(filterData)
        document.querySelector(".product-desc").textContent = `All product ${B2El.value}`;
    }else{
        Display(API);
        document.querySelector(".product-desc").textContent = " All Product";
    }
});

B3El.addEventListener("change", (e) =>{
    if(e.target.checked){
        let filterData = API.filter((ele) => {
            if(ele.price > 500  && ele.price < 1000){
                return true;
            }
        });
        Display(filterData)
        document.querySelector(".product-desc").textContent = `All product ${B3El.value}`;
    }else{
        Display(API);
        document.querySelector(".product-desc").textContent = " All Product";
    }
});

B4El.addEventListener("change", (e) =>{
    if(e.target.checked){
        let filterData = API.filter((ele) => {
            if(ele.price > 1000  && ele.price < 1500){
                return true;
            }
        });
        Display(filterData)
        document.querySelector(".product-desc").textContent = `All product ${B4El.value}`;
    }else{
        Display(API);
        document.querySelector(".product-desc").textContent = " All Product";
    }
});

B5El.addEventListener("change", (e) =>{
    if(e.target.checked){
        let filterData = API.filter((ele) => {
            if(ele.price > 1500){
                return true;
            }
        });
        Display(filterData)
        document.querySelector(".product-desc").textContent = `All product ${B5El.value}`;
    }else{
        Display(API);
        document.querySelector(".product-desc").textContent = " All Product";
    }
});

// ********************************** According to Category *******************************

ShirtEl.addEventListener("change" , (e)=>{
    if(e.target.checked){
        let filterData = API.filter((ele) => {
            if(ele.category.toUpperCase() == ShirtEl.value.toUpperCase()){
                return true;
            }
        })
        Display(filterData);
        document.querySelector(".product-desc").textContent = `${ShirtEl.value}`;
        document.querySelector(".about").textContent= `Boardroom meetings or clubbing nights, stay in style effortlessly with AJIO’s range of men’s shirts. Browse through classic white shirts for men, charming printed shirts, cool denim shirts, quirky shackets and more to get your fashion quotient soaring.+`
    }else{
        Display(API);
        document.querySelector(".product-desc").textContent = " All Product";
        document.querySelector(".about").textContent= ""
    }
});

JeansEl.addEventListener("change" , (e)=>{
    if(e.target.checked){
        let filterData = API.filter((ele) => {
            if(ele.category.toUpperCase() == JeansEl.value.toUpperCase()){
                return true;
            }
        })
        Display(filterData);
        document.querySelector(".product-desc").textContent = `${JeansEl.value}`;
        document.querySelector(".about").textContent= `A perfect blend of versatility and style, jeans let you flaunt a variety of looks. From sauve washed denims to rugged distressed ones, flattering skinny fits to fabulous tapered ones, AJIO brings you power house denim brands like Wrangler, Levis and Killer with their choicest collections.`
    }else{
        Display(API);
        document.querySelector(".product-desc").textContent = " All Product";
        document.querySelector(".about").textContent= ""
    }
});

KurtasEl.addEventListener("change" , (e)=>{
    if(e.target.checked){
        let filterData = API.filter((ele) => {
            if(ele.category.toUpperCase() == KurtasEl.value.toUpperCase()){
                return true;
            }
        })
        Display(filterData);
        document.querySelector(".product-desc").textContent = `${KurtasEl.value}`;
        document.querySelector(".about").textContent= `Ethnic elegance, a fusion of hues and a whirlwind of styles from much-loved ethnic wear brands – go ahead and explore all the women’s kurtas on AJIO! The collection comprises of all the latest trends – from asymmetric hems to traditional Ikat prints. +`
    }else{
        Display(API);
        document.querySelector(".product-desc").textContent = " All Product";
        document.querySelector(".about").textContent= ""
    }
});

SareesEl.addEventListener("change" , (e)=>{
    if(e.target.checked){
        let filterData = API.filter((ele) => {
            if(ele.category.toUpperCase() == SareesEl.value.toUpperCase()){
                return true;
            }
        })
        Display(filterData);
        document.querySelector(".product-desc").textContent = `${SareesEl.value}`;
        document.querySelector(".about").textContent= `Traditional, trendy, stylish and graceful, there’s no denying that a woman’s beauty is accentuated by a saree. When you are shopping online for designer sarees for festive occasions or regular sarees for casual ethnic wear, you won’t have to look further than AJIO. From gorgeous silk sarees to crisp cottons, you’ll be amazed with the selection from brands such as Indie`
    }else{
        Display(API);
        document.querySelector(".product-desc").textContent = " All Product";
        document.querySelector(".about").textContent= ""
    }
});

ShoesEl.addEventListener("change" , (e)=>{
    if(e.target.checked){
        let filterData = API.filter((ele) => {
            if(ele.category.toUpperCase() == ShoesEl.value.toUpperCase()){
                return true;
            }
        })
        Display(filterData);
        document.querySelector(".product-desc").textContent = `${ShoesEl.value}`;
        document.querySelector(".about").textContent= `Casual Shoes - Header
        Get your casual style on point with AJIO’s collection of men’s casual shoes . From smooth slip-ons to snazzy loafers, the collection comprises of the trendiest in every style. Go ahead and step into the world of fashion, with the coolest of shoes`
    }else{
        Display(API);
        document.querySelector(".product-desc").textContent = " All Product";
        document.querySelector(".about").textContent= ""
    }
});

SandalEl.addEventListener("change" , (e)=>{
    if(e.target.checked){
        let filterData = API.filter((ele) => {
            if(ele.category.toUpperCase() == SandalEl.value.toUpperCase()){
                return true;
            }
        })
        Display(filterData);
        document.querySelector(".product-desc").textContent = `${SandalEl.value}`;
    }else{
        Display(API);
        document.querySelector(".product-desc").textContent = " All Product";
    }
});

// ********************* According to the Gender *********************************

MaleEl.addEventListener("change" , (e)=>{
    if(e.target.checked){
        let filterData = API.filter((ele) => {
            if(ele.gender.toUpperCase() == MaleEl.value.toUpperCase()){
                return true;
            }
        })
        Display(filterData);
        document.querySelector(".product-desc").textContent = `Men`;
        
    }else{
        Display(API);
        document.querySelector(".product-desc").textContent = " All Product";
        
    }
});

FemaleEl.addEventListener("change" , (e)=>{
    if(e.target.checked){
        let filterData = API.filter((ele) => {
            if(ele.gender.toUpperCase() == FemaleEl.value.toUpperCase()){
                return true;
            }
        })
        Display(filterData);
        document.querySelector(".product-desc").textContent = `Women`;
        
    }else{
        Display(API);
        document.querySelector(".product-desc").textContent = " All Product";
        
    }
});


// *********************************  Grid element and functionlity ******************

let pattern1 = document.querySelector(".pattern1");
let plusBTN = document.getElementById("colorplus");
let genderBTN = document.getElementById("genderplus");
let categoryBTN = document.getElementById("categoryplus");
let priceBTN = document.getElementById("priceplus");

plusBTN.addEventListener("click",()=>{
  // console.log("aaa");
  let div=document.getElementById('colorDiv');
  // console.log(div.style);
  if(div.style.display==="block"){
    div.style.display = 'none';
   
  }
  else{
    div.style.display = 'block';
  }
})
genderBTN.addEventListener("click",()=>{
  // console.log("aaa");
  let div=document.getElementById('genderDiv');
  // console.log(div.style);
  if(div.style.display==="block"){
    div.style.display = 'none';
  }
  else{
    div.style.display = 'block';
  }
})
categoryBTN.addEventListener("click",()=>{
  // console.log("aaa");
  let div=document.getElementById('categoryDiv');
  // console.log(div.style);
  if(div.style.display==="block"){
    div.style.display = 'none';
  }
  else{
    div.style.display = 'block';
  }
})
priceBTN.addEventListener("click",()=>{
  // console.log("aaa");
  let div=document.getElementById('priceDiv');
  // console.log(div.style);
  if(div.style.display==="block"){
    div.style.display = 'none';
  }
  else{
    div.style.display = 'block';
  }
})
