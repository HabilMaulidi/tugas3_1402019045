<!DOCTYPE html>
<html>
<head>
	<title>3D Kalkulator</title>
	<hr>
	<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudFlare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="style.css">
	<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudFlare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">
</head>
<body>

	<header></header>
		<div class="main">
			<div class="container">
				<div class="judulnya">3D Kalkulator</div>
				<h1>Selamat <span id="waktu"></span>, <span id="nama"></span></h1>
				<p>Menghitung volume dan luas permukaan dari Silinder, Kerucut, dan Bola.</p>


				<div class="Silinder"></div>
				<h1>Silinder</h1>
				<p>Masukkan jari-jari silinder (satuan meter)</p>
				<input type="text" name="jari2" id="tabung" value="" placeholder=""><br><br>
				<p>Masukkan tinggi silinder (satuan meter)</p>
				<input type="text" name="tinggi" id="tabungg" value="" placeholder=""><br><br>
				<div class="hitung">
					<span class="button messages" onclick="hasilSilindernya()">Hitung!</span>
				</div>
				<br><br>
				<h2>Hasil Perhitungan.</h2>
				<p>Luas Permukaan: <span id="lp silinder"></span> m<sup>2</sup></p><br>
				<p>Volume: <span id="vlm silinder"></span> m<sup>3</sup></p>
			</div>


			<div class="Kerucut">
				<h1>Kerucut</h1>
				<p>Masukkan jari-jari kerucut (satuan meter)</p>
				<input type="text" name="jari2" id="krct1" value="" placeholder=""><br><br>
				<p>Masukkan garis pelukis kerucut (satuan meter)</p>
				<input type="text" name="grp" id="krct2" value="" placeholder=""><br><br>
				<p>Masukkan tinggi kerucut (satuan meter)</p>
				<input type="text" name="tinggikrct" id="krct3" value="" placeholder=""><br><br>
				<div class="hitung">
					<span class="button messages" onclick="hasilKerucutnya()">Hitung!</span>					
				</div>

				<br><br>
				<h2>Hasil Perhitungan</h2>
				<p>Luas Permukaan: <span id="lsp kerucut"></span> m<sup>2</sup></p><br>
				<p>Volume: <span id="vlm kerucut"></span>m<sup>3</sup></p>
			</div>

				<div class="Bola">
					<h1>Bola</h1>
					<p>Masukkan jari-jari bola (satuan meter)</p>
					<input type="text" name="jari2" id="bundar" value="" placeholder=""><br><br>
					<div class="hitung">
						<span class="button messages" onclick="hasilBolanya()">Hitung!</span>
					</div>
					<br><br>
					<h2>Hasil Perhitungan</h2>
					<p>Luas Permukaan: <span id="lsp bola"></span> m<sup>2</sup></p><br>
					<p>Volume: <span id="vlm bola"></span> m<sup>3</sup></p>
				</div>
			</div>
		</div>

		<footer>
			<div class="header-right">
				<p>Copyright &copy; 2021 Habil Maulidi | 3D Kalkulator</p>
			</div>
		</footer>
		<script src="script.js"></script>
</body>
</html>
