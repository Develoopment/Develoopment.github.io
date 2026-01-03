// DOM Elements
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const backToTopButton = document.getElementById('back-to-top');
const currentYearElement = document.getElementById('current-year');
const projectsGrid = document.getElementById('projects-grid');
const categoryButtons = document.querySelectorAll('[data-category]');
const contactForm = document.getElementById('contact-form');

// Set current year in footer
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

// Mobile menu toggle
if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Close mobile menu if open
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
            
            // Smooth scroll to target
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Account for fixed header
                behavior: 'smooth'
            });
        }
    });
});

// Show/hide back to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.remove('opacity-0', 'invisible');
        backToTopButton.classList.add('opacity-100', 'visible');
    } else {
        backToTopButton.classList.remove('opacity-100', 'visible');
        backToTopButton.classList.add('opacity-0', 'invisible');
    }
});

// Back to top functionality
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Load projects
function loadProjects(filter = 'all') {
    const projects = filter === 'all' ? getAllProjects() : getProjectsByType(filter);
    
    if (projectsGrid) {
        // Clear existing projects
        projectsGrid.innerHTML = '';
        
        if (projects.length === 0) {
            projectsGrid.innerHTML = `
                <div class="col-span-full text-center py-12">
                    <p class="text-gray-500">No projects found in this category.</p>
                </div>
            `;
            return;
        }
        
        // Add fade-in animation to each project card
        projects.forEach((project, index) => {
            const projectCard = createProjectCard(project, index);
            projectsGrid.appendChild(projectCard);
        });
    }
}

// Create project card element
function createProjectCard(project, delayIndex = 0) {
    const card = document.createElement('div');
    card.className = `project-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 opacity-0`;
    card.style.animation = `fadeInUp 0.5s ease-out ${delayIndex * 0.1}s forwards`;
    
    const tagsHTML = project.tags.map(tag => 
        `<span class="inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full mr-1 mb-1 project-tag">${tag}</span>`
    ).join('');
    
    card.innerHTML = `
        <div class="h-48 overflow-hidden">
            <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover">
        </div>
        <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
            <p class="text-gray-600 mb-4">${project.description}</p>
            <div class="flex flex-wrap mb-4">
                ${tagsHTML}
            </div>
            <div class="flex space-x-3">
                ${project.github ? `
                    <a href="${project.github}" target="_blank" class="text-indigo-600 hover:text-indigo-800 transition">
                        <i class="fab fa-github"></i> Code
                    </a>
                ` : ''}
                ${project.demo ? `
                    <a href="${project.demo}" target="_blank" class="text-indigo-600 hover:text-indigo-800 transition">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>
                ` : ''}
            </div>
        </div>
    `;
    
    return card;
}

// Filter projects by category
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active state
        categoryButtons.forEach(btn => {
            btn.classList.remove('bg-indigo-600', 'text-white');
            btn.classList.add('bg-white', 'text-gray-900');
        });
        
        button.classList.remove('bg-white', 'text-gray-900');
        button.classList.add('bg-indigo-600', 'text-white');
        
        // Filter projects
        const category = button.getAttribute('data-category');
        loadProjects(category);
    });
});

// Handle contact form submission
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        
        // Here you would typically send the form data to a server
        console.log('Form submitted:', formObject);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Load all projects by default
    loadProjects('all');
    
    // Add animation to hero section
    const heroContent = document.querySelector('#home > div');
    if (heroContent) {
        heroContent.classList.add('animate-fadeInUp');
    }
    
    // Add animation to contact form
    if (contactForm) {
        contactForm.classList.add('animate-slideInUp');
    }
});

// Handle page transitions
window.addEventListener('load', () => {
    document.body.classList.remove('opacity-0');
});

// Add fade-in animation for page load
document.body.classList.add('opacity-0', 'transition-opacity', 'duration-500');

// Add animation to section headings
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section h2').forEach(section => {
    observer.observe(section);
});
