header = () => {
    document.querySelector("#header").innerHTML = `
    <div class="container text-center my-auto">
        <h1 class="mb-1 text-light deepshd">Daniel Figueroa</h1>
        <h3 class="mb-5 text-light deepshd">
            <em>Software Developer</em>
        </h3>
        <a class="btn btn-primary btn-xl js-scroll-trigger" href="#links">Find Out More</a>
    </div>
    <div class="overlay"></div>`
}

module.exports = header