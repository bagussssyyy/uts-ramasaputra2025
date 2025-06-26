<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ayam Bakar Rama Saputra</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #fef9f4;
            margin: 0;
            padding: 0;
        }

        header {
            background-color: #0a8832;
            color: white;
            text-align: center;
            padding: 20px 0;
        }

        nav {
            background-color: #fbfbfb;
            padding: 10px;
            text-align: center;
        }

        nav a {
            margin: 0 15px;
            color: white;
            text-decoration: none;
            font-weight: bold;
        }

        section {
            padding: 20px;
        }

        .menu-item {
            margin-bottom: 15px;
        }

        .menu-item h4 {
            margin: 0;
        }

        footer {
            background-color: #3aa33a;
            color: white;
            text-align: center;
            padding: 15px 0;
        }

        form input, form textarea, form select {
            width: 100%;
            padding: 10px;
            margin: 5px 0 15px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        form button {
            background-color: #d9534f;
            color: white;
            padding: 10px 15px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        form button:hover {
            background-color: #c9302c;
        }
    </style>
</head>
<body>

<header>
    <h1>RAJA AYAM </h1>
    <p>Ini Ayam Bukan embarang Ayam</p>
</header>

<nav>

<section id="tentang">
    <h2>Tentang Kami</h2>
    <p>Warung Raja Ayam menyediakan berbagai macam ayam goreng dan bakar khas rumahan dengan bumbu rahasia keluarga yang menggoda selera. Kami mengutamakan kualitas bahan dan rasa terbaik untuk pelanggan kami.</p>
    <p><strong>Alamat:</strong> Jl. Tahunan-ngabul No. 25, Jepara, Jawa Tengah</p>
</section>

<section id="menu">
    <h2>Menu Ayam Goreng</h2>
    <div class="menu-item">
        <h4>Ayam Bakar Original</h4>
        <p>Rp 15.000</p>
    </div>
    <div class="menu-item">
        <h4>Ayam Goreng Bali</h4>
        <p>Rp 16.000</p>
    </div>
    <div class="menu-item">
        <h4>Paket Goreng + Nasi</h4>
        <p>Rp 22.000</p>
    </div>
    <div class="menu-item">
        <h4>Paket Ayam Goreng Bali + Nasi</h4>
        <p>Rp 23.000</p>
    </div>
</section>

<section id="menu">
    <h2>Menu Ayam Bakar</h2>
    <div class="menu-item">
        <h4>Ayam Bakar Original</h4>
        <p>Rp 18.000</p>
    </div>
    <div class="menu-item">
        <h4>Ayam Bakar Iblis</h4>
        <p>Rp 19.000</p>
    </div>
    <div class="menu-item">
        <h4>Paket Ayam Bakar + Nasi</h4>
        <p>Rp 25.000</p>
    </div>
    <div class="menu-item">
        <h4>Ayam Bakar Iblis + Nasi</h4>
        <p>Rp 26.000</p>
    </div>
</section>

<section id="pesan">
    <h2>Formulir Pemesanan</h2>
    <form action="#" method="post">
        <label>Nama:</label>
        <input type="text" name="nama" required>

        <label>Menu yang Dipesan:</label>
        <select name="menu">
            <option value="original">Ayam Goreng Original</option>
            <option value="Bali">Ayam Goreng Bali</option>
            <option value="paket">Paket Ayam Goreng + Nasi</option>
            <option value="paket">Paket Ayam goreng Bali + Nasi</option>
            <option value="original">Ayam Bakar </option>
            <option value="Iblis">Ayam Bakar Iblis</option>
            <option value="paket">Paket Ayam bakar + Nasi</option>
            <option value="paket">Paket Ayam bakar Iblis + Nasi</option>
        </select>

        <label>Jumlah:</label>
        <input type="number" name="jumlah" min="1" required>

        <label>Alamat Pengiriman:</label>
        <textarea name="alamat" rows="4" required></textarea>

        <button type="submit">Kirim Pesanan</button>
    </form>
</section>

<footer>
    <p>&copy; 2025 Raja ayam by Rama Saputra.</p>
</footer>

</body>
</html>
