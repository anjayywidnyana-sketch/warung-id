const db = require('../config/database');

// Mengambil semua data barang
exports.getAll = async () => {
    const [rows] = await db.query('SELECT * FROM barang ORDER BY id DESC');
    return rows;
};

// Mengambil satu barang berdasarkan ID
exports.getById = async (id) => {
    const [rows] = await db.query(
        'SELECT * FROM barang WHERE id = ?',
        [id]
    );
    return rows[0];
};

// Menambahkan barang baru
exports.create = async (data) => {
    const {
        nama_barang,
        kategori,
        deskripsi,
        harga,
        stok,
        status
    } = data;

    await db.query(
        `INSERT INTO barang
        (nama_barang, kategori, deskripsi, harga, stok, status)
        VALUES (?, ?, ?, ?, ?, ?)`,
        [
            nama_barang,
            kategori,
            deskripsi || '',
            harga,
            stok,
            status
        ]
    );
};

// Mengubah data barang
exports.update = async (id, data) => {
    const {
        nama_barang,
        kategori,
        deskripsi,
        harga,
        stok,
        status
    } = data;

    await db.query(
        `UPDATE barang SET
        nama_barang = ?,
        kategori = ?,
        deskripsi = ?,
        harga = ?,
        stok = ?,
        status = ?
        WHERE id = ?`,
        [
            nama_barang,
            kategori,
            deskripsi || '',
            harga,
            stok,
            status,
            id
        ]
    );
};

// Menghapus barang
exports.delete = async (id) => {
    await db.query(
        'DELETE FROM barang WHERE id = ?',
        [id]
    );
};