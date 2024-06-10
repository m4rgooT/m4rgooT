navigator.geolocation.getCurrentPosition(getposition);// on récupère la position gps de l'utilisateur 

let myMap; // on déclare une variable pour notre carte
const mappa = new Mappa('Leaflet'); // on fait appel à la librairie js Leaflet

// variables pour récupérer la position gps de l'utilisateur
var position;
let userLat= 47.2040006;
let userLon = -1.5630606;

let mousePos;

// coordonnées de l'edna
let edna_lat = 47.2040006;
let edna_lng = -1.5630606;

// coordonnées les maisons colorées de trentemoult (zone1)
let zone1_lat = 47.19523330803872; //latitude
let zone1_lng = -1.5824228525997328; //longitude

// coordonnées du la Rainette Bleue de trentemoult (zone2)
let zone2_lat = 47.19525863574806; //latitude
let zone2_lng = -1.5816026459662602; //longitude

// coordonnées du vieux monsieur tatoo shop (zone3)
let zone3_lat = 47.19503738490881; //latitude
let zone3_lng = -1.5818909704283506; //longitude

// coordonnées de le zebre (zone4)
let zone4_lat = 47.194789514264954; //latitude
let zone4_lng = -1.581349164212565; //longitude

// coordonnées de la chaise abandonée (zone5)
let zone5_lat = 47.1946539243029; //latitude
let zone5_lng = -1.5825768449968183; //longitude

// coordonnées du cinéma de quartier (zone6)
let zone6_lat = 47.194460646224734; //latitude
let zone6_lng = -1.5817800848875891; //longitude

// coordonnées du soul du village (zone7)
let zone7_lat = 47.19490535725227; //latitude
let zone7_lng = -1.5824345438809146; //longitude

// coordonnées des potos écharpés (zone8)
let zone8_lat = 47.19502929244837; //latitude
let zone8_lng = -1.5829012482450073; //longitude

// coordonnées d'un conte dans l'océan (zone9)
let zone9_lat = 47.194830698837485; //latitude
let zone9_lng = -1.581699203964457; //longitude

// coordonnées de notre zone
let initial_lat = zone3_lat;// latitude de départ
let initial_lng = zone3_lng;// longitude de départ

// variables des sons
let sound1; // on déclare la variable sound1 pour notre son1
let sound2; // on déclare la variable sound1 pour notre son2
let sound3; // on déclare la variable sound1 pour notre son3
let sound4; // on déclare la variable sound1 pour notre son4
let sound5; // on déclare la variable sound1 pour notre son5
let sound6; // on déclare la variable sound1 pour notre son6
let sound7; // on déclare la variable sound1 pour notre son7
let sound8; // on déclare la variable sound1 pour notre son8
let sound9; // on déclare la variable sound1 pour notre son9

// variables pour notre avatar
let avatarLat;
let avatarLng;
let avatarPos;
let avatarPosX;
let avatarPosY;

// Calcul des distances
let distance_edna_avatar;
let distance_source1_avatar;
let distance_zone1_avatar;
let distance_zone2_avatar;
let distance_zone3_avatar;
let distance_zone4_avatar;
let distance_zone5_avatar;
let distance_zone6_avatar;
let distance_zone7_avatar;
let distance_zone8_avatar;
let distance_zone9_avatar;

// variables qui vont nous permettre de dessiner les zones
let diametreSource1_lat = 47.199044159443524; 
let diametreSource1_lng = -1.561260223388672; 

// variable pour le déplacement réaliste de l'avatar
// positions initiales de l'avatar
let avatar_easing_lat = initial_lat;
let avatar_easing_lng = initial_lng;
let avatar_target_lat = initial_lat;
let avatar_target_lng = initial_lng;
let easing = 0.05;//vitesse du déplacement

let avatar_img;

function preload() {
// Load a sound file
  sound1 = loadSound("assets/maisons.mp3") // on charge un fichier audio dans la variable sound1
  sound1.amp(0.3); // on ajuste le volume du son 1
  
  sound2 = loadSound('assets/reinette.mp3'); // on charge un fichier audio dans la variable sound2
  sound2.amp(0.3); // on ajuste le volume du son 2
  
  sound3 = loadSound('assets/tatoo.mp3'); // on charge un fichier audio dans la variable sound2
  sound3.amp(0.3); // on ajuste le volume du son 3
  
  sound4 = loadSound('assets/zebre.mp3'); // on charge un fichier audio dans la variable sound2
  sound4.amp(0.3); // on ajuste le volume du son 3
  
  sound5 = loadSound('assets/lachaise.mp3'); // on charge un fichier audio dans la variable sound2
  sound5.amp(0.3); // on ajuste le volume du son 3
  
  sound6 = loadSound('assets/cinema.mp3'); // on charge un fichier audio dans la variable sound2
  sound6.amp(0.3); // on ajuste le volume du son 3
  
  sound7 = loadSound('assets/soul.mp3'); // on charge un fichier audio dans la variable sound2
  sound7.amp(0.3); // on ajuste le volume du son 3
  
  sound8 = loadSound('assets/poteaux.mp3'); // on charge un fichier audio dans la variable sound2
  sound8.amp(0.3); // on ajuste le volume du son 3
  
  sound9 = loadSound('assets/ocean.mp3'); // on charge un fichier audio dans la variable sound2
  sound9.amp(0.3); // on ajuste le volume du son 3
  
  avatar_img = loadImage('assets/avatar.png');
}


// Lets put all our map options in a single object
// lat and lng are the starting point for the map.
const options = {
  lat: initial_lat,
  lng: initial_lng,
  zoom: 20,// zoom de départ
  style: "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
}

function setup(){
  canvas = createCanvas(windowWidth,windowHeight); 

  // Create a tile map with the options declared
  myMap = mappa.tileMap(options); 
  myMap.overlay(canvas);
} // fin de la fonction setup


function getposition(position) {
  userLat = position.coords.latitude
  userLon = position.coords.longitude
}

function draw(){
    
   // Clear the previous canvas on every frame
  clear();
  
  mousePos = myMap.fromPointToLatLng(mouseX,mouseY);// on convertit la position de la souris en coordonnées gps      
  let edna = myMap.latLngToPixel(47.2040006, -1.5630606); // on convertit la position gps en position XY
  let userPos = myMap.latLngToPixel(userLat, userLon); // idem
  let zone1Pos = myMap.latLngToPixel(zone1_lat, zone1_lng); // on convertit la position gps en position XY de zone1
  let zone2Pos = myMap.latLngToPixel(zone2_lat, zone2_lng); // on convertit la position gps en position XY de zone2
  let zone3Pos = myMap.latLngToPixel(zone3_lat, zone3_lng); // on convertit la position gps en position XY de zone3
  let zone4Pos = myMap.latLngToPixel(zone4_lat, zone4_lng); // on convertit la position gps en position XY de zone4
  let zone5Pos = myMap.latLngToPixel(zone5_lat, zone5_lng); // on convertit la position gps en position XY de zone5
  let zone6Pos = myMap.latLngToPixel(zone6_lat, zone6_lng); // on convertit la position gps en position XY de zone6
  let zone7Pos = myMap.latLngToPixel(zone7_lat, zone7_lng); // on convertit la position gps en position XY de zone7
  let zone8Pos = myMap.latLngToPixel(zone8_lat, zone8_lng); // on convertit la position gps en position XY de zone8
  let zone9Pos = myMap.latLngToPixel(zone9_lat, zone9_lng); // on convertit la position gps en position XY de zone9
  
  
  if(mouseIsPressed){
    avatarPos = myMap.latLngToPixel(mousePos.lat, mousePos.lng); // on récupère la position en pixels de la position gps de l'avatar
    avatarPosX = avatarPos.x;  // on met à jour avatarPosX
    avatarPosY = avatarPos.y; // on met à jour avatarPosY
    avatarLat = mousePos.lat; // on met à jour avatarLat
    avatarLng = mousePos.lng; // on met à jour avatarLng  
    //print("mousePos.lat = " + mousePos.lat);    
    //print("mousePos.lng = " + mousePos.lng);
    avatar_target_lat = mousePos.lat;
    avatar_target_lng = mousePos.lng;
    
    
    //On calcule la distance entre la zone et l'avatar
    //distance_edna_avatar = abs(edna_lat-avatarLat)+abs(edna_lng-avatarLng);
    //print("distance_edna_avatar = " + distance_edna_avatar);
    
    distance_zone1_avatar = abs(zone1_lat-avatarLat)+abs(zone1_lng-avatarLng);
    print("distance_zone1_avatar = " + distance_zone1_avatar);
    
    distance_zone2_avatar = abs(zone2_lat-avatarLat)+abs(zone2_lng-avatarLng);
    print("distance_zone2_avatar = " + distance_zone2_avatar);
    
    distance_zone3_avatar = abs(zone3_lat-avatarLat)+abs(zone3_lng-avatarLng);
    print("distance_zone3_avatar = " + distance_zone3_avatar);
    
    distance_zone4_avatar = abs(zone4_lat-avatarLat)+abs(zone4_lng-avatarLng);
    print("distance_zone4_avatar = " + distance_zone4_avatar);
    
    distance_zone5_avatar = abs(zone5_lat-avatarLat)+abs(zone5_lng-avatarLng);
    print("distance_zone5_avatar = " + distance_zone5_avatar);
    
    distance_zone6_avatar = abs(zone6_lat-avatarLat)+abs(zone6_lng-avatarLng);
    print("distance_zone6_avatar = " + distance_zone6_avatar);
    
    distance_zone7_avatar = abs(zone7_lat-avatarLat)+abs(zone7_lng-avatarLng);
    print("distance_zone7_avatar = " + distance_zone7_avatar);
    
    distance_zone8_avatar = abs(zone8_lat-avatarLat)+abs(zone8_lng-avatarLng);
    print("distance_zone8_avatar = " + distance_zone8_avatar);
    
    distance_zone9_avatar = abs(zone9_lat-avatarLat)+abs(zone9_lng-avatarLng);
    print("distance_zone9_avatar = " + distance_zone9_avatar);
    
  } // fin de mouseIsPressed
  
//on calcule en permanence le déplacement réaliste de l'avatar
let dx = avatar_target_lat - avatar_easing_lat;
avatar_easing_lat += dx * easing;
  
let dy = avatar_target_lng - avatar_easing_lng;
avatar_easing_lng += dy * easing;
  let avatarEasing = 
  myMap.latLngToPixel(avatar_easing_lat, avatar_easing_lng);
  //fin calcul
  
  /*
  if(abs(edna_lat-mousePos.lat)<0.005 && abs(edna_lng-mousePos.lng)<0.005){
    print("l'utilisateur est entré dans la zone de l'EDNA")
  }
  */

  /////////////////////////////
  // EDNA /////////////////////
  /////////////////////////////

  // abs permet de calculer une valeur qui sera toujours positive pour obtenir la distance entre le centre de la zone 1 et la souris 
  //if(distance_edna_avatar<0.005){
  //  print("l'avatar est entré dans la zone de l'EDNA")
  // }
  // si on sort de la zone
  //if(distance_edna_avatar>0.005){
  //  print("l'avatar est sorti de la zone de l'EDNA")
  //}
  
  
  /////////////////////////////
  // ZONE 1 /////////////////// les maisons colorées de trentemoult
  /////////////////////////////
  
  // abs permet de calculer une valeur qui sera toujours positive pour obtenir la distance entre le centre de la zone 1 et la souris 
  if(distance_zone1_avatar<0.00012238541961395732 && !sound1.isPlaying()){
  //  print("l'avatar est entré dans la zone de la zone1")
    sound1.play();
  }
  // si on sort de la zone
  if(distance_zone1_avatar>0.00012238541961395732){
   // print("l'avatar est sorti de la zone de la zone1")
    sound1.stop();
  }
  
  fill("red");
  text("EDNA",edna.x, edna.y); // on dessine le centre de la zone 1
  imageMode(CENTER)
  image(avatar_img,avatarEasing.x,avatarEasing.y, 100, 100); // on dessine l'avatar
  fill(255,0,0,150); //on donne de la transparence de 150 (minimum = 0 et max = 255)
  circle(zone1Pos.x, zone1Pos.y, 15);
  fill (0);
  text ("Maison Colorées", zone1Pos.x, zone1Pos.y);
  
  

  /////////////////////////////
  // ZONE 2 /////////////////// la Rainette Bleue
  /////////////////////////////
    // abs permet de calculer une valeur qui sera toujours positive pour obtenir la distance entre le centre de la zone 1 et la souris 
  if(distance_zone2_avatar<0.00013024409485873356 && !sound2.isPlaying()){
  //  print("l'avatar est entré dans la zone de la zone2")
    sound2.play();
  }
  // si on sort de la zone
  if(distance_zone2_avatar>0.00013024409485873356 ){
   // print("l'avatar est sorti de la zone de la zone2")
    sound2.stop();
  }
  fill("red");
  text("EDNA",edna.x, edna.y); // on dessine le centre de la zone 1
  //text("A",avatarPosX,avatarPosY); // on dessine l'avatar
  fill(255,0,0,150); //on donne de la transparence de 150 (minimum = 0 et max = 255)
  circle(zone2Pos.x, zone2Pos.y, 15);
  fill (0);
  text ("Reinette Bleue", zone2Pos.x, zone2Pos.y);
  
  
  /////////////////////////////
  // ZONE 3 /////////////////// vieux monsieur tatoo shop
  /////////////////////////////
  
      // abs permet de calculer une valeur qui sera toujours positive pour obtenir la distance entre le centre de la zone 1 et la souris 
  if(distance_zone3_avatar<0.00010103762152247064 && !sound3.isPlaying()){
  //  print("l'avatar est entré dans la zone de la zone3")
    sound3.play();
  }
  // si on sort de la zone
  if(distance_zone3_avatar>0.00010103762152247064 ){
   // print("l'avatar est sorti de la zone de la zone3")
    sound3.stop();
  }
  
  fill("red");
  text("EDNA",edna.x, edna.y); // on dessine le centre de la zone 1
  //text("A",avatarPosX,avatarPosY); // on dessine l'avatar
  fill(255,0,0,150); //on donne de la transparence de 150 (minimum = 0 et max = 255)
  circle(zone3Pos.x, zone3Pos.y, 15);
  fill (0);
  text ("Vieux Monsieur", zone3Pos.x, zone3Pos.y);
  
let initial_lat = zone3_lat;// latitude de départ
let initial_lng = zone3_lng;// longitude de départ
  
  /////////////////////////////
  // ZONE 4 /////////////////// le zebre
  /////////////////////////////

  // abs permet de calculer une valeur qui sera toujours positive pour obtenir la distance entre le centre de la zone 1 et la souris 
  if(distance_zone4_avatar<0.0000661955589329466 && !sound4.isPlaying()){
  //  print("l'avatar est entré dans la zone de la zone3")
    sound4.play();
  }
  // si on sort de la zone
  if(distance_zone4_avatar>0.0000661955589329466 ){
   // print("l'avatar est sorti de la zone de la zone3")
    sound4.stop();
  }
  fill("red");
  text("EDNA",edna.x, edna.y); // on dessine le centre de la zone 1
  //text("A",avatarPosX,avatarPosY); // on dessine l'avatar
  fill(255,0,0,150); //on donne de la transparence de 150 (minimum = 0 et max = 255)
  circle(zone4Pos.x, zone4Pos.y, 15);
  fill (0);
  text ("Le Zèbre", zone4Pos.x, zone4Pos.y);
  
  
  /////////////////////////////
  // ZONE 5 /////////////////// la chaise abandonée
  /////////////////////////////
  // abs permet de calculer une valeur qui sera toujours positive pour obtenir la distance entre le centre de la zone 1 et la souris 
  if(distance_zone5_avatar<0.0000896314423683986 && !sound5.isPlaying()){
  //  print("l'avatar est entré dans la zone de la zone3")
    sound5.play();
  }
  // si on sort de la zone
  if(distance_zone5_avatar>0.0000896314423683986 ){
   // print("l'avatar est sorti de la zone de la zone3")
    sound5.stop();
  }
  fill("red");
  text("EDNA",edna.x, edna.y); // on dessine le centre de la zone 1
  //text("A",avatarPosX,avatarPosY); // on dessine l'avatar
  fill(255,0,0,150); //on donne de la transparence de 150 (minimum = 0 et max = 255)
  circle(zone5Pos.x, zone5Pos.y, 15);
  fill (0);
  text ("La Chaise", zone5Pos.x, zone5Pos.y);
  
  /////////////////////////////
  // ZONE 6 /////////////////// cinéma de quartier
  /////////////////////////////
  // abs permet de calculer une valeur qui sera toujours positive pour obtenir la distance entre le centre de la zone 1 et la souris 
  if(distance_zone6_avatar<0.00007048513881513507 && !sound6.isPlaying()){
  //  print("l'avatar est entré dans la zone de la zone3")
    sound6.play();
  }
  // si on sort de la zone
  if(distance_zone6_avatar>0.00007048513881513507 ){
   // print("l'avatar est sorti de la zone de la zone3")
    sound6.stop();
  }
  fill("red");
  text("EDNA",edna.x, edna.y); // on dessine le centre de la zone 1
  //text("A",avatarPosX,avatarPosY); // on dessine l'avatar
  fill(255,0,0,150); //on donne de la transparence de 150 (minimum = 0 et max = 255)
  circle(zone6Pos.x, zone6Pos.y, 15);
  fill (0);
  text ("Cinéma", zone6Pos.x, zone6Pos.y);
  
  /////////////////////////////
  // ZONE 7 /////////////////// soul du village
  /////////////////////////////
  // abs permet de calculer une valeur qui sera toujours positive pour obtenir la distance entre le centre de la zone 1 et la souris 
  if(distance_zone7_avatar<0.00010158951215522016 && !sound7.isPlaying()){
  //  print("l'avatar est entré dans la zone de la zone3")
    sound7.play();
  }
  // si on sort de la zone
  if(distance_zone7_avatar>0.00010158951215522016 ){
   // print("l'avatar est sorti de la zone de la zone3")
    sound7.stop();
  }
  fill("red");
  text("EDNA",edna.x, edna.y); // on dessine le centre de la zone 1
  //text("A",avatarPosX,avatarPosY); // on dessine l'avatar
  fill(255,0,0,150); //on donne de la transparence de 150 (minimum = 0 et max = 255)
  circle(zone7Pos.x, zone7Pos.y, 15);
  fill (0);
  text ("La Soûl", zone7Pos.x, zone7Pos.y);
  
  /////////////////////////////
  // ZONE 8 /////////////////// potos écharpés
  /////////////////////////////
  // abs permet de calculer une valeur qui sera toujours positive pour obtenir la distance entre le centre de la zone 1 et la souris 
  if(distance_zone8_avatar<0.0001142450118944982 && !sound8.isPlaying()){
  //  print("l'avatar est entré dans la zone de la zone3")
    sound8.play();
  }
  // si on sort de la zone
  if(distance_zone8_avatar>0.0001142450118944982 ){
   // print("l'avatar est sorti de la zone de la zone3")
    sound8.stop();
  }
  fill("red");
  text("EDNA",edna.x, edna.y); // on dessine le centre de la zone 1
  //text("A",avatarPosX,avatarPosY); // on dessine l'avatar
  fill(255,0,0,150); //on donne de la transparence de 150 (minimum = 0 et max = 255)
  circle(zone8Pos.x, zone8Pos.y, 15);
  fill (0);
  text ("Potos Éch3rpés", zone8Pos.x, zone8Pos.y);
  
  /////////////////////////////
  // ZONE 9 /////////////////// conte dans l'océan 
  /////////////////////////////
  // abs permet de calculer une valeur qui sera toujours positive pour obtenir la distance entre le centre de la zone 1 et la souris 
  if(distance_zone9_avatar<0.00007048513881513507 && !sound9.isPlaying()){
  //  print("l'avatar est entré dans la zone de la zone3")
    sound9.play();
  }
  // si on sort de la zone
  if(distance_zone9_avatar>0.00007048513881513507 ){
   // print("l'avatar est sorti de la zone de la zone3")
    sound9.stop();
  }
  fill("red");
  text("EDNA",edna.x, edna.y); // on dessine le centre de la zone 1
  //text("A",avatarPosX,avatarPosY); // on dessine l'avatar
  fill(255,0,0,150); //on donne de la transparence de 150 (minimum = 0 et max = 255)
  circle(zone9Pos.x, zone9Pos.y, 15);
  fill (0);
  text ("Conte Océan", zone9Pos.x, zone9Pos.y);
  
} // fin de la fonction draw

function keyPressed(){
  
  if(key == 'i'){
    print("distance lat edna-souris = " + abs(edna_lat-mousePos.lat)); 
    print("distance lng edna-souris = " + abs(edna_lng-mousePos.lng));
  }
}






