const Barang = require('../models/barangmodel');

// Menampilkan semua barang
exports.index = async (req, res) => {
    try {
        const barang = await Barang.getAll();
        res.render('barang/index', {
            title: 'Warung ID - Data Barang',
            barang
        });
    } catch (error) {
        res.status(500).render('error', {
            message: error.message
        });
    }
};

// Menampilkan halaman tambah barang
exports.tambahForm = (req, res) => {
    res.render('barang/tambah', {
        title: 'Warung ID - Tambah Barang'
    });
};

// Menyimpan barang baru
exports.tambah = async (req, res) => {
    try {
        await Barang.create(req.body);
        res.redirect('/barang');
    } catch (error) {
        res.status(500).render('error', {
            message: error.message
        });
    }
};

// Menampilkan halaman edit
exports.editForm = async (req, res) => {
    try {
        const barang = await Barang.getById(req.params.id);

        if (!barang) {
            return res.status(404).send('Data barang tidak ditemukan');
        }

        res.render('barang/edit', {
            title: 'Warung ID - Edit Barang',
            barang
        });
    } catch (error) {
        res.status(500).render('error', {
            message: error.message
        });
    }
};

// Menyimpan perubahan barang
exports.update = async (req, res) => {
    try {
        await Barang.update(req.params.id, req.body);
        res.redirect('/barang');
    } catch (error) {
        res.status(500).render('error', {
            message: error.message
        });
    }
};

// Menghapus barang
exports.hapus = async (req, res) => {
    try {
        await Barang.delete(req.params.id);
        res.redirect('/barang');
    } catch (error) {
        res.status(500).render('error', {
            message: error.message
        });
    }
};