(function() {
  console.log('[Bot] Mengisi semua pilihan "Ya"...');

  function pilihSemuaYa() {
    const yaLabels = Array.from(document.querySelectorAll('label')).filter(label =>
      label.textContent.trim().toLowerCase() === 'ya'
    );

    if (yaLabels.length === 0) {
      console.warn('[Bot] Tidak ditemukan opsi "Ya" di halaman.');
      return;
    }

    yaLabels.forEach((label, i) => {
      setTimeout(() => {
        const input = label.querySelector('input[type="radio"]');
        if (input && !input.checked) {
          input.click();
        }
      }, i * 200);
    });

    return yaLabels.length * 200 + 1000;
  }

  function klikSubmitSetelah(delayMs) {
    setTimeout(() => {
      const submitBtn = Array.from(document.querySelectorAll('button')).find(btn =>
        btn.textContent.trim().toLowerCase().includes('submit')
      );

      if (submitBtn) {
        submitBtn.scrollIntoView({ behavior: 'smooth' });
        submitBtn.click();
        console.log('[Bot] ✔ Kuesioner disubmit.');
      } else {
        console.warn('[Bot] ❌ Tombol "Submit" tidak ditemukan.');
      }
    }, delayMs);
  }

  const totalDelay = pilihSemuaYa();
  if (totalDelay) {
    console.log('[Bot] Semua opsi sedang diisi...');
    klikSubmitSetelah(totalDelay);
  }
})();
