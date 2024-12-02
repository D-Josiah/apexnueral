document.addEventListener("DOMContentLoaded", function() {
    // Focus Area (drop1)
    const drop1_btn = document.getElementById('drop1');
    const mega1 = document.getElementById('mega1');

    drop1_btn.addEventListener('mouseenter', function() {
        mega1.style.display = 'block';
        mega1.style.backgroundColor = '#202020';
    });

    drop1_btn.addEventListener('mouseleave', function() {
        setTimeout(function() {
            if (!mega1.matches(':hover')) {
                mega1.style.display = 'none';
                mega1.style.backgroundColor = 'transparent';
            }
        }, 200);
    });

    mega1.addEventListener('mouseleave', function() {
        mega1.style.display = 'none';
        mega1.style.backgroundColor = 'transparent';
    });

   
    // Industries (industries-btn)
    const industries_btn = document.getElementById('industries-btn');
    const industries_drop = document.getElementById('industries-drop');

    industries_btn.addEventListener('mouseenter', function() {
        industries_drop.style.display = 'block';
        industries_drop.style.backgroundColor = '#202020';
    });

    industries_btn.addEventListener('mouseleave', function() {
        setTimeout(function() {
            if (!industries_drop.matches(':hover')) {
                industries_drop.style.display = 'none';
                industries_drop.style.backgroundColor = 'transparent';
            }
        }, 200);
    });

    industries_drop.addEventListener('mouseleave', function() {
        industries_drop.style.display = 'none';
        industries_drop.style.backgroundColor = 'transparent';
    });

    
});

