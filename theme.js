// Select the dark mode and light mode buttons
const darkModeBtn = document.getElementById('dark-mode-toggle');
const lightModeBtn = document.getElementById('light-mode-toggle');

// Function to apply dark mode
function applyDarkMode() {
    document.documentElement.style.setProperty('--background-color', 'black');
    document.documentElement.style.setProperty('--text-color', 'white');
    localStorage.setItem('theme', 'dark');
}

// Function to apply light mode
function applyLightMode() {
    document.documentElement.style.setProperty('--background-color', 'white');
    document.documentElement.style.setProperty('--text-color', 'black');
    localStorage.setItem('theme', 'light');
}


function checkStoredTheme() {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
        applyDarkMode();
    } else {
        applyLightMode(); 
    }
}

darkModeBtn.addEventListener('click', applyDarkMode);
lightModeBtn.addEventListener('click', applyLightMode);


checkStoredTheme();