let imeis = JSON.parse(localStorage.getItem("imeis")) || [];
let lang = localStorage.getItem("lang") || "en";

function saveIMEI() {
  const imei = document.getElementById("imei").value;
  const model = document.getElementById("model").value;
  if (imei.length !== 15) return alert("IMEI must be 15 digits");
  imeis.push({ imei, model });
  localStorage.setItem("imeis", JSON.stringify(imeis));
  renderIMEI();
}
function renderIMEI() {
  const list = document.getElementById("imeiList");
  list.innerHTML = "";
  imeis.forEach((i, idx) => {
    list.innerHTML += `<li>${i.imei} (${i.model || "Unknown"}) 
    <button onclick="del(${idx})">❌</button></li>`;
  });
}
function del(i) {
  imeis.splice(i,1);
  localStorage.setItem("imeis", JSON.stringify(imeis));
  renderIMEI();
}
renderIMEI();

function toggleLang() {
  lang = lang === "en" ? "bn" : "en";
  localStorage.setItem("lang", lang);
  document.getElementById("subtitle").innerText =
    lang === "bn" ? "মোবাইল হারালে করণীয় সহায়তা" : "Lost Phone Help Portal";
}

function changeCountry(c) {
  const list = document.getElementById("helpList");
  document.getElementById("countryHelp").innerText =
    c === "bd" ? "🇧🇩 Bangladesh Help" : "🌍 Global Help";
  list.innerHTML = c === "bd"
    ? "<li>Police: 999</li><li>GP:121</li>"
    : "<li>Contact local police</li><li>Contact carrier</li>";
}
