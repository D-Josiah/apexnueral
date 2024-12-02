document.getElementById('down-btn').addEventListener('click', function() {
    const subMega = document.getElementById('sub-mega');
    
    // Toggle the display between none and block
    if (subMega.style.display === 'none' || subMega.style.display === '') {
        subMega.style.display = 'block';
    } else {
        subMega.style.display = 'none';
    }
});