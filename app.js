require('dotenv').config();

const express = require('express');
const path = require('path');

const barangRoutes = require('./routes/barangroutes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/barang', barangRoutes);

app.get('/', (req, res) => {
    res.redirect('/barang');
});

app.use((req, res) => {
    res.status(404).render('error', {
        message: 'Halaman tidak ditemukan.'
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server Warung ID berjalan di http://localhost:${PORT}`);
});