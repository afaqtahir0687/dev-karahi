// ============================================
// CONFIGURATION - Update these values before deployment
// ============================================
const WHATSAPP_PHONE = '923017730687'; // WhatsApp phone number (without + or spaces)
const BUSINESS_NAME = 'Chicken Karahi'; // Business name for WhatsApp messages
const DOMAIN = 'https://dev-karahi.vercel.app'; // Website domain (replace with actual domain)

// ============================================
// SERVICE WORKER REGISTRATION
// ============================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('✅ ServiceWorker registration successful with scope: ', registration.scope);
                console.log('Service Worker state:', registration.installing ? 'installing' : registration.waiting ? 'waiting' : 'active');
            })
            .catch(error => {
                console.log('❌ ServiceWorker registration failed: ', error);
            });
    });
} else {
    console.log('❌ Service Worker not supported in this browser');
}

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animate hamburger menu
        const spans = mobileMenuBtn.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            
            // Reset hamburger menu
            const spans = mobileMenuBtn.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    }
});

// Video mute/unmute toggle
const heroVideo = document.querySelector('.hero-video');
if (heroVideo) {
    heroVideo.addEventListener('click', () => {
        if (heroVideo.muted) {
            heroVideo.muted = false;
        } else {
            heroVideo.muted = true;
        }
    });
}

// Ensure videos play on mobile
document.querySelectorAll('video').forEach(video => {
    video.addEventListener('click', function() {
        if (this.paused) {
            this.play();
        } else {
            this.pause();
        }
    });
});

// PWA Install Banner
let deferredPrompt;
const installBanner = document.getElementById('installBanner');
const installBtn = document.getElementById('installBtn');
const closeInstallBanner = document.getElementById('closeInstallBanner');
const navInstallBtn = document.getElementById('navInstallBtn');

// Check if user has dismissed the install banner
const installBannerDismissed = localStorage.getItem('installBannerDismissed');

// Listen for beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (e) => {
    console.log('✅ beforeinstallprompt event fired!');
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later
    deferredPrompt = e;
    console.log('Install prompt ready to show');

    // Show install banner if not dismissed
    if (!installBannerDismissed) {
        installBanner.style.display = 'block';
        console.log('Install banner shown');
    }

    // Show nav install button
    if (navInstallBtn) {
        navInstallBtn.style.display = 'block';
        console.log('Nav install button shown');
    }
});

// Install button click handler
if (installBtn) {
    installBtn.addEventListener('click', async () => {
        if (deferredPrompt) {
            // Show the install prompt
            deferredPrompt.prompt();
            // Wait for the user to respond to the prompt
            const { outcome } = await deferredPrompt.userChoice;
            // We've used the prompt, and can't use it again
            deferredPrompt = null;
            // Hide the install banner
            installBanner.style.display = 'none';
            // Hide nav install button
            if (navInstallBtn) {
                navInstallBtn.style.display = 'none';
            }
        }
    });
}

// Nav install button click handler
if (navInstallBtn) {
    navInstallBtn.addEventListener('click', async () => {
        if (deferredPrompt) {
            // Show the install prompt
            deferredPrompt.prompt();
            // Wait for the user to respond to the prompt
            const { outcome } = await deferredPrompt.userChoice;
            // We've used the prompt, and can't use it again
            deferredPrompt = null;
            // Hide nav install button
            navInstallBtn.style.display = 'none';
        }
    });
}

// Close install banner
if (closeInstallBanner) {
    closeInstallBanner.addEventListener('click', () => {
        installBanner.style.display = 'none';
        localStorage.setItem('installBannerDismissed', 'true');
        if (navInstallBtn) {
            navInstallBtn.style.display = 'none';
        }
    });
}

// Hide install banner when app is installed
window.addEventListener('appinstalled', () => {
    console.log('✅ App was installed!');
    installBanner.style.display = 'none';
    if (navInstallBtn) {
        navInstallBtn.style.display = 'none';
    }
    localStorage.removeItem('installBannerDismissed');
});

// Debug: Check PWA installability
setTimeout(() => {
    console.log('=== PWA Debug Info ===');
    console.log('Service Worker supported:', 'serviceWorker' in navigator);
    console.log('Before install prompt supported:', 'onbeforeinstallprompt' in window);
    console.log('Is secure context:', window.isSecureContext);
    console.log('Current URL:', window.location.href);
    console.log('User agent:', navigator.userAgent);

    // Check if app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
        console.log('✅ App is already installed and running in standalone mode');
    } else {
        console.log('ℹ️ App is not installed or running in browser mode');
    }

    // Check service worker status
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistration().then(registration => {
            if (registration) {
                console.log('Service Worker registered:', registration.scope);
                console.log('Service Worker state:', registration.active ? 'active' : 'not active');
            } else {
                console.log('❌ No Service Worker registration found');
            }
        });
    }
}, 2000);

// WhatsApp Ordering Function
function orderOnWhatsApp(itemName) {
    const message = `Assalam o Alaikum, I would like to order ${itemName} from ${BUSINESS_NAME}. Please confirm availability and total price.`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Add click handlers to all order buttons
document.querySelectorAll('.order-btn, .btn-small').forEach(button => {
    button.addEventListener('click', function(e) {
        // Find the menu item name
        const menuItem = this.closest('.menu-item');
        if (menuItem) {
            const itemName = menuItem.querySelector('h3').textContent;
            orderOnWhatsApp(itemName);
        }
    });
});