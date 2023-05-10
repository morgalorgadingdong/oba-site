<script>
    import ContactCard from '../ContactCard.svelte';
</script>

<div class="vh-60 hero col-12 d-flex flex-column justify-content-end">
    <div class="img-container">
        <div class="img-overlay"></div>
        <img class="hero-img img" src="./img/contact.jpg"/>
    </div>
    <div id="hero-tagline-container" class="d-flex justify-content-center flex-wrap p-3 pb-3 pb-md-5">
        <h1 class="hero-tagline col-12">Contact</h1>
    </div>
</div>

<section>
    <div class="content-container d-flex justify-content-center flex-wrap center text-start px-3 mb-5" id="reserveForm">
        <div class="col-12 col-md-6 pt-5 px-0">
            
            <p class="col-12 px-0">Phone: (503) 949-8766</p>
            <p class="col-12 px-0">Email: info@oregonbicycleadventures.com</p>
            <p class="col-12 px-0">Or you can use the form on this page and we'll get back to you within 24 hours!</p>
        </div>
        
        <br>
        <ContactCard/>
    </div>
</section>