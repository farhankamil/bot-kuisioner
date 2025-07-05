(function() {
  console.log('[Bot] Proses dimulai...');

  function isiDanKlikSelanjutnya() {
    console.log('[Bot] Mengisi kuisioner...');

    const delayAntarRadio = 300;
    const delayTambahan = 1000;

    function klikSemuaRadioDenganLabel(label, offset = 0) {
      const radios = document.querySelectorAll(`div[role="radio"][aria-label="${label}"]`);
      radios.forEach((radio, i) => {
        setTimeout(() => {
          radio.scrollIntoView({ behavior: 'smooth', block: 'center' });
          radio.click();
          radio.dispatchEvent(new MouseEvent('click', { bubbles: true }));
          radio.focus();
          radio.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', bubbles: true }));
          radio.dispatchEvent(new KeyboardEvent('keyup', { key: ' ', bubbles: true }));

          setTimeout(() => {
            if (radio.getAttribute('aria-checked') !== 'true') {
              radio.setAttribute('aria-checked', 'true');
            }
          }, 200);
        }, (i + offset) * delayAntarRadio);
      });
      return radios.length * delayAntarRadio;
    }

    const delaySelalu = klikSemuaRadioDenganLabel("Selalu");
    const delaySangatMampu = klikSemuaRadioDenganLabel("Sangat Mampu", delaySelalu / delayAntarRadio);
    const totalDelay = delaySelalu + delaySangatMampu + delayTambahan;

    setTimeout(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const nextBtn = buttons.find(btn =>
        btn.textContent.trim().toLowerCase().includes('selanjutnya')
      );
      const simpanBtn = buttons.find(btn =>
        btn.textContent.trim().toLowerCase().includes('simpan')
      );

      if (nextBtn) {
        nextBtn.scrollIntoView({ behavior: 'smooth' });
        nextBtn.click();
        console.log('[Bot] ✔ Tombol "Selanjutnya" diklik');
      } else if (simpanBtn) {
        simpanBtn.scrollIntoView({ behavior: 'smooth' });
        simpanBtn.click();
        console.log('[Bot] 💾 ✔ Tombol "Simpan" diklik — Kuisioner selesai');
        if (window.kuisionerObserver) {
          window.kuisionerObserver.disconnect();
          console.log('[Bot] ⏹ Observer dihentikan');
        }
      } else {
        console.warn('[Bot] ❌ Tidak ditemukan tombol "Selanjutnya" maupun "Simpan"');
      }
    }, totalDelay);
  }

  function jalankanObserverIsiUlang(callbackSetelahIsi) {
    const observer = new MutationObserver(() => {
      const radiosBaru = document.querySelectorAll('div[role="radio"][aria-label="Selalu"]');
      if (radiosBaru.length > 0) {
        console.log('[Bot] 🔄 Halaman baru terdeteksi — memulai pengisian');
        observer.disconnect();
        window.kuisionerObserver = null;
        setTimeout(() => {
          isiDanKlikSelanjutnya();
          setTimeout(() => jalankanObserverIsiUlang(callbackSetelahIsi), 3000);
        }, 1000);
      }

      const selesai = document.querySelector('span, h1, h2');
      if (selesai && selesai.textContent.toLowerCase().includes('terima kasih')) {
        console.log('[Bot] ✔ Kuisioner ditandai selesai');
        observer.disconnect();
        window.kuisionerObserver = null;
        setTimeout(callbackSetelahIsi, 2000);
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
    window.kuisionerObserver = observer;
    console.log('[Bot] 👁️ Observer aktif — menunggu halaman kuisioner');
  }

  function klikSemuaTombolIsiKuesioner() {
    const tombolIsi = Array.from(document.querySelectorAll('button')).filter(btn =>
      btn.textContent.trim().toLowerCase().includes('isi kuesioner')
    );

    if (tombolIsi.length === 0) {
      console.warn('[Bot] ⚠ Tidak ditemukan tombol "Isi Kuesioner"');
      return;
    }

    let indeks = 0;

    function klikBerikutnya() {
      if (indeks >= tombolIsi.length) {
        console.log('[Bot] ✅ Semua kuisioner telah diproses');
        return;
      }

      const btn = tombolIsi[indeks];
      console.log(`[Bot] ➡ Mengklik tombol "Isi Kuesioner" ke-${indeks + 1}`);
      btn.scrollIntoView({ behavior: 'smooth' });
      btn.click();

      jalankanObserverIsiUlang(() => {
        indeks++;
        setTimeout(klikBerikutnya, 1500);
      });
    }

    klikBerikutnya();
  }

  klikSemuaTombolIsiKuesioner();
})();
