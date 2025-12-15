document.addEventListener('DOMContentLoaded', function() {
    // Get the existing head element
    const head = document.head;
    
    // Create and append meta tags
    const metaViewport = document.createElement('meta');
    metaViewport.setAttribute('name', 'viewport');
    metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
    head.appendChild(metaViewport);

    // Add favicon
    const favicon = document.createElement('link');
    favicon.setAttribute('rel', 'icon');
    favicon.setAttribute('type', 'image/png');
    favicon.setAttribute('href', 'icon.png');
    head.appendChild(favicon);

    // Add font preconnect links
    const preconnectGoogle = document.createElement('link');
    preconnectGoogle.setAttribute('rel', 'preconnect');
    preconnectGoogle.setAttribute('href', 'https://fonts.googleapis.com');
    head.appendChild(preconnectGoogle);

    const preconnectGstatic = document.createElement('link');
    preconnectGstatic.setAttribute('rel', 'preconnect');
    preconnectGstatic.setAttribute('href', 'https://fonts.gstatic.com');
    preconnectGstatic.setAttribute('crossorigin', '');
    head.appendChild(preconnectGstatic);

    // Add Google Fonts
    const googleFonts = document.createElement('link');
    googleFonts.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
    googleFonts.setAttribute('rel', 'stylesheet');
    head.appendChild(googleFonts);

    // Add main stylesheet
    const stylesheet = document.createElement('link');
    stylesheet.setAttribute('rel', 'stylesheet');
    stylesheet.setAttribute('href', 'styles.css');
    head.appendChild(stylesheet);
}); 