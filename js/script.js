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
