let icecreamstore = [
    {
        ItemName: "vanilla",
        price: 500,
        image: "img/rightimg.png"
    },
    {
        ItemName: "chocalate",
        price: 500,
        image: "img/3b72602ae2de4165b83c5b206d1dee08-removebg-preview.png"
    },
    {
        ItemName: "strawberry",
        price: 500,
        image: "img/icecream-removebg-preview.png"
    },
    {
        ItemName: "pineapple",
        price: 500,
        image: "img/icecream-removebg-preview.png"
    },
    {
        ItemName: "banana",
        price: 500,
        image: "img/rightimg.png"
    },
    {
        ItemName: "pears",
        price: 500,
        image: "img/3b72602ae2de4165b83c5b206d1dee08-removebg-preview.png"
    },
    {
        ItemName: "watermalon",
        price: 500,
        image: "img/icecream-removebg-preview.png"
    },
    {
        ItemName: "orange",
        price: 500,
        image: "img/icecream-removebg-preview.png"
    }
];

const container = document.querySelector(".itemlist");
const searchInput = document.getElementById("searchInput");

container.style.display = "flex";
container.style.justifyContent = "center"
container.style.flexWrap = "wrap";
container.style.gap = "20px";

function displayItems(items) {
    container.innerHTML = ""; 
    items.forEach(item => {
        const card = document.createElement("div");
        card.style.textAlign = "center";
        card.style.display = "flex";
        card.style.justifyContent = "center";
        card.style.alignItems = "center";
        card.style.flexDirection = 'column';

        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.ItemName;
        img.style.width = "250px";
        img.style.height = "300px";
        img.style.borderRadius = "8px";

        const btn = document.createElement("button");
        btn.textContent = `Rs ${item.price}`;
        btn.style.marginTop = "10px";
        btn.style.padding = "8px 16px";
        btn.style.border = "none";
        btn.style.backgroundColor = "var(--main)";
        btn.style.color = "#fff";
        btn.style.borderRadius = "4px";
        btn.style.cursor = "pointer";

        card.appendChild(img);
        card.appendChild(btn);
        container.appendChild(card);
    });
}


displayItems(icecreamstore);


searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.toLowerCase();
    const filtered = icecreamstore.filter(item =>
        item.ItemName.toLowerCase().includes(keyword)
    );
    displayItems(filtered);
});
      

   let sidebar = document.querySelector(".sidebar-menu");
   document.querySelectorAll(".menu-open").forEach(function(button) {
    button.addEventListener("click", function() {
        sidebar.style.transform = "translateX(0%)";
        console.log("open");
    });
});

   
document.getElementById("menu-close").addEventListener("click" , function(){
    sidebar.style.transform = "translateX(100%)";
    console.log("close");
});


let img = [
    "img/img1.png",
    "img/img2.png",
    "img/img3.png",
    "img/img4.png",
];

let sliding = "";
let currentimg = 0;

document.getElementById("left").addEventListener("click", function () {
    currentimg = (currentimg - 1 + img.length) % img.length;
    document.getElementById("show").src = img[currentimg];
});

document.getElementById("right").addEventListener("click", function () {
    currentimg = (currentimg + 1) % img.length;
    document.getElementById("show").src = img[currentimg];
});



window.addEventListener("scroll", function() {
    if (window.scrollY > 130) {
        document.querySelector(".top").style.transform = "translateY(0%)";
        document.querySelector(".menubar").style.transform = "translateY(0%)";
    } else {
        document.querySelector(".top").style.transform = "translateY(-100%)";
        document.querySelector(".menubar").style.transform = "translateY(-100%)";
    }
  });

    
       
       
       
       // let Data = "secret information";
        // class user {
        //       constructor(name , email){
        //              this.name = name;
        //              this.email = email;
        //       }

        //       viewData() {
        //         console.log("data = " ,Data);
                
        //       }

        // }

        // let student1 = new user("ayyan","ayyan@gmail.com");
        // let student2 = new user("faizan","faizan@gmail.com");
        // let teacher1 = new user("Ali","Ali@gmail.com");
        // let teacher2 = new user("sara","sara@gmail.com");

        // let Data = "secret information";
        // class user {
        //       constructor(name , email){
        //              this.name = name;
        //              this.email = email;
        //       }

        //       viewData() {
        //         console.log("data = " ,Data);
                
        //       }

        // }

        // class Admin extends user {
        //     constructor(name , email){
        //         super(name,email) 
        //     }
        //       editData(){
        //         Data = "some new value"
        //       }
        // } 

        // let student1 = new user("ayyan","ayyan@gmail.com");
        // let student2 = new user("faizan","faizan@gmail.com");
        // let teacher1 = new user("Ali","Ali@gmail.com");
        // let admin1 = new Admin("sara","sara@gmail.com");



        //try catch error

