(function () {
    console.log('🤖 Bot Kuisioner Multi-Halaman DIMULAI');

    /**
     * Fungsi utama untuk mengisi kuisioner dan klik tombol navigasi (Selanjutnya / Simpan)
     */
    function isiDanKlikTombol() {
        console.log('✍️ Mengisi kuisioner...');

        const delayAntarRadio = 300; // Waktu tunda antar klik radio
        const delayTambahan = 1000; // Tambahan waktu sebelum klik tombol

        /**
         * Mengklik semua radio button dengan label tertentu
         * @param {string} label - Label pada radio button, contoh: "Selalu"
         * @param {number} offset - Offset waktu untuk menunda eksekusi
         * @returns {number} Total delay waktu berdasarkan jumlah radio
         */
        function klikSemuaRadioDenganLabel(label, offset = 0) {
            const radios = document.querySelectorAll(`div[role="radio"][aria-label="${label}"]`);
            radios.forEach((radio, i) => {
                setTimeout(() => {
                    // Scroll ke radio button dan lakukan klik + simulasi event interaksi
                    radio.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    radio.click();
                    radio.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
                    radio.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
                    radio.dispatchEvent(new MouseEvent('click', { bubbles: true }));
                    radio.focus();
                    radio.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', bubbles: true }));
                    radio.dispatchEvent(new KeyboardEvent('keyup', { key: ' ', bubbles: true }));

                    // Set aria-checked secara manual jika belum berubah
                    setTimeout(() => {
                        if (radio.getAttribute('aria-checked') !== 'true') {
                            radio.setAttribute('aria-checked', 'true');
                        }
                    }, 200);
                }, (i + offset) * delayAntarRadio);
            });
            return radios.length * delayAntarRadio;
        }

        // Klik pilihan "Selalu" dan setelahnya "Sangat Mampu"
        const delaySelalu = klikSemuaRadioDenganLabel("Selalu");
        const delaySangatMampu = klikSemuaRadioDenganLabel("Sangat Mampu", delaySelalu / delayAntarRadio);
        const totalDelay = delaySelalu + delaySangatMampu + delayTambahan;

        // Setelah semua terisi, cari tombol navigasi
        setTimeout(() => {
            console.log('➡️ Mencari tombol SELANJUTNYA atau SIMPAN...');
            const buttons = document.querySelectorAll('button');

            // Temukan tombol "Selanjutnya"
            const nextBtn = Array.from(buttons).find(btn =>
                btn.textContent.trim().toLowerCase().includes('selanjutnya')
            );

            // Temukan tombol "Simpan"
            const simpanBtn = Array.from(buttons).find(btn =>
                btn.textContent.trim().toLowerCase().includes('simpan')
            );

            if (nextBtn) {
                nextBtn.scrollIntoView({ behavior: 'smooth' });
                nextBtn.click();
                console.log('✅ Tombol SELANJUTNYA diklik');
            } else if (simpanBtn) {
                simpanBtn.scrollIntoView({ behavior: 'smooth' });
                simpanBtn.click();
                console.log('✅ Tombol SIMPAN diklik (akhir kuisioner)');
                // Setelah menyimpan, tunggu dan cari tombol "Isi Kuisioner" berikutnya
                setTimeout(cariDanKlikIsiKuisioner, 3000);
            } else {
                console.warn('❌ Tidak ditemukan tombol SELANJUTNYA maupun SIMPAN.');
            }
        }, totalDelay);
    }

    /**
     * Observer untuk mendeteksi jika halaman kuisioner baru dimuat, lalu jalankan ulang pengisian
     */
    function jalankanObserverIsiUlang() {
        const target = document.body;

        const observer = new MutationObserver(() => {
            const radiosBaru = document.querySelectorAll('div[role="radio"][aria-label="Selalu"]');
            if (radiosBaru.length > 0) {
                console.log('🔄 Halaman baru terdeteksi, mengisi ulang...');
                observer.disconnect();
                setTimeout(() => {
                    isiDanKlikTombol();
                    setTimeout(jalankanObserverIsiUlang, 2000); // Restart observer
                }, 1000);
            }
        });

        observer.observe(target, { childList: true, subtree: true });
        console.log('👁️ Observer aktif, menunggu halaman berikutnya...');
    }

    /**
     * Fungsi untuk mencari dan klik tombol "Isi Kuisioner" untuk mengisi batch berikutnya
     */
    function cariDanKlikIsiKuisioner() {
        console.log('🔍 Mencari tombol "Isi Kuisioner"...');
        const allButtons = document.querySelectorAll('button');

        const isiBtn = Array.from(allButtons).find(btn =>
            btn.textContent.trim().toLowerCase().includes('isi kuisioner')
        );

        if (isiBtn) {
            isiBtn.scrollIntoView({ behavior: 'smooth' });
            isiBtn.click();
            console.log('✅ Tombol "Isi Kuisioner" diklik');
            setTimeout(() => {
                isiDanKlikTombol();
                setTimeout(jalankanObserverIsiUlang, 2000);
            }, 2000);
        } else {
            console.warn('❌ Tombol "Isi Kuisioner" tidak ditemukan.');
        }
    }

    // Jalankan pertama kali
    isiDanKlikTombol();
    jalankanObserverIsiUlang();
})();
