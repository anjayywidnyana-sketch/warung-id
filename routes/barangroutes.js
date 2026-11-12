const express = require('express');
const router = express.Router();

const barangController = require('../controllers/barangcontroller');

// Halaman utama data barang
router.get('/', barangController.index);

// Halaman dan proses tambah barang
router.get('/tambah', barangController.tambahForm);
router.post('/tambah', barangController.tambah);

// Halaman dan proses edit barang
router.get('/edit/:id', barangController.editForm);
router.post('/edit/:id', barangController.update);

// Proses hapus barang
router.post('/hapus/:id', barangController.hapus);

module.exports = router;