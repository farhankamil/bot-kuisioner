# 🤖 Bot Kuisioner

Koleksi script otomatis untuk mengisi kuisioner web dengan berbagai jenis form dan interface. Bot ini dirancang untuk menghemat waktu dalam mengisi kuisioner yang repetitif dengan pilihan jawaban yang sudah ditentukan.

<a id="daftar-isi"></a>
## 📋 Daftar Isi

- [Fitur](#-fitur)
- [Script yang Tersedia](#-script-yang-tersedia)
- [Cara Penggunaan](#-cara-penggunaan)
- [Struktur Project](#-struktur-project)
- [Prasyarat](#-prasyarat)
- [Instalasi](#-instalasi)
- [Panduan Penggunaan](#-panduan-penggunaan)
- [Troubleshooting](#-troubleshooting)
- [Kontribusi](#-kontribusi)
- [Disclaimer](#️-disclaimer)
- [Lisensi](#-lisensi)
- [Acknowledgments](#-acknowledgments)

<a id="fitur"></a>
## ✨ Fitur

- **Otomatis mengisi kuisioner** dengan pilihan yang telah ditentukan
- **Multi-halaman support** untuk kuisioner yang memiliki beberapa halaman
- **Smart navigation** yang dapat mendeteksi tombol "Selanjutnya", "Simpan", dan "Submit"
- **Observer pattern** untuk mendeteksi perubahan DOM dan halaman baru
- **Logging system** untuk memantau proses pengisian
- **Flexible targeting** untuk berbagai jenis form interface

<a id="script-yang-tersedia"></a>
## 🚀 Script yang Tersedia

### 1. `bot-kuisioner.js`
**Bot kuisioner multi-halaman dengan fitur lengkap**

- ✅ Mengisi pilihan "Selalu" dan "Sangat Mampu" secara otomatis
- ✅ Navigasi antar halaman dengan tombol "Selanjutnya"
- ✅ Auto-save dengan tombol "Simpan"
- ✅ Observer untuk mendeteksi halaman baru
- ✅ Batch processing untuk multiple kuisioner
- ✅ Smart scroll dan focus management

### 2. `khs.js`
**Bot kuisioner sederhana untuk KHS (Kartu Hasil Studi)**

- ✅ Mengisi pilihan "Selalu" dan "Sangat Mampu"
- ✅ Navigasi dengan tombol "Selanjutnya" dan "Simpan"
- ✅ Observer untuk multiple kuisioner
- ✅ Deteksi halaman "Terima Kasih" untuk penyelesaian

### 3. `mentari.js`
**Bot kuisioner untuk sistem Mentari**

- ✅ Mengisi semua pilihan "Ya" secara otomatis
- ✅ Submit form dengan tombol "Submit"
- ✅ Handling untuk radio button dalam label
- ✅ Simple dan fokus pada satu jenis form

<a id="cara-penggunaan"></a>
## 🛠️ Cara Penggunaan

### Metode 1: Browser Console
1. Buka halaman kuisioner di browser
2. Tekan `F12` untuk membuka Developer Tools
3. Pilih tab "Console"
4. Copy-paste script yang diinginkan ke console
5. Tekan `Enter` untuk menjalankan

### Metode 2: Browser Extension
1. Install extension seperti "Custom JavaScript for Websites"
2. Tambahkan script ke extension
3. Aktifkan untuk domain kuisioner yang diinginkan

### Metode 3: Bookmarklet
1. Buat bookmark baru di browser
2. Isi URL dengan: `javascript:(function(){/* paste script here */})();`
3. Klik bookmark saat berada di halaman kuisioner

<a id="struktur-project"></a>
## 📁 Struktur Project

```
bot-kusioner/
├── bot-kuisioner.js    # Bot utama dengan fitur lengkap
├── khs.js             # Bot untuk sistem KHS
├── mentari.js         # Bot untuk sistem Mentari
└── README.md          # Dokumentasi project
```

<a id="prasyarat"></a>
## 🔧 Prasyarat

- Browser modern (Chrome, Firefox, Safari, Edge)
- JavaScript enabled
- Akses ke Developer Tools browser
- Halaman kuisioner yang kompatibel

<a id="instalasi"></a>
## 📦 Instalasi

1. **Clone repository:**
   ```bash
   git clone https://github.com/farhankamil/bot-kusioner.git
   cd bot-kusioner
   ```

2. **Atau download langsung:**
   - Download file `.js` yang dibutuhkan
   - Simpan di folder project Anda

<a id="panduan-penggunaan"></a>
## 📖 Panduan Penggunaan

### Untuk Kuisioner Multi-Halaman
```javascript
// Gunakan bot-kuisioner.js untuk kuisioner yang memiliki:
// - Multiple halaman
// - Pilihan "Selalu" dan "Sangat Mampu"  
// - Tombol "Selanjutnya" dan "Simpan"
// - Multiple batch kuisioner
```

### Untuk Kuisioner KHS
```javascript
// Gunakan khs.js untuk:
// - Kuisioner KHS (Kartu Hasil Studi)
// - Form dengan pilihan "Selalu" dan "Sangat Mampu"
// - Sistem yang menggunakan div[role="radio"]
```

### Untuk Kuisioner Mentari
```javascript
// Gunakan mentari.js untuk:
// - Kuisioner dengan pilihan "Ya"
// - Form dengan radio button dalam label
// - Single page form dengan submit button
```

<a id="troubleshooting"></a>
## 🔍 Troubleshooting

### Script tidak bekerja?
1. **Pastikan JavaScript enabled** di browser
2. **Check console errors** di Developer Tools
3. **Refresh halaman** dan coba lagi
4. **Pastikan selector sesuai** dengan struktur HTML

### Pilihan tidak terisi?
1. **Periksa label text** pada radio button
2. **Cek struktur HTML** form
3. **Adjust delay timing** jika perlu
4. **Scroll manual** ke area form

### Navigasi tidak berfungsi?
1. **Pastikan tombol visible** di halaman
2. **Check text content** tombol navigasi
3. **Tunggu loading** halaman selesai
4. **Disable extension** yang mungkin interfere

<a id="kontribusi"></a>
## 🤝 Kontribusi

Kontribusi sangat diterima! Untuk berkontribusi:

1. Fork repository
2. Buat branch fitur (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

### Guideline Kontribusi:
- Gunakan nama variable yang descriptive
- Tambahkan comment untuk code yang kompleks
- Test script di berbagai browser
- Update README jika menambah fitur baru

<a id="disclaimer"></a>
## ⚠️ Disclaimer

- **Gunakan dengan bertanggung jawab** dan sesuai aturan institusi
- **Pastikan tidak melanggar** terms of service website
- **Bot ini untuk tujuan edukasi** dan efisiensi personal
- **Penulis tidak bertanggung jawab** atas penyalahgunaan script

<a id="lisensi"></a>
## 📄 Lisensi

Project ini dilisensikan under MIT License - lihat file [LICENSE](LICENSE) untuk detail.

<a id="acknowledgments"></a>
## 🙏 Acknowledgments

- Terima kasih kepada komunitas JavaScript
- Inspirasi dari kebutuhan otomasi kuisioner
- Kontributor yang telah membantu pengembangan

---

**Happy Coding! 🎉**

> Dibuat dengan ❤️ untuk memudahkan pengisian kuisioner repetitif
