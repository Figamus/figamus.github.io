navbar = () => {
    document.querySelector("#sidebar-wrapper").innerHTML = `
    <ul class="sidebar-nav">
        <li class="sidebar-brand">
            <p class="text-white">Navigation</p>
        </li>
        <li class="sidebar-nav-item">
            <a class="js-scroll-trigger" href="#page-top">Daniel Figueroa</a>
        </li>
        <li class="sidebar-nav-item">
            <a class="js-scroll-trigger" href="#about">About</a>
        </li>
        <li class="sidebar-nav-item">
            <a class="js-scroll-trigger" href="#services">Skills</a>
        </li>
        <li class="sidebar-nav-item">
            <a class="js-scroll-trigger" href="#portfolio">Portfolio</a>
        </li>
    </ul>`
}

module.exports = navbar