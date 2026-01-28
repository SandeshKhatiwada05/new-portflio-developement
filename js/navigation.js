/* ============================
   NAVIGATION & PAGE ROUTING
   ============================ */

class Navigation {
    constructor() {
        this.sidebar = document.getElementById('sidebar');
        this.hamburger = document.getElementById('hamburger');
        this.navLinks = document.querySelectorAll('.nav-item');
        this.contentArea = document.getElementById('content-area');
        this.sidebarOverlay = document.getElementById('sidebar-overlay');
        
        this.init();
    }

    init() {
        // Hamburger menu toggle
        this.hamburger.addEventListener('click', () => this.toggleSidebar());

        // Navigation links
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = link.dataset.page;
                this.navigateTo(page);
                this.closeSidebar();
            });
        });

        // Sidebar overlay click to close
        this.sidebarOverlay.addEventListener('click', () => this.closeSidebar());

        // Set initial page
        this.navigateTo('about');
    }

    toggleSidebar() {
        this.sidebar.classList.toggle('active');
        this.hamburger.classList.toggle('active');
        this.sidebarOverlay.classList.toggle('active');
    }

    closeSidebar() {
        this.sidebar.classList.remove('active');
        this.hamburger.classList.remove('active');
        this.sidebarOverlay.classList.remove('active');
    }

    navigateTo(page) {
        // Update active nav item
        this.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.page === page) {
                link.classList.add('active');
            }
        });

        // Load page content
        this.loadPage(page);
    }

    loadPage(page) {
        // Route to appropriate page handler
        switch(page) {
            case 'about':
                this.loadAboutPage();
                break;
            case 'games':
                this.loadGamesPage();
                break;
            case 'skills':
                this.loadSkillsPage();
                break;
            case 'projects':
                this.loadProjectsPage();
                break;
            default:
                this.loadAboutPage();
        }
    }

    // ===== PAGE LOADERS =====

    loadAboutPage() {
        this.contentArea.innerHTML = `
            <section class="section">
                <!-- Hero -->
                <div class="hero">
                    <img src="sources/My Image.jpg" alt="Sandesh Khatiwada" class="hero-image">
                    <h1 class="hero-title">Sandesh Khatiwada</h1>
                    <div class="hero-subtitle">Backend Developer | ML & Automation</div>
                    <p class="hero-description">
                        Backend developer exploring backend development with Spring Boot alongside data science and machine learning. 
                        Hands-on experience building Java backend systems using Spring Data JPA, Spring Security, and PostgreSQL, 
                        with a solid grasp of JPA internals, Hibernate lifecycle, transactions, and DTO-based design. 
                        Worked on AI and automation projects using Python, Jupyter Notebook, and n8n. 
                        Familiar with multiple languages including Java, Python, C#, and JavaScript, 
                        with exposure to cloud, Linux, advanced databases, and Docker. 
                        Strong foundation in Data Structures and Algorithms and Microprocessor concepts.
                    </p>
                </div>

                <!-- Technical Skills -->
                <h2 class="section-title">Technical Skills</h2>
                <div class="grid grid-2">
                    ${Object.entries(CONFIG.skills).map(([category, items]) => `
                        <div class="card">
                            <h3>${category}</h3>
                            <div>
                                ${items.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>

                <!-- Learning Journey Timeline -->
                <h2 class="section-title mt-xl">Learning Journey</h2>
                <div class="timeline">
                    ${CONFIG.timeline.map(entry => `
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <div class="timeline-content">
                                <h3>${entry.year} - ${entry.title}</h3>
                                <ul style="margin-left: var(--spacing-lg); color: var(--text-secondary);">
                                    ${entry.items.map(item => `<li>${item}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <!-- Services -->
                <h2 class="section-title mt-xl">Specializations</h2>
                <div class="grid grid-2">
                    ${CONFIG.services.map(service => `
                        <div class="card">
                            <h3>${service.name}</h3>
                            <p>${service.description}</p>
                        </div>
                    `).join('')}
                </div>
            </section>
            ${this.getFooter()}
        `;
    }

    loadGamesPage() {
        this.contentArea.innerHTML = `
            <section class="section">
                <h1 class="section-title">Play Games</h1>
                <p class="section-subtitle">Interactive HTML5 games. Click any game to play in fullscreen!</p>
                
                <div class="grid grid-4">
                    ${CONFIG.games.map(game => `
                        <div class="card" style="cursor: pointer; text-align: center;" onclick="app.openGame('${game.id}')">
                            <div style="font-size: 3rem; margin-bottom: var(--spacing-md);">${game.icon}</div>
                            <h3>${game.title}</h3>
                            <p style="font-size: 0.9rem;">${game.description}</p>
                            <button class="btn" onclick="app.openGame('${game.id}')" style="width: 100%; margin-top: var(--spacing-md);">Play</button>
                        </div>
                    `).join('')}
                </div>
            </section>
            ${this.getFooter()}
        `;
    }

    loadSkillsPage() {
        this.contentArea.innerHTML = `
            <section class="section">
                <h1 class="section-title">Skills & Expertise</h1>
                <p class="section-subtitle">Key technologies and specializations</p>
                
                <div class="grid grid-3">
                    ${Object.entries(CONFIG.skills).map(([category, items]) => `
                        <div class="card">
                            <h3>${category}</h3>
                            <ul style="margin-left: var(--spacing-lg); color: var(--text-secondary);">
                                ${items.map(skill => `<li>${skill}</li>`).join('')}
                            </ul>
                        </div>
                    `).join('')}
                </div>
            </section>
            ${this.getFooter()}
        `;
    }

    loadProjectsPage() {
        this.contentArea.innerHTML = `
            <section class="section">
                <h1 class="section-title">Projects</h1>
                <p class="section-subtitle">Recent work and notable projects</p>
                
                <div style="display: flex; flex-direction: column; gap: var(--spacing-lg);">
                    ${CONFIG.projects.map(project => `
                        <div class="card">
                            <div style="display: flex; justify-content: space-between; align-items: start; gap: var(--spacing-md);">
                                <div>
                                    <h3>${project.title}</h3>
                                    <p>${project.description}</p>
                                    <div style="margin-top: var(--spacing-md);">
                                        ${project.tags.map(tag => `<span class="skill-tag">${tag}</span>`).join('')}
                                    </div>
                                </div>
                                <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">GitHub →</a>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>
            ${this.getFooter()}
        `;
    }

    getFooter() {
        return `
            <footer>
                <p>© 2026 Sandesh Khatiwada. All rights reserved. | 
                <a href="https://github.com/SandeshKhatiwada05" target="_blank" rel="noopener noreferrer">GitHub</a></p>
            </footer>
        `;
    }
}

// Initialize navigation when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.navigation = new Navigation();
});
