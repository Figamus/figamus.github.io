header = () => {
    document.querySelector("#header").innerHTML = `
    <div class="container text-center my-auto">
        <h1 class="mb-1 text-light deepshd">Daniel Figueroa</h1>
        <h3 class="mb-5 text-light deepshd">
            <em>Software Developer</em>
        </h3>
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
        </div>
        <a class="btn btn-primary btn-xl js-scroll-trigger" href="#links">Find Out More</a>
    </div>
    <div class="overlay"></div>`
}

module.exports = header