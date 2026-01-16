function saveIMEI() {
  const imei = document.getElementById("imei").value;
  if (imei.length !== 15) {
    alert("IMEI must be 15 digits");
    return;
  }
  localStorage.setItem("saved_imei", imei);
  document.getElementById("saved").innerText =
    "✅ IMEI saved safely on your device";
}
