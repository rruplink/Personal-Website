document.addEventListener('DOMContentLoaded', function() {
    // Get the current page path
    const currentPath = window.location.pathname;
    const pathParts = currentPath.split('/').filter(part => part && part !== 'Personal Website II');
    const pageName = pathParts[pathParts.length - 1] || 'index.html';
    const folderName = pathParts[pathParts.length - 2] || '';

    // Determine if we're in a subdirectory (not at root)
    // Root files: pathParts.length = 1 (just filename like 'index.html')
    // Files in folders: pathParts.length >= 2 (folder + filename)
    const isInSubdirectory = pathParts.length > 1;
    const rootPath = isInSubdirectory ? '../' : './';

    // Determine active page
    const isIndex = pageName === 'index.html' || (pageName === '' && pathParts.length === 0);
    const isAssencium = folderName === 'assencium' || pageName === 'assencium.html';
    const isMandarin = folderName === 'mandarin' || pageName === 'mandarin.html';
    const isArchive = folderName === 'archive' || pageName === 'archive.html';
    const isStorage = pageName === 'storage.html';

    // Create navigation HTML
    const navHTML = `
        <nav>
            <a href="${rootPath}index.html" class="menu-item${isIndex ? ' active' : ''}">INDEX</a>
            <a href="${rootPath}assencium/assencium.html" class="menu-item${isAssencium ? ' active' : ''}">ASSENCIUM</a>
            <a href="${rootPath}mandarin/mandarin.html" class="menu-item${isMandarin ? ' active' : ''}">MANDARIN</a>
            <a href="${rootPath}archive/archive.html" class="menu-item${isArchive ? ' active' : ''}">ARCHIVE</a>
            <a href="${rootPath}storage.html" class="menu-item${isStorage ? ' active' : ''}">STORAGE</a>
            
            
            <div class="personal-info">
                <h1>Seth Dowell</h1>
                <div class="social-links">
                    <a href="https://www.instagram.com/solinvidkus" class="social-link" title="Instagram" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                        </svg>
                    </a>
                    <a href="https://x.com/solinvidkus" class="social-link" title="Twitter" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/seth-dowell" class="social-link" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                            <rect x="2" y="9" width="4" height="12"/>
                            <circle cx="4" cy="4" r="2"/>
                        </svg>
                    </a>
                    <a href="mailto:sethhdowell@protonmail.com" class="social-link" title="Email" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="2" y="4" width="20" height="16" rx="2" ry="2"/>
                            <polyline points="22,6 12,13 2,6"/>
                        </svg>
                    </a>
                </div>
                <div class="location-wrapper">
                    <span>currently in</span>
                    <div class="location-tag">New York, NY</div>
                </div>
                <div class="footer">
                    <p>contact@goodtree.com</p>
                </div>
            </div>
        </nav>
    `;

    // Insert navigation into the page
    document.querySelector('.container').insertAdjacentHTML('afterbegin', navHTML);
}); 