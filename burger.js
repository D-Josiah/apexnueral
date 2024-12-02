document.addEventListener('DOMContentLoaded', function () {
    const menuToggleBtn = document.getElementById('menu-toggle-btn');
    const sidebar = document.getElementById('sidebar');
    const sub_mega = document.getElementById('sub-mega');

    menuToggleBtn.addEventListener('click', function () {
        console.log("hello");
        // Toggle the sidebar display
        if (sidebar.style.display === 'block') {
            sidebar.style.display = 'none'; // Hide sidebar
        } else {
            sidebar.style.display = 'block'; // Show sidebar
        }
        sub_mega.style.display = 'none'; 
    });
});

document.getElementById('close_focus').addEventListener('click', function() {
    document.getElementById('mega1_b').style.display = 'none';
});

document.getElementById('close_industry').addEventListener('click', function() {
    document.getElementById('industries-drop_b').style.display = 'none';
});