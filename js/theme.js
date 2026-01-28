/* ============================
   THEME MANAGEMENT
   ============================ */

class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('theme-toggle');
        this.init();
    }

    init() {
        // Load saved theme or use system preference
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme) {
            this.setTheme(savedTheme);
        } else if (prefersDark) {
            this.setTheme('dark');
        } else {
            this.setTheme('light');
        }

        // Theme toggle button listener
        this.themeToggle.addEventListener('click', () => this.toggle());

        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            this.setTheme(e.matches ? 'dark' : 'light');
        });
    }

    setTheme(theme) {
        const body = document.body;
        
        // Remove existing theme classes
        body.classList.remove('light-theme', 'dark-theme');
        
        // Add new theme class
        body.classList.add(`${theme}-theme`);
        
        // Save preference
        localStorage.setItem('theme', theme);
        
        // Update icon (moon = light/dark toggle indicator)
        // Light theme shows moon icon (click to go dark)
        // Dark theme shows sun-like icon (click to go light)
        if (theme === 'light') {
            this.themeToggle.innerHTML = this.getMoonIcon();
        } else {
            this.themeToggle.innerHTML = this.getSunlikeIcon();
        }
    }

    toggle() {
        const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }

    // Perfect moon icon (transparent moon)
    getMoonIcon() {
        return `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
        `;
    }

    // Sun-like icon (light theme indicator)
    getSunlikeIcon() {
        return `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
        `;
    }
}

// Initialize theme manager when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
});
