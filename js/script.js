$(function()
{
  afficher_carte('carte');
})

function afficher_carte(div)
{
  var myMap = L.map(div).setView([51.505, -0.09], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    maxZoom: 19,
    attribution: ' <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(myMap);
}

function carte_plein_ecran()
{
  $("#resultats").addClass("d-md-none");
  $("#carte").removeClass("col-xl-4");
  $("#carte").addClass("col-xl-10 col-md-9 d-md-block");
}

function affichage_classique()
{
  $("#carte").removeClass("col-xl-10 col-md-9 d-md-block");
  $("#carte").addClass("col-xl-4");
  $("#resultats").removeClass("d-md-none");
}
