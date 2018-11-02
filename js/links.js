links = () => {
    document.querySelector("#links").innerHTML = `
    <div class="container">
        <div class="content-section-heading">
            <h3 class="text-secondary mb-0">Links</h3>
        </div>
        <ul class="list-inline mb-5">
            <li class="list-inline-item">
                <a class="social-link rounded-circle text-white mr-3" href="https://www.linkedin.com/in/daniel-figueroa/">
                    <i class="icon-social-linkedin"></i>
                </a>
            </li>
            <li class="list-inline-item">
                <a class="social-link rounded-circle text-white" href="https://github.com/Figamus">
                    <i class="icon-social-github"></i>
                </a>
            </li>
        </ul>
    </div>`
}

module.exports = links