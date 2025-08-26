// Global variables
let isAdmin = false;
let instagramUsername = '';
let galleryData = [];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
    loadGallery();
    loadInstagramFeed();
    animateStats();
    setupScrollEffects();
});

// Initialize website
function initializeWebsite() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger?.classList.remove('active');
            navMenu?.classList.remove('active');
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
    
    // Scroll indicator click
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            document.querySelector('#sobre').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
    
    // Load Instagram username from localStorage or prompt
    instagramUsername = localStorage.getItem('instagramUsername') || '';
    if (instagramUsername) {
        updateInstagramLinks();
    }
}

// Setup scroll effects
function setupScrollEffects() {
    // Header background on scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(214, 40, 40, 0.98)';
        } else {
            header.style.background = 'rgba(214, 40, 40, 0.95)';
        }
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.project-card, .photo-item, .contact-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Animate statistics counters
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const animateCounter = (element) => {
        const target = parseInt(element.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 20);
    };
    
    // Intersection Observer for stats
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });
}

// Instagram Integration
function loadInstagramFeed() {
    // Simulated Instagram posts (in a real implementation, you would use Instagram Basic Display API)
    const samplePosts = [
        {
            id: '1',
            image: 'https://via.placeholder.com/300x300/d62828/ffffff?text=Missão+1',
            caption: 'Entregando alimentos na madrugada',
            likes: 45,
            comments: 12
        },
        {
            id: '2',
            image: 'https://via.placeholder.com/300x300/f77f00/ffffff?text=Missão+2',
            caption: 'Kit dignidade para pessoas em situação de rua',
            likes: 38,
            comments: 8
        },
        {
            id: '3',
            image: 'https://via.placeholder.com/300x300/fcbf49/000000?text=Missão+3',
            caption: 'Oração e palavra de esperança',
            likes: 52,
            comments: 15
        },
        {
            id: '4',
            image: 'https://via.placeholder.com/300x300/d62828/ffffff?text=Missão+4',
            caption: 'Ceia especial de Natal',
            likes: 67,
            comments: 23
        }
    ];
    
    const instagramFeed = document.getElementById('instagram-feed');
    if (instagramFeed) {
        instagramFeed.innerHTML = samplePosts.map(post => `
            <div class="instagram-post" onclick="openInstagramPost('${post.id}')">
                <img src="${post.image}" alt="${post.caption}">
                <div class="instagram-overlay">
                    <div style="text-align: center; color: white;">
                        <i class="fas fa-heart" style="margin-right: 10px;"></i>${post.likes}
                        <i class="fas fa-comment" style="margin-left: 20px; margin-right: 10px;"></i>${post.comments}
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function openInstagramPost(postId) {
    if (instagramUsername) {
        window.open(`https://instagram.com/${instagramUsername}`, '_blank');
    } else {
        alert('Configure o username do Instagram nas configurações do site.');
    }
}

function updateInstagramLinks() {
    const instagramLinks = document.querySelectorAll('#instagram-link, #instagram-social');
    instagramLinks.forEach(link => {
        link.href = `https://instagram.com/${instagramUsername}`;
    });
}

// Gallery Management
function loadGallery() {
    // Load gallery from localStorage or use default
    const savedGallery = localStorage.getItem('galleryData');
    if (savedGallery) {
        galleryData = JSON.parse(savedGallery);
    } else {
        // Default gallery items
        galleryData = [
            {
                id: '1',
                title: 'Primeira Missão',
                description: 'Nossa primeira saída para levar alimento e esperança',
                image: 'https://via.placeholder.com/400x250/d62828/ffffff?text=Primeira+Missão',
                date: '2024-01-15'
            },
            {
                id: '2',
                title: 'Kit Dignidade',
                description: 'Distribuição de kits de higiene pessoal',
                image: 'https://via.placeholder.com/400x250/f77f00/ffffff?text=Kit+Dignidade',
                date: '2024-02-10'
            },
            {
                id: '3',
                title: 'Ceia Especial',
                description: 'Ceia de Natal com culto e louvor',
                image: 'https://via.placeholder.com/400x250/fcbf49/000000?text=Ceia+Especial',
                date: '2024-12-24'
            }
        ];
        saveGallery();
    }
    
    renderGallery();
}

function renderGallery() {
    const photoGallery = document.getElementById('photo-gallery');
    if (photoGallery) {
        photoGallery.innerHTML = galleryData.map(photo => `
            <div class="photo-item" onclick="openPhotoModal('${photo.id}')">
                <img src="${photo.image}" alt="${photo.title}">
                <div class="photo-overlay">
                    <h4>${photo.title}</h4>
                    <p>${photo.description}</p>
                    ${isAdmin ? `<button onclick="event.stopPropagation(); deletePhoto('${photo.id}')" class="btn btn-secondary" style="margin-top: 10px; padding: 5px 10px; font-size: 0.8rem;">Excluir</button>` : ''}
                </div>
            </div>
        `).join('');
    }
}

function openPhotoModal(photoId) {
    const photo = galleryData.find(p => p.id === photoId);
    if (photo) {
        // Create modal
        const modal = document.createElement('div');
        modal.className = 'photo-modal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2000;
            cursor: pointer;
        `;
        
        modal.innerHTML = `
            <div style="max-width: 90%; max-height: 90%; text-align: center;">
                <img src="${photo.image}" alt="${photo.title}" style="max-width: 100%; max-height: 80vh; object-fit: contain;">
                <div style="color: white; padding: 20px;">
                    <h3>${photo.title}</h3>
                    <p>${photo.description}</p>
                </div>
            </div>
        `;
        
        modal.addEventListener('click', () => {
            document.body.removeChild(modal);
        });
        
        document.body.appendChild(modal);
    }
}

function addPhoto() {
    const fileInput = document.getElementById('photo-upload');
    const titleInput = document.getElementById('photo-title');
    const descriptionInput = document.getElementById('photo-description');
    
    if (!fileInput.files.length || !titleInput.value) {
        alert('Por favor, selecione uma foto e adicione um título.');
        return;
    }
    
    // In a real implementation, you would upload the file to a server
    // For this demo, we'll use a placeholder
    const file = fileInput.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
        const newPhoto = {
            id: Date.now().toString(),
            title: titleInput.value,
            description: descriptionInput.value,
            image: e.target.result,
            date: new Date().toISOString().split('T')[0]
        };
        
        galleryData.unshift(newPhoto);
        saveGallery();
        renderGallery();
        
        // Clear form
        fileInput.value = '';
        titleInput.value = '';
        descriptionInput.value = '';
        
        alert('Foto adicionada com sucesso!');
    };
    
    reader.readAsDataURL(file);
}

function deletePhoto(photoId) {
    if (confirm('Tem certeza que deseja excluir esta foto?')) {
        galleryData = galleryData.filter(photo => photo.id !== photoId);
        saveGallery();
        renderGallery();
    }
}

function saveGallery() {
    localStorage.setItem('galleryData', JSON.stringify(galleryData));
}

// Admin Functions
function toggleAdmin() {
    const password = prompt('Digite a senha de administrador:');
    if (password === 'missaomaior2025') {
        isAdmin = !isAdmin;
        const uploadSection = document.getElementById('upload-section');
        if (uploadSection) {
            uploadSection.style.display = isAdmin ? 'block' : 'none';
        }
        
        if (isAdmin) {
            setupAdminFeatures();
        }
        
        renderGallery();
        alert(isAdmin ? 'Modo administrador ativado!' : 'Modo administrador desativado!');
    } else if (password !== null) {
        alert('Senha incorreta!');
    }
}

function setupAdminFeatures() {
    // Instagram username configuration
    const currentUsername = instagramUsername || 'Não configurado';
    const newUsername = prompt(`Username atual do Instagram: ${currentUsername}\n\nDigite o novo username (sem @):`);
    
    if (newUsername && newUsername.trim()) {
        instagramUsername = newUsername.trim();
        localStorage.setItem('instagramUsername', instagramUsername);
        updateInstagramLinks();
        alert('Username do Instagram atualizado!');
    }
}

// Utility Functions
function copyPixKey() {
    const pixKey = 'contato@missaonamadrugada.org';
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(pixKey).then(() => {
            showNotification('Chave Pix copiada!');
        });
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = pixKey;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification('Chave Pix copiada!');
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 1000;
        font-weight: bold;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.3s ease';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Service Worker Registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

