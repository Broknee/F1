$("light_mode").hide();

function dark_mode(){ 
  $("html").css("filter", "invert(100%)");
  $("img").css("filter", "invert(100%)");
  $("#fleche").css("filter", "invert(100%)");
  $("video").css("filter", "invert(100%)");
  $("#dark_mode").hide();
  $("#light_mode").show();  
}; 

function light_mode(){ 
 $("html").css("filter", "invert(0%)");
  $("img").css("filter", "invert(0%)");
  $("video").css("filter", "invert(0%)");
  $("#fleche").css("filter", "invert(0%)"); 
  $("#dark_mode").show();
  $("#light_mode").hide(); 
};


sombre = document.getElementById("dark_mode");
clair = document.getElementById("light_mode");
sombre.addEventListener("click",() => {
  dark_mode();
  localStorage.setItem('mode','darkMode');

});
  clair.addEventListener("click",() => {
    light_mode();
    localStorage.setItem('mode','lightMode'); 
    
  });


if(localStorage.getItem('mode') == 'darkMode') {
  dark_mode();
  console.log('HELLOOOO DAAAARK');
};

/*
function populateStorage(){

if (dark_mode()) {
  localStorage.setItem('mode','dark_mode');
//  console.log("Nous sommes en thème sombre");
  console.log(localStorage);
} else {
  localStorage.setItem('mode','light_mode');
 //  console.log("Nous sommes en thème clair");
 console.log(localStorage);
}};

function setMode() {
  if(localStorage.getItem('mode') == 'dark_mode') {
    console.log('HELLOOOO DARK');
    dark_mode();
  };
  if(localStorage.getItem('mode') == 'light_mode') {
    console.log('HELLOOOO LIIIIIGHT');
    light_mode();
  } else {
    console.log('Pas de light cookies à l\'horizon')
  }
  };


if(localStorage.getItem('mode')) {
  console.log(localStorage);
  setMode();
} else {
 populateStorage();
};

*/  





