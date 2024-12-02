document.addEventListener("DOMContentLoaded", function() {
    // Focus Area (drop1_b)
    const drop1_btn_b = document.getElementById('drop1_b');
    const mega1_b = document.getElementById('mega1_b');

    drop1_btn_b.addEventListener('click', function() {
        if (mega1_b.style.display === 'block') {
            mega1_b.style.display = 'none';
            mega1_b.style.backgroundColor = 'transparent';
        } else {
            mega1_b.style.display = 'block';
            mega1_b.style.backgroundColor = '#202020';
        }
    });

    mega1_b.addEventListener('mouseleave', function() {
        mega1_b.style.display = 'none';
        mega1_b.style.backgroundColor = 'transparent';
    });

   

    // Industries (industries-btn_b)
    const industries_btn_b = document.getElementById('industries-btn_b');
    const industries_drop_b = document.getElementById('industries-drop_b');

    industries_btn_b.addEventListener('click', function() {
        if (industries_drop_b.style.display === 'block') {
            industries_drop_b.style.display = 'none';
            industries_drop_b.style.backgroundColor = 'transparent';
        } else {
            industries_drop_b.style.display = 'block';
            industries_drop_b.style.backgroundColor = '#202020';
        }
    });

    industries_drop_b.addEventListener('mouseleave', function() {
        industries_drop_b.style.display = 'none';
        industries_drop_b.style.backgroundColor = 'transparent';
    });

    



});

