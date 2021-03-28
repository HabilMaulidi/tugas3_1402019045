document.getElementById("nama").innerHTML = prompt("Masukkan nama: ");
var waktu  = new Date();
if(waktu.getHours() >= 0 && waktu.getHours() <= 12) {
	document.getElementById("waktu").innerHTML = "pagi";
}else if(waktu.getHours() > 12 && waktu.getHours() <=15) {
	document.getElementById("waktu").innerHTML = "Siang";
}else if(waktu.getHours() > 15 && waktu.getHours() <= 18){
	document.getElementById("waktu").innerHTML = "Sore";
}else{
	document.getElementById("waktu").innerHTML = "Malam";
}

function hasilSilindernya() {
	var tinggi_silinder = (document.getElementById("tabungg").value);
	var jari2_silinder = (document.getElementById("tabung").value);
	tinggi_silinder = tinggi_silinder.replace(",", ".");
	var tinggi_silinder1 = tinggi_silinder.replace(".", "");
	console.log(tinggi_silinder);
	jari2_silinder = jari2_silinder.replace(",", ".");
	var jari2_silinder1 = jari2_silinder.replace(".", "");
	console.log(jari2_silinder);
	var reg = new RegExp('^\\d+$');
	if(tinggi_silinder == "" || jari2_silinder == "") {
		alert("Mohon masukkan input silinder terlebih dahulu");
		return;
	}
	if(!reg.test(tinggi_silinder1) || !reg.test(jari2_silinder1)) {
		alert("Masukkan input Silinder hanya boleh berupa angka");
		document.getElementById("tabungg").value = "";
		document.getElementById("tabung").value = "";
		document.getElementById("lp silinder").innerHTML = "";
		document.getElementById("vlm silinder").innerHTML = "";
		return;
	}
	tinggi_silinder = parseFloat(tinggi_silinder);
	jari2_silinder = parseFloat(jari2_silinder);
	console.log(tinggi_silinder);
	console.log(jari2_silinder);
	document.getElementById("lp silinder").innerHTML = 2 * 3.14 * jari2_silinder * (jari2_silinder + tinggi_silinder);
	document.getElementById("vlm silinder").innerHTML = 3.14 * jari2_silinder * jari2_silinder * tinggi_silinder;
}

function hasilKerucutnya() {
	var tinggi_kerucut = (document.getElementById("krct3").value);
	var jari2_kerucut = (document.getElementById("krct1").value);
	var garis_pelukis = (document.getElementById("krct2").value);
	var tinggi_kerucut1 = tinggi_kerucut.replace(",",".");
	tinggi_kerucu1 = tinggi_kerucut1.replace(".","");
	var jari2_kerucut1 = jari2_kerucut.replace(",",".");
	jari2_kerucut1 = jari2_kerucut1.replace(".","");
	var garis_pelukis1 = garis_pelukis.replace(",",".");
	garis_pelukis1 = garis_pelukis1.replace(".","");
	var reg = new RegExp('^\\d+$');

	if(tinggi_kerucut == "" || jari2_kerucut == "" || garis_pelukis == "") {
		alert("Mohon masukkan input kerucut terlebih dahulu");
		return;
	}
	if(!reg.test(tinggi_kerucut1) || !reg.test(jari2_kerucut1) || !reg.test(garis_pelukis1)) {
		alert("Masukkan input Kerucut hanya boleh berupa angka");
		document.getElementById("krct3".value = "");
		document.getElementById("krct2".value = "");
		document.getElementById("krct1".value = "");
		document.getElementById("lsp kerucut").innerHTML = "";
		document.getElementById("vlm kerucut").innerHTML = "";
		return;
	}
	tinggi_kerucut = parseFloat(tinggi_kerucut);
	jari2_kerucut = parseFloat(jari2_kerucut);
	garis_pelukis = parseFloat(garis_pelukis);
	document.getElementById("lsp kerucut").innerHTML = (jari2_kerucut + garis_pelukis) * (3.14 * jari2_kerucut);
	document.getElementById("vlm kerucut").innerHTML = (3.14 * jari2_kerucut * jari2_kerucut * tinggi_kerucut)/3;
}

function hasilBolanya() {
	var jari2_bola = (document.getElementById("bundar").value);
	jari2_bola = jari2_bola.replace(",",".");
	var jari2_bola1 = jari2_bola.replace(".","");
	if(jari2_bola == "") {
		alert("Masukkan input jari-jari bola terlebih dahulu");
		return;
	}
	var reg = new RegExp('^\\d+$');
	if(!reg.test(jari2_bola1)) {
		alert("Masukkan input Bola hanya boleh berupa angka");
		document.getElementById("bundar").value = "";
		document.getElementById("lsp bola").innerHTML = "";
		document.getElementById("vlm bola").innerHTML = "";
		return;
	}
	jari2_bola = parseFloat(jari2_bola);
	document.getElementById("lsp bola").innerHTML = 4 * 3.14 * jari2_bola * jari2_bola;
	document.getElementById("vlm bola").innerHTML = (4 * 3.14 * jari2_bola * jari2_bola * jari2_bola)/3;
}