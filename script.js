document.addEventListener('DOMContentLoaded', function() {

    const header = document.getElementById('header');
    const heroSection = document.getElementById('hero');
    let headerHeight = header.offsetHeight;

    function stickyHeader() {
        if (window.scrollY > 0) { 
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    window.addEventListener('scroll', stickyHeader);
    window.addEventListener('resize', () => { headerHeight = header.offsetHeight; });
    stickyHeader(); 


    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.getElementById('navbar');
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); 
            console.log(`Link clicked: ${this.getAttribute('href')}`);

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                console.log(`Target element found: ${targetId}`);
                
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' 
                });
                
                if (targetId !== '#hero') { 
                    setTimeout(() => {
                        const currentScrollY = window.pageYOffset;
                        const targetElementTop = targetElement.getBoundingClientRect().top + currentScrollY;
                        const finalPosition = targetElementTop - headerHeight;
                        if (Math.abs(currentScrollY - finalPosition) > 1) { 
                             console.log(`Adjusting scroll for fixed header. Current: ${currentScrollY}, Target: ${finalPosition}`);
                            window.scrollTo({ top: finalPosition, behavior: 'smooth' });
                        }
                    }, 50); 
                }


                if (navbar.classList.contains('active') && (this.classList.contains('nav-link') || this.classList.contains('logo'))) {
                    navbar.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            } else {
                console.error(`Target element not found for href: ${targetId}`);
            }
        });
    });

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navbar.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }


    const sections = document.querySelectorAll('.section');
    const allNavLinks = document.querySelectorAll('#navbar .nav-link'); 

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= (sectionTop - headerHeight - 50)) { 
                current = section.getAttribute('id');
            }
        });

        allNavLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
        
        if (!current && pageYOffset < (heroSection.offsetTop + heroSection.offsetHeight / 2 - headerHeight) ) {
             allNavLinks.forEach(l => l.classList.remove('active'));
             const homeLink = document.querySelector('#navbar a[href="#hero"]');
             if (homeLink) homeLink.classList.add('active');
        }
    });

    const elementsToAnimateOnLoad = document.querySelectorAll('.animate-on-load');
    elementsToAnimateOnLoad.forEach((el) => {
        const delay = parseFloat(getComputedStyle(el).transitionDelay) * 1000 || 0;
        setTimeout(() => {
            el.classList.add('visible');
        }, 100 + delay);
    });

    const elementsToAnimateOnScroll = document.querySelectorAll('.animate-on-scroll');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            const delay = parseFloat(getComputedStyle(entry.target).transitionDelay) * 1000 || 0;
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                    entry.target.classList.remove('hidden');
                }, delay);
            } else {
                if (!entry.target.classList.contains('hidden') && (entry.boundingClientRect.bottom < 0 || entry.boundingClientRect.top > window.innerHeight)) {
                    setTimeout(() => {
                        entry.target.classList.remove('visible');
                        entry.target.classList.add('hidden');
                    }, delay);
                }
            }
        });
    };

    const scrollObserver = new IntersectionObserver(observerCallback, observerOptions);
    elementsToAnimateOnScroll.forEach(el => {
        el.classList.add('hidden'); 
        scrollObserver.observe(el);
    });

    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const nameInput = document.getElementById('name');
            const messageInput = document.getElementById('message');
            const name = nameInput.value;
            const message = messageInput.value;

            if (name.trim() === '' || message.trim() === '') {
                formMessage.textContent = 'Please fill in all fields.';
                formMessage.style.color = 'red';
                return;
            }

            formMessage.textContent = 'Thank you for your message, ' + name.split(' ')[0] + '! I\'ll be in touch soon.';
            formMessage.style.color = 'green';
            contactForm.reset();

            setTimeout(() => {
                formMessage.textContent = '';
            }, 5000);
        });
    }

    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Main Carousel Drag Logic
    const carousels = document.querySelectorAll('.works-carousel');
    const itemsPerView = () => {
        if (window.innerWidth <= 576) return 1;
        if (window.innerWidth <= 768) return 1; 
        if (window.innerWidth <= 992) return 2; 
        return 3; 
    };

    carousels.forEach(carousel => {
        const carouselWrapper = carousel.parentElement;
        const carouselId = carousel.id;
        const prevButton = document.querySelector(`.prev-arrow[data-carousel-id="${carouselId}"]`);
        const nextButton = document.querySelector(`.next-arrow[data-carousel-id="${carouselId}"]`);
        let currentIndex = 0;
        const items = Array.from(carousel.querySelectorAll('.work-item'));
        const totalItems = items.length;

        let isDown = false;
        let startX;
        let currentTranslateX = 0; 
        let dragMoved = false; 
        let clickThreshold = 10; 

        function updateCarousel(snap = true) {
            if (!items.length) return;
            const numVisible = itemsPerView();
            const gap = parseInt(getComputedStyle(carousel).gap) || 0;
            const itemWidth = items[0].offsetWidth; 

            const maxIndex = Math.max(0, totalItems - numVisible);
            
            if (snap) {
                currentIndex = Math.max(0, Math.min(currentIndex, maxIndex));
                currentTranslateX = -currentIndex * (itemWidth + gap);
                carousel.style.transition = 'transform 0.5s ease-in-out';
            } else {
                carousel.style.transition = 'none';
            }
            
            carousel.style.transform = `translateX(${currentTranslateX}px)`;

            if (prevButton) prevButton.disabled = currentIndex === 0 && snap; 
            if (nextButton) nextButton.disabled = (currentIndex >= maxIndex || totalItems <= numVisible) && snap; 
        }

        function startDrag(e) {
            isDown = true;
            carouselWrapper.classList.add('grabbing');
            startX = (e.pageX || e.touches[0].pageX); 
            
            const transformMatrix = window.getComputedStyle(carousel).getPropertyValue('transform');
            if (transformMatrix !== 'none') {
                currentTranslateX = new DOMMatrixReadOnly(transformMatrix).m41;
            } else {
                currentTranslateX = 0;
            }
            carousel.style.transition = 'none'; 
            dragMoved = false;
        }

        function drag(e) {
            if (!isDown) return;
            
            const currentX = (e.pageX || e.touches[0].pageX);
            const walk = currentX - startX;

            if (Math.abs(walk) > clickThreshold) { 
                dragMoved = true;
            }
            if (dragMoved && e.cancelable) e.preventDefault(); 
            
            carousel.style.transform = `translateX(${currentTranslateX + walk}px)`;
        }

        function endDrag(e) {
            if (!isDown) return;
            isDown = false;
            carouselWrapper.classList.remove('grabbing');
            
            const itemWidthPlusGap = items.length > 0 ? items[0].offsetWidth + (parseInt(getComputedStyle(carousel).gap) || 0) : 0;
            
            if (itemWidthPlusGap > 0) { 
                let finalTranslateX = 0;
                const finalTransform = window.getComputedStyle(carousel).getPropertyValue('transform');
                if (finalTransform !== 'none') {
                    finalTranslateX = new DOMMatrixReadOnly(finalTransform).m41;
                }
                currentIndex = Math.round(-finalTranslateX / itemWidthPlusGap);
            }
            updateCarousel(true); 

            if (dragMoved) {
                items.forEach(item => {
                    item.dataset.dragged = "true";
                    setTimeout(() => {
                        item.dataset.dragged = "false";
                    }, 50); 
                });
            }
        }
        
        carouselWrapper.addEventListener('mousedown', startDrag);
        carouselWrapper.addEventListener('touchstart', startDrag, { passive: true }); 

        document.addEventListener('mousemove', (e) => { if(isDown) drag(e); }); 
        document.addEventListener('touchmove', (e) => { if(isDown) drag(e); }, { passive: false });

        document.addEventListener('mouseup', endDrag);
        document.addEventListener('touchend', endDrag);
        
        if (prevButton) {
            prevButton.addEventListener('click', () => {
                currentIndex = Math.max(0, currentIndex - 1);
                updateCarousel();
            });
        }
        if (nextButton) {
            nextButton.addEventListener('click', () => {
                const numVisible = itemsPerView();
                currentIndex = Math.min(totalItems - numVisible, currentIndex + 1);
                updateCarousel();
            });
        }
        
        const resizeObserver = new ResizeObserver(() => updateCarousel());
        if (carousel.parentElement) resizeObserver.observe(carousel.parentElement);
        updateCarousel();
    });


    // Modal Logic
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const modalCaption = document.getElementById("modalCaption");
    const modalCloseBtn = document.querySelector(".modal-close-btn");
    const modalPrevBtn = document.querySelector(".modal-prev-arrow");
    const modalNextBtn = document.querySelector(".modal-next-arrow");

    let currentModalImageIndex;
    let currentCategoryImages = [];

    document.querySelectorAll('.work-item').forEach((item) => {
        item.addEventListener('click', function(e) {
            if (item.dataset.dragged === "true") {
                return;
            }

            const parentCategory = this.closest('.work-category');
            currentCategoryImages = Array.from(parentCategory.querySelectorAll('.work-item')).map(el => ({
                src: el.dataset.fullSrc || el.querySelector('img').src,
                alt: el.querySelector('img').alt
            }));
            
            const categoryItems = Array.from(parentCategory.querySelectorAll('.work-item'));
            currentModalImageIndex = categoryItems.indexOf(this);

            openModalWithImage(currentModalImageIndex);
        });
    });

    function openModalWithImage(index) {
        if (index >= 0 && index < currentCategoryImages.length) {
            modal.style.display = "block";
            document.body.style.overflow = 'hidden'; 
            modalImg.src = currentCategoryImages[index].src;
            modalCaption.textContent = currentCategoryImages[index].alt;
            currentModalImageIndex = index;

            modalPrevBtn.style.display = index === 0 ? "none" : "block";
            modalNextBtn.style.display = index === currentCategoryImages.length - 1 ? "none" : "block";
        }
    }

    function closeModal() {
        modal.style.display = "none";
        document.body.style.overflow = 'auto'; 
    }

    modalCloseBtn.onclick = closeModal;
    modalPrevBtn.onclick = () => openModalWithImage(currentModalImageIndex - 1);
    modalNextBtn.onclick = () => openModalWithImage(currentModalImageIndex + 1);

    window.onclick = (event) => {
        if (event.target == modal) closeModal();
    }
    document.addEventListener('keydown', (event) => {
        if (modal.style.display === "block") {
            if (event.key === "Escape") closeModal();
            else if (event.key === "ArrowLeft" && currentModalImageIndex > 0) openModalWithImage(currentModalImageIndex - 1);
            else if (event.key === "ArrowRight" && currentModalImageIndex < currentCategoryImages.length - 1) openModalWithImage(currentModalImageIndex + 1);
        }
    });

    // Proficiency Icon Hover Animation
    const proficiencyItems = document.querySelectorAll('.proficiency-item');
    proficiencyItems.forEach(item => {
        let hoverTimeout;
        item.addEventListener('mouseenter', () => {
            hoverTimeout = setTimeout(() => {
                item.classList.add('long-hover');
            }, 700); 
        });
        item.addEventListener('mouseleave', () => {
            clearTimeout(hoverTimeout);
            item.classList.remove('long-hover');
        });
    });

    // Custom Cursor Logic (Desktop only)
    const customCursor = document.getElementById('custom-cursor');
    // Check for non-touch devices using matchMedia for pointer type
    if (window.matchMedia('(pointer: fine)').matches && customCursor) { 
        // JS for custom cursor functionality (mousemove, hover, grab states)
        document.addEventListener('mousemove', (e) => {
            customCursor.style.left = e.clientX + 'px';
            customCursor.style.top = e.clientY + 'px';
        });

        document.querySelectorAll('.interactive-element').forEach(el => {
            el.addEventListener('mouseenter', () => customCursor.classList.add('hover'));
            el.addEventListener('mouseleave', () => customCursor.classList.remove('hover'));
        });
        
        document.querySelectorAll('.carousel-wrapper').forEach(el => {
            el.addEventListener('mousedown', () => customCursor.classList.add('grab'));
            document.addEventListener('mouseup', () => customCursor.classList.remove('grab'));
        });

        // Handle cursor visibility when mouse leaves/enters window
        document.addEventListener('mouseleave', () => {
            customCursor.style.opacity = '0'; // Use opacity for smoother transition
        });
        document.addEventListener('mouseenter', () => {
            customCursor.style.opacity = '1';
        });
    }
});