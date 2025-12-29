// Toggle menu mobile
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Tutup menu mobile saat klik item menu
document.querySelectorAll('.nav-menu a').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scroll untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Fungsi untuk menyalin nomor telepon
function copyPhoneNumber() {
    const phoneNumber = '0852-7133-9970';
    navigator.clipboard.writeText(phoneNumber).then(() => {
        showToast('Nomor telepon telah disalin ke clipboard: ' + phoneNumber);
    }).catch(err => {
        console.error('Gagal menyalin teks: ', err);
        showToast('Gagal menyalin nomor telepon');
    });
}

// Fungsi untuk menampilkan toast notification
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Fungsi untuk membuka Google Maps
function openMaps() {
    const address = "Gg. Delima IX, Delima, Kec. Tampan, Kota Pekanbaru, Riau 28292";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
}

// Fungsi untuk membagikan lokasi
function shareLocation() {
    if (navigator.share) {
        navigator.share({
            title: 'SANAMA COFFEE & SPACE',
            text: 'Kunjungi SANAMA COFFEE & SPACE di Pekanbaru',
            url: window.location.href
        })
        .then(() => console.log('Berhasil membagikan'))
        .catch((error) => console.log('Gagal membagikan', error));
    } else {
        showToast('Fitur berbagi tidak didukung di browser ini');
    }
}

// Fungsi untuk menampilkan lebih banyak ulasan
function showMoreReviews() {
    showToast('Fitur ini akan menampilkan lebih banyak ulasan');
}

// Efek scroll untuk navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.05)';
    }
});

// Animasi untuk elemen saat scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observasi elemen untuk animasi
document.querySelectorAll('.info-card, .menu-item, .review-card').forEach(el => {
    observer.observe(el);
});

// Inisialisasi
document.addEventListener('DOMContentLoaded', () => {
    console.log('Website SANAMA COFFEE & SPACE dimuat');
});