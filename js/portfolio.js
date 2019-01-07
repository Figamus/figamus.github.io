portfolio = () => {
    document.querySelector("#portfolio").innerHTML = `
    <div class="container">
        <div class="content-section-heading text-center">
            <h2 class="mb-5">Projects</h2>
        </div>
        <div class="row">
            <div class="col-lg-6 mx-auto">
                <a class="portfolio-item" target="_blank" href="https://github.com/Figamus/sale-sleuth">
                    <img class="img-fluid" src="img/SaleSleuth1.jpg" alt="">
                </a>
                <div>
                <span class="caption">
                    <span class="caption-content">
                        <h4>Sale Sleuth</h4>
                        <p class="mb-0">Single page application, built in React. Designed to keep track of pricing history on a product. User accounts can select a product and follow the history of price changes.</p>
                    </span>
                </span>
                </div>
            </div>
            <div class="col-lg-6 mx-auto">
                <a class="portfolio-item" target="_blank" href="https://github.com/Figamus/sale-sleuth">
                    <img class="img-fluid" src="img/Bhoba1.jpg" alt="">
                </a>
                <div>
                <span class="caption">
                    <span class="caption-content">
                        <h4>BHOBA</h4>
                        <p class="mb-0">BHOBA is a C# application using ASP.NET and Entity framework. It is a digital assistant for Recovery Agents to have quick accessible information while in the field to relevant information regarding any Fugitive in violation of the terms of their bail bond</p>
                    </span>
                </span>
                </div>
            </div>
        </div>
    </div>`
}

{/*
                <div class="row no-gutters">
                <div class="col-lg-6 mx-auto">
                    <a class="portfolio-item" target="_blank" href="https://github.com/Figamus/sale-sleuth">
                        <span class="caption">
                            <span class="caption-content">
                                <h2>BHOBA</h2>
                                <p class="mb-0">BHOBA is a C# application using ASP.NET and Entity framework. It is a digital assistant for Recovery Agents to have quick accessible information while in the field to relevant information regarding any Fugitive in violation of the terms of their bail bond</p>
                            </span>
                        </span>
                        <img class="img-fluid" src="img/SaleSleuth1.jpg" alt="">
                    </a>
                </div>
            </div>

    <div class="col-lg-6 mx-auto">
                <a class="portfolio-item" href="#">
                    <span class="caption">
                        <span class="caption-content">
                            <h2>Strawberries</h2>
                            <p class="mb-0">Strawberries are such a tasty snack, especially with a little sugar on
                                top!</p>
                        </span>
                    </span>
                    <img class="img-fluid" src="img/portfolio-3.jpg" alt="">
                </a>
            </div>
            <div class="col-lg-6 mx-auto">
                <a class="portfolio-item" href="#">
                    <span class="caption">
                        <span class="caption-content">
                            <h2>Workspace</h2>
                            <p class="mb-0">A yellow workspace with some scissors, pencils, and other objects.</p>
                        </span>
                    </span>
                    <img class="img-fluid" src="img/portfolio-4.jpg" alt="">
                </a>
            </div>
            <div class="col-lg-6 mx-auto">
                    <a class="portfolio-item" href="#">
                        <span class="caption">
                            <span class="caption-content">
                                <h2>Ice Cream</h2>
                                <p class="mb-0">A dark blue background with a colored pencil, a clip, and a tiny ice
                                    cream cone!</p>
                            </span>
                        </span>
                        <img class="img-fluid" src="img/portfolio-2.jpg" alt="">
                    </a>
                </div> */}
module.exports = portfolio