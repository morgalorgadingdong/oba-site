<div class="hero hero-sub col-12 d-flex flex-column justify-content-end">
    <div class="img-container">
        <div class="img-overlay"></div>
        <img class="img" src="./img/carl-and-morgan.jpg"/>
    </div>
    <div id="hero-tagline-container" class="d-flex justify-content-center flex-wrap p-3 pb-3 pb-md-5">
        <h1 class="hero-tagline col-12">About</h1>
    </div>
</div>



<section id="about-intro" class="col-12 d-flex justify-content-center flex-wrap py-5">
    <!-- <h2>Our story</h2> -->
    <div class="col-12 d-flex justify-content-center">
        <img src="./img/OBA_Icon.png" alt="Oregon Bicycle Adventures Icon" class="icon">
        <p class="py-0 my-0 col-12 col-md-10 col-lg-8 col-xl-6">Oregon Bicycle Adventures is a locally owned and operated bicycle tour company founded by friends Carl and Morgan. Our passion for cycling and exploring Oregon's diverse landscapes is at the heart of every tour we offer.</p>
        
    </div>
</section>

<section id="mission-section" class="col-12 d-flex justify-content-center flex-wrap py-5 mb-5">
    <!-- <h2>Our story</h2> -->
    <div class="col-12 col-md-10 col-lg-8 col-xl-6">
        <h2>Our Mission</h2>
        <p id="mission-statement" class="pl-3">To deliver unforgettable tours that reveal <b>Oregon's captivating beauty</b>, while spreading the <b>inspiration and growth</b> that traveling by bicycle uniquely provides.</p>

    </div>
</section>

<section class="col-12 d-flex justify-content-center flex-wrap py-5 px-3 px-lg-5">
    <h2>Get to know us</h2>
    
    <div class="col-12 d-flex justify-content-between flex-wrap align-items-center mb-5">
        <div class="col-12 col-lg-4 py-3 px-0">
            <img src="./img/carl.jpg" alt="Carl" class="img vh-50">
        </div>
        <div class="col-12 col-lg-8 py-3 px-0 px-md-5 d-flex align-items-center flex-wrap">
            <h3 class="col-12 px-0">Carl</h3>
            <p class="col-12 px-0">Co-owner and guide</p>
            <p>Carl has always been passionate about providing memorable experiences for others. His first venture began in 2016 with a winery tour company, where he discovered the joy of creating unique and enjoyable outings for his clients. After moving to Oregon in 2017, Carl quickly embraced the outdoor lifestyle, and the state's natural beauty became an integral part of his life. His enthusiasm, expertise, and dedication to curating exceptional adventures make him an invaluable member of our team, ensuring that each cycling tour is enjoyable and remarkable for our guests.</p>
            <!-- <ul>
                <li>Never cried in a movie (self proclaimed)</li>
                <li>US History buff</li>
                <li>Regular buff</li>
                <li>Once ran a marathon, alone on a track, without any training because someone told him he couldn't</li>
                <li>Voted "Best Personality" in high school</li>
                <li>Loves Carhartt but hates being "that guy" in all carhartt, so he cuts the patch off of all his Carhartt gear</li>
            </ul> -->
        </div>
    </div>
    <div class="col-12 d-flex justify-content-between flex-wrap align-items-center mb-5">
        <div class="col-12 col-lg-4 py-3 px-0">
            <img src="./img/morgan.jpg" alt="Morgan" class="img vh-50">
        </div>
        <div class="col-12 col-lg-8 py-3 px-0 px-md-5 d-flex align-items-center flex-wrap">
            <h3 class="col-12 px-0">Morgan</h3>
            <p class="col-12 px-0">Co-owner and guide</p>
            <p>Morgan, an Oregon native, has spent his life exploring the state's captivating landscape. From childhood camping trips to adult adventures, he knows Oregon like the back of his hand. In 2021, he made a bold decision to leave his career as a mechanical engineer and pursue his dream of biking across the country. This journey not only ignited a passion for cycling but also deepened his love for his home state. Morgan's extensive knowledge of Oregon and his commitment to cycling allow him to create authentic, engaging experiences for our guests.</p>
            <!-- <ul>
                <li>Hometown: Salem,  Oregon</li>
                <li>Favorite trail snack: Peanut butter and nutella tortilla wrap</li>
                <li>Favorite post ride treat: </li>
                <li>Favorite Oregon Ride: Mckenzie Pass</li>
                <li>A hobby (besides biking): </li>
                <li>Secret talent: My excel vba skills are out of control</li>
                <li>A song: Jersey Giant by Tyler Childers</li>
                <li>A book: Tribe by Sebastian Junger</li>
                <li>A movie: Dune</li>
                <li>A quote: "The mystery of life isn't a problem to solve, but a reality to experience" Frank Herbert</li>
                <li>A fun fact: </li>
            </ul> -->
        </div>
        
    </div>
</section>

<style>
    #mission-section {
        background-color: var(--color-primary);
        color: white;
    }

    #mission-statement {
        font-size: 1.5rem;
        font-style: italic;
    }

    @media (min-width: 768px) {
        p {
        font-size: 1.3rem;
        }
    }

    b {
        color: var(--color-highlight);
    }

    .icon-img {
        margin: 0 auto;
        display: block;
    }
    
    #about-intro {
        overflow: hidden;
    }

    #about-intro > div {
        position: relative;
        
    }

    #about-intro > div > img.icon {
        position: absolute;
        bottom: 0%;
        left: 0;
        transform: translate(-10%, 30%);
        font-size: 1.5rem;
        font-style: italic;
        width: 60%;
        max-width: 500px;
        opacity: 0.7;
    }
</style>