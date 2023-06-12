<footer id="footer" class="col-12 vh-50 d-flex align-content-center pt-5 pb-3">
    <div class="col-12 d-flex justify-content-between align-content-center align-items-center flex-wrap py-5">
        <div class="col-12 col-md-3 px-0 order-md-2 d-flex justify-content-center flex-wrap">
            <a href="/" class="img-container col-10">
                <img class="img" src="/img/OBA_PrimaryLogo_WhiteType.png" alt="Oregon Bicycle Adventures Logo"/>
            </a>
            <!-- <h4 class="font-hero text-center py-3">Oregon Bicycle Adventures LLC</h4> -->
        </div>
        <div class="col-12 col-md-3 px-0 order-md-1 d-flex align-content-center flex-wrap py-3">
            <p class="col-12">Oregon Bicycle Adventures, LLC</p>
            <p class="col-12">info@oregonbicycleadventures.com</p>
            <p class="col-12">(503) 949-8766</p>
            <p class="col-12">Bend, Oregon</p>
        </div>
        <div class="col-12 col-md-3 px-0 pt-3 order-md-3 d-flex align-content-center flex-wrap justify-content-around">
            <i class="fa-brands fa-instagram" onclick="location.href='https://www.instagram.com/oregonbicycleadventures/';" style="cursor: pointer;"></i>
            <i class="fa-brands fa-facebook" onclick="location.href='https://www.facebook.com/profile.php?id=100092429499374';" style="cursor: pointer;"></i>
            <i class="fa-solid fa-envelope" onclick="location.href='/contact';" style="cursor: pointer;"></i>
        </div>
    </div>
</footer>


<style>
    footer, footer > .col-12 {
        height: fit-content;
    }
    
    footer {
        border-bottom: solid 20px var(--color-dark);
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
        background-color: var(--color-primary);
        /* background-color: black; */
    }

    footer p, footer i, footer h4 {
        color: var(--color-light);
    }

</style>