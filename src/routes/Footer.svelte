<footer class="col-12 vh-50 d-flex align-content-center py-5">
    <div class="col-12 d-flex justify-content-between align-content-center align-items-center py-5">
        <div class="col-2 col-md-3 px-0 order-md-2">
            <div class="img-container">
                <img class="img" src="/img/logo-6.png" />
            </div>
        </div>
        <div class="col-7 col-md-3 px-0 order-md-1 d-flex align-content-center flex-wrap">
            <p>Oregon Bicycle Adventures</p>
            <!-- <p>Name</p> -->
            <p>info@oregonbicycleadventures.com</p>
            <p>(503) 949-8766</p>
        </div>
        <div class="col-2 col-md-3 px-0 order-md-3 d-flex align-content-center flex-wrap justify-content-around">
            <i class="fa-brands fa-instagram" onclick="location.href='';" style="cursor: pointer;"></i>
            <i class="fa-brands fa-facebook" onclick="location.href='';" style="cursor: pointer;"></i>
            <i class="fa-solid fa-envelope" onclick="location.href='/contact';" style="cursor: pointer;"></i>
        </div>
    </div>
</footer>


<style>
    footer, footer > .col-12 {
        height: fit-content;
    }
    
    
    i {
        font-size: 1.5rem;
        color: var(black);
    }

    .img-container {
        box-shadow: none;
        width: 100%;
    }


    footer {
        background-color: var(--color-dark);
    }

    footer p, footer i {
        color: var(--color-light);
    }

</style>