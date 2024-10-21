let drinks = false
var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
if (width >= 1000){
  document.getElementById('mobileContainer').remove()
}else{
  document.getElementById('desktopContainer').remove()
  let gar = 0;

    function toggleClass() {
      if (gar === 0) {
        document.querySelectorAll('#home div')[0].classList.add('homeFlex');
        document.querySelectorAll('#home img')[0].style.marginTop = '25cqw'
        document.querySelectorAll('#home button')[0].style.marginRight = '0'
        gar += 1;
      } else {
        document.querySelectorAll('#home img')[0].style.marginTop = '20px'
        document.querySelectorAll('#home button')[0].style.marginRight = '10px'
        document.querySelectorAll('#home div')[0].classList.remove('homeFlex');
        gar = 0;
      }
    }
    drinks = true

document.getElementById('homeButton').onclick = toggleClass
  
}

const data = {
    "Hamburger": {
      "Hamburger cu pui Shanghai": {
        "description": "Carne Shanghai de pui, cartofi, rosii, castraveti, varza, sosuri",
        "image": "../static/../static/images/Mancare/Sandwhich OFIBUN.png",
        "price": "13 LEI"
      },
      "Hamburger cu piept de pui": {
        "description": "Piept de pui, salata, rosii, castraveti, sosuri",
        "image": "../static/../static/images/Mancare/Sandwhich OFIBUN.png",
        "price": "14 LEI"
      },
      "Hamburger cu pulpa de pui": {
        "description": "Pulpa de pui, salata, cartofi, rosii, sosuri",
        "image": "../static/images/Mancare/Sandwhich OFIBUN.png",
        "price": "13 LEI"
      },
      "Hamburger cu snitel de pui": {
        "description": "Snitel de pui, cartofi, salata, sosuri",
        "image": "../static/images/Mancare/Sandwhich OFIBUN.png",
        "price": "13 LEI"
      },
      "Hamburger cu ceafa de porc": {
        "description": "Ceafa de porc, cartofi, salata, sosuri",
        "image": "../static/images/Mancare/Sandwhich OFIBUN.png",
        "price": "14 LEI"
      }
    },
    "Meniuri": {
      "Meniu de piept de pui Shanghai": {
        "description": "Piept de pui Shanghai, cartofi prajiti, salata, sosuri",
        "image": "../static/images/Mancare/Sandwhich OFIBUN.png",
        "price": "20 LEI"
      },
      "Meniul pulpa de pui": {
        "description": "Pulpa de pui, cartofi prajiti, salata, sosuri",
        "image": "../static/images/Mancare/Sandwhich OFIBUN.png",
        "price": "17 LEI"
      }
    },
    "Shaorma": {
      "Shaorma mare": {
        "description": "Shaorma mare cu carne de pui, cartofi, rosii, castraveti, sosuri",
        "image": "../static/images/Mancare/Sandwhich OFIBUN.png",
        "price": "30 LEI"
      },
      "Shaorma mica": {
        "description": "Shaorma mica cu carne de pui, cartofi, rosii, castraveti, sosuri",
        "image": "../static/images/Mancare/Sandwhich OFIBUN.png",
        "price": "15 LEI"
      },
      "Shaorma la farfurie bucati mari": {
        "description": "Shaorma de pui la farfurie cu bucati mari de carne, legume, sosuri",
        "image": "../static/images/Mancare/Sandwhich OFIBUN.png",
        "price": "24 LEI"
      }
    },
    "Sandwich": {
      "Sandwich cu sunca si cascaval": {
        "description": "Sandwich cu sunca, cascaval, salata, sosuri",
        "image": "../static/images/Mancare/Sandwhich OFIBUN.png",
        "price": "12 LEI"
      }
    },
    "Bauturi": {
      "Doza Cola": {
        "description": "Cola la doza de 330ml",
        "image": "../static/images/Mancare/Sandwhich OFIBUN.png",
        "price": "8.33 LEI"
      },
      "Suc de portocale": {
        "description": "Suc de portocale proaspat stors",
        "image": "../static/images/Mancare/Sandwhich OFIBUN.png",
        "price": "5 LEI"
      },
      "Cafea": {
        "description": "Cafea proaspata",
        "image": "../static/images/Mancare/Sandwhich OFIBUN.png",
        "price": "4 LEI"
      },
      "Apa plata": {
        "description": "Apa plata 500ml",
        "image": "../static/images/Mancare/Sandwhich OFIBUN.png",
        "price": "4 LEI"
      },
      "Apa minerala": {
        "description": "Apa minerala 500ml",
        "image": "../static/images/Mancare/Sandwhich OFIBUN.png",
        "price": "4 LEI"
      }
    }
  };
  const reviews = [
    { text: "Genial senvisul ofibun !!!", name: "Sebastian Gavrila" },
    { text: "Am primit meniul  acasă .Mâncarea calda, proaspătă și bine preparată. Livrarea a fost rapida.", name: "Marinela Selaru" },
    { text: "Minunata locație, atmosfera plăcută mâncare delicioasa și personal excelent.", name: "Alin Vlad" },
    { text: "Mancare cu gust, totul proaspat, preț foarte bun. Locatie excelenta, personal amabil.", name: "Ionela Ciutureanu" },
    { text: "Excelent, un fast food bine pus la punct! Multumesc si mult succes!", name: "LukazEL" },
    { text: "Revenim de fiecare data cu mare drag. Dedicatie in tot ceea ce fac. Mancare de calitate si foarte gustoasa.", name: "Gabriel C" },
    { text: "Acest loc e excelent, au o mâncare care nu se prea găsește pe la restaurantele mari KISS KISS LOVE👌❤", name: "Ana maria X" },
    { text: "Mancare foarte gustoasa personal amabil si primitor. Recomand.", name: "Vozaru Alexandru" },
    { text: "Mâncare excelenta, preturi atractive, gramaje mari, personal amabil, ambient deosebit, curat.", name: "Maria Rusu" },
    { text: "Deosebit de curat, cel mai bun hamburger cu piept de pui, din Craiova. Delicios și mare.", name: "Camelia Preda" },
    { text: "Recomand! Mancare gustoasa si proaspata !👏👏👏", name: "Paula Ionescu" },
    { text: "Fast food clasic cu preturi super bune.", name: "Florin Obogeanu" },
    { text: "Totul foarte bun și foarte proaspăt! ", name: "Predoaia Raluca" },
    { text: "Mancare foarte buna la un pret super accesibil.", name: "Mihai Stamen" },
    { text: "Pret- calitate 10/10 Recomand cu incredere!", name: "Elena Ele" },
    { text: "Mâncare perfecta!", name: "Patrick Constantin" },
    { text: "Pui sanhai e nebunie !", name: "Marian Calotă" },
    { text: "Foarte bun", name: "Iosif Coditoiu" }
];
let currentIndex = 0;

const reviewTextElement = document.getElementById("reviewText");
const reviewNameElement = document.getElementById("reviewName");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const updateReview = () => {
    reviewTextElement.textContent = reviews[currentIndex].text;
    reviewNameElement.textContent = reviews[currentIndex].name;
};

// Function to switch reviews with animation
const switchReview = (direction) => {
    const reviewContainer = document.querySelector(".review-container");
    const reviewElement = reviewContainer.querySelector(".review");

    let outClass, inClass;

    if (direction === 'next') {
        outClass = 'left-out';
        inClass = 'right-in';
        currentIndex = (currentIndex + 1) % reviews.length;
    } else {
        outClass = 'right-out';
        inClass = 'left-in';
        currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    }

    reviewElement.classList.add(outClass);

    setTimeout(() => {
        reviewElement.classList.remove(outClass);
        updateReview();
        reviewElement.classList.add(inClass);

        setTimeout(() => {
            reviewElement.classList.remove(inClass);
        }, 500);
    }, 500);
};

// Automatic update every 5 seconds
let reviewInterval = setInterval(() => {
    switchReview('next');
}, 5000);

// Restart interval
const resetInterval = () => {
    clearInterval(reviewInterval);
    reviewInterval = setInterval(() => {
        switchReview('next');
    }, 5000);
};

prevBtn.addEventListener('click', () => {
    switchReview('prev');
    resetInterval();
});
nextBtn.addEventListener('click', () => {
    switchReview('next');
    resetInterval();
});

updateReview();
function populateMenuContent(selected) {
  const menuContent = document.getElementById('menuContent');
  menuContent.innerHTML = '';  // Clear previous content

  const categoryData = data[selected];
  const drinksData = data["Bauturi"];

  // Helper function to create and append menu items
  function appendMenuItems(items) {
      Object.keys(items).forEach(item => {
          const menuItem = items[item];
    
          // Create the div for the menu item
          const itemDiv = document.createElement('div');
          itemDiv.className = 'menuItem';
    
          // Create the img result
          const imgDiv = document.createElement('div');
          imgDiv.className = 'img-menu-4-3';
          imgDiv.style.backgroundImage = `url('${menuItem.image}')`;
          itemDiv.appendChild(imgDiv);
    
          // Create the title, description, and price div
          const descDiv = document.createElement('div');
          const title = document.createElement('h2');
          title.style.marginTop = '10px';
          title.textContent = item;
    
          const description = document.createElement('p');
          description.textContent = menuItem.description;
    
          const price = document.createElement('h3');
          price.textContent = menuItem.price;
    
          descDiv.appendChild(title);
          descDiv.appendChild(description);
          descDiv.appendChild(price);
    
          itemDiv.appendChild(descDiv);
    
          // Append the menuItem div to menuContent
          menuContent.appendChild(itemDiv);
      });
  }

  if (categoryData) {
      appendMenuItems(categoryData);
      if (drinksData) {
          appendMenuItems(drinksData);
      }
  } else {
      console.log(`No data available for the selected category: ${selected}`);
  }
}

document.getElementById('phoneAnimation').onclick = () =>{
    window.open("tel: 0770 661 286")
}
document.getElementById('facebookSVG').onclick = () =>{
    window.open("https://www.facebook.com/people/Ofi-Bun-FastFood/100091143625377/")
}
document.getElementById('instagramSVG').onclick = () =>{
    window.open("https://www.instagram.com/ofibunfastfood/")
}
document.getElementById('tiktokSVG').onclick = () =>{
    window.open("https://tiktok.com/@ofibun")
}
let isAnimating = false;
let contactHeight = document.getElementById('contactHeader').offsetHeight;
let selected = document.getElementById('Hamburger')
document.querySelectorAll('.buttonMeniu').forEach((element) => {
    element.addEventListener('mouseover',() => {element.classList.add('buttonMeniuHover')



} )
    element.addEventListener('mouseleave',() => {
            if (element != selected){
            element.classList.remove('buttonMeniuHover')
            }
        
        } )
    element.addEventListener('click', () => {
        selected.classList.remove('buttonMeniuHover')
        selected = element
        const selectedId = selected.id;
        populateMenuContent(selectedId);

    })


})

populateMenuContent('Hamburger');

function adjustMenuHeight() {
    const pePoza = document.getElementById('pePoza');
    const menu = document.getElementById('menu');

    const pePozaRect = pePoza.getBoundingClientRect();
    const bottomOfPePoza = pePozaRect.bottom;

    const totalHeight = window.innerHeight;
    const remainingHeight = totalHeight - bottomOfPePoza;
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    var height = (window.innerHeight > 0) ? window.innerHeight : screen.height;
    if (width >= 1000){
      menu.style.height = `${remainingHeight -65 }px`;
      
    }else{
      menu.style.height = `${remainingHeight -80}px`;
      
    }
  }

  window.addEventListener('load', adjustMenuHeight);
document.getElementById('home').style.transform = `translateY(-${contactHeight}px)`
document.getElementById('contactHome').addEventListener('click', () => {
    if (!isAnimating) {
        isAnimating = true; // Set the flag to prevent re-triggering

        document.getElementById('contactHeader').style.animation = 'headerDown 1s forwards';
        document.getElementById('home').animate([
          // keyframes
          { transform: `translateY(-${contactHeight}px)` },
          { transform: `translateY(0px)` },
        ],
        {
          // timing options
          duration: 800,
          fill: "forwards",
          // Animation completion callback
        });
      }else{
        document.getElementById('contactHeader').style.animation = 'headerUp 1s forwards';
        document.getElementById('home').animate([
          // keyframes
          { transform: `translateY(0px)` },
          { transform: `translateY(-${contactHeight}px)` },
        ],
        {
          // timing options
          duration: 800,
          fill: "forwards",
          // Animation completion callback
        });
        isAnimating = false
      
    }
});
