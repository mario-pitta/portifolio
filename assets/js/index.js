function alertar() {
    alert('ok')
}

$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})


const btn = document.getElementById('btnCollapseNavMenu');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.add('collapsing')
    setTimeout(() => {
        navMenu.classList.toggle('show')
    }, 80)
    navMenu.classList.remove('collapsing')
})