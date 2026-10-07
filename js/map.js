// Home page map. EDIT the places to match your real project locations.
(function () {
  var el = document.getElementById("map");
  if (!el || !window.L) return;
  var places = [
    { n: "Pretoria: base", p: [-25.7479, 28.2293], c: "#F59E0B" },
    { n: "Rustenburg: mining and water-quality research", p: [-25.667, 27.242], c: "#10B981" },
    { n: "Johannesburg region: dashboards and web work", p: [-26.2041, 28.0473], c: "#8B5CF6" }
  ];
  var map = L.map(el, { scrollWheelZoom: false }).setView([-25.95, 27.9], 8);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: "© OpenStreetMap contributors" }).addTo(map);
  places.forEach(function (x) {
    L.circleMarker(x.p, { radius: 11, color: "#fff", weight: 3, fillColor: x.c, fillOpacity: 1 }).addTo(map).bindPopup(x.n);
  });
})();
