/* ============================
   MAIN APP CLASS
   Handles modals, game player, CV viewer
   ============================ */

class App {
    constructor() {
        this.gameModal = document.getElementById('game-modal');
        this.cvModal = document.getElementById('cv-modal');
        this.gameIframe = document.getElementById('game-iframe');
        this.cvIframe = document.getElementById('cv-iframe');
        this.gameModalTitle = document.getElementById('game-modal-title');
        this.cvBtn = document.getElementById('cv-btn');
        
        this.init();
    }

    init() {
        // CV Button
        this.cvBtn.addEventListener('click', () => this.openCVModal());

        // Modal close buttons
        document.getElementById('game-modal-close').addEventListener('click', () => this.closeGameModal());
        document.getElementById('cv-modal-close').addEventListener('click', () => this.closeCVModal());

        // Overlay clicks
        document.querySelectorAll('.modal-overlay').forEach(overlay => {
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) {
                    this.closeGameModal();
                    this.closeCVModal();
                }
            });
        });

        // Game controls
        document.getElementById('fullscreen-btn').addEventListener('click', () => this.toggleFullscreen());
        document.getElementById('mute-btn').addEventListener('click', () => this.toggleMute());

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeGameModal();
                this.closeCVModal();
            }
        });
    }

    // ===== GAME MODAL =====

    openGame(gameId) {
        const game = CONFIG.games.find(g => g.id === gameId);
        if (!game) return;

        this.gameModalTitle.textContent = game.title;
        document.getElementById('game-title-info').textContent = game.title;
        this.gameIframe.src = game.embedUrl;
        this.gameModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Reset mute button
        document.getElementById('mute-btn').textContent = '🔊 Mute';
        this.isMuted = false;
    }

    closeGameModal() {
        this.gameModal.classList.remove('active');
        this.gameIframe.src = '';
        document.body.style.overflow = '';
    }

    toggleFullscreen() {
        const iframe = this.gameIframe;
        
        if (!document.fullscreenElement) {
            if (iframe.requestFullscreen) {
                iframe.requestFullscreen();
            } else if (iframe.webkitRequestFullscreen) {
                iframe.webkitRequestFullscreen();
            } else if (iframe.mozRequestFullScreen) {
                iframe.mozRequestFullScreen();
            } else if (iframe.msRequestFullscreen) {
                iframe.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
    }

    toggleMute() {
        this.isMuted = !this.isMuted;
        const muteBtn = document.getElementById('mute-btn');
        
        if (this.isMuted) {
            muteBtn.textContent = '🔇 Unmute';
            // Note: Direct muting is limited due to iframe sandbox restrictions
            // Some games may support mute parameter
        } else {
            muteBtn.textContent = '🔊 Mute';
        }
    }

    // ===== CV MODAL =====

    openCVModal() {
        this.cvModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeCVModal() {
        this.cvModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // ===== UTILITIES =====

    log(message) {
        console.log(`[Portfolio App] ${message}`);
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.app = new App();
    this.log = (msg) => console.log(`[Portfolio] ${msg}`);
});
