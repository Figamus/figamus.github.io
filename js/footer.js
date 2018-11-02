footer = () => {
    document.querySelector("#footer").innerHTML = `
    <div class="container">
        <ul class="list-inline mb-5">
            <li class="list-inline-item">
                <a class="social-link rounded-circle text-white mr-3" target="_blank" href="https://www.linkedin.com/in/daniel-figueroa/">
                    <i class="icon-social-linkedin"></i>
                </a>
            </li>
            
            <li class="list-inline-item">
                <a class="social-link rounded-circle text-white" target="_blank" href="https://github.com/Figamus">
                    <i class="icon-social-github"></i>
                </a>
            </li>
        </ul>
        <p class="text-muted small mb-0">Copyright &copy; Daniel Figueroa 2018</p>
    </div>`
}

module.exports = footer