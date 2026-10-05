/* 
  Archivo: js/email-copy.js
*/

document.addEventListener('DOMContentLoaded', () => {
    const copyBtns = document.querySelectorAll('.copy-email-btn');
    const toast = document.getElementById('toast');
    let toastTimeout;

    copyBtns.forEach(btn => {
        btn.addEventListener('click', async (e) => {
            const email = btn.dataset.email;
            if(e.ctrlKey || e.metaKey) {
                window.location.href = `mailto:${email}`;
                return;
            }
            try {
                await navigator.clipboard.writeText(email);
                showToast();
            } catch (err) {
                console.error(err);
            }
        });
    });

    function showToast() {
        if(toastTimeout) clearTimeout(toastTimeout);
        
        // Obtener texto traducido
        const lang = document.documentElement.lang || 'es';
        const msg = lang === 'es' ? "✓ Email copiado al portapapeles" : "✓ Email copied to clipboard";
        toast.textContent = msg;

        toast.classList.add('show');
        
        toastTimeout = setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
});