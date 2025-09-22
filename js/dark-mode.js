// Dark Mode Functionality - Shared across all pages
console.log('Dark mode script starting...');

// Apply theme ASAP based on saved preference or system setting (prevents FOUC)
(function applyInitialTheme() {
    try {
        var savedTheme = localStorage.getItem('theme');
        var systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        var initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', initialTheme);
        document.body && document.body.setAttribute('data-theme', initialTheme);
    } catch (e) {
        console.warn('Theme init error:', e);
    }
})();

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDarkMode);
} else {
    initDarkMode();
}

function initDarkMode() {
    console.log('Initializing dark mode...');

    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const darkModeIcon = document.getElementById('dark-mode-icon');
    const body = document.body;
    const root = document.documentElement;

    console.log('Dark mode toggle element:', darkModeToggle);
    console.log('Dark mode icon element:', darkModeIcon);

    if (!darkModeToggle) {
        console.error('Dark mode toggle button not found!');
        return;
    }

    if (!darkModeIcon) {
        console.error('Dark mode icon element not found!');
        return;
    }

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    console.log('Current theme from localStorage:', currentTheme);

    body.setAttribute('data-theme', currentTheme);
    root.setAttribute('data-theme', currentTheme);

    // Update icon based on current theme
    updateDarkModeIcon(currentTheme);

    // Dark mode toggle event listener
    console.log('Adding click event listener to dark mode toggle');
    darkModeToggle.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        console.log('Dark mode toggle clicked');

        const currentTheme = body.getAttribute('data-theme') || root.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        console.log('Switching from', currentTheme, 'to', newTheme);

        // Update theme
        body.setAttribute('data-theme', newTheme);
        root.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        // Update icon
        updateDarkModeIcon(newTheme);

        console.log('Theme updated successfully');
    });

    // Keep in sync with system changes if user hasn't explicitly chosen
    try {
        const media = window.matchMedia('(prefers-color-scheme: dark)');
        function handleSystemChange(e) {
            const explicit = localStorage.getItem('theme');
            if (explicit) return; // user preference wins
            const theme = e.matches ? 'dark' : 'light';
            body.setAttribute('data-theme', theme);
            root.setAttribute('data-theme', theme);
            updateDarkModeIcon(theme);
        }
        if (media && typeof media.addEventListener === 'function') {
            media.addEventListener('change', handleSystemChange);
        } else if (media && typeof media.addListener === 'function') {
            media.addListener(handleSystemChange);
        }
    } catch (e) {
        console.warn('System theme listener error:', e);
    }

    function updateDarkModeIcon(theme) {
        console.log('Updating icon for theme:', theme);
        if (darkModeIcon) {
            if (theme === 'dark') {
                darkModeIcon.className = 'fas fa-sun';
                console.log('Icon changed to sun');
            } else {
                darkModeIcon.className = 'fas fa-moon';
                console.log('Icon changed to moon');
            }
        } else {
            console.error('Dark mode icon element not found!');
        }
    }
}