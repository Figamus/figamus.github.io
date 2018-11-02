about = () => {
    document.querySelector("#about").innerHTML = `
    <div class="container text-center">
    <img class="rounded-circle profile-image" src="./img/temp-image.jpg" alt="Profile Image" width="300" height="300"></img>
        <div class="row">
            <div class="col-lg-10 mx-auto">
                <h2>About Me</h2>
                <p class="lead mb-5">Since 2005 I've been involved in the graphic design field. I've utilized the skills acquired during my education to produce a variety of products for both print and web. In 2010, I transitioned into an opportunity to be involved in the emerging 3D imaging and 3D printing industry, allowing me to learn new skills and having more input on company wide decisions. I continue to maintain a practice at Graphic Design, but decided to transition into a development environment, having discovered a passion for it. I pursued an education in an environment that fostered my passion.</p>
                <a class="btn btn-primary btn-xl js-scroll-trigger" href="#services">Skills</a>
            </div>
        </div>
    </div>`
}

module.exports = about