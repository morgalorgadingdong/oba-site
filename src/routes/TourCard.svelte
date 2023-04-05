<script>
    /**
	 * @type {{ }}
	 */
    export let tour;
    let imgSrc = `./img/tours/${tour.id}. ${tour.nickname}/tour${tour.id}-cover.jpg`;
    // let imgSrc = `./img/test.jpg`;
    // console.log(imgSrc)
</script>


<div class="col-12 col-md-8 col-lg-6 col-xl-4 p-3">
    <a class="col-12 trip-preview-container" href={'/tours/' + tour.title}>
        <div class="trip-preview d-flex flex-column justify-content-end py-2">
            <div class="trip-preview-img-container">
                <img src="{imgSrc}" alt="{tour.title}" class="trip-preview-img">
                <!-- <div id="tour2" class="trip-preview-img"></div> -->
            </div>
            <h4 class="px-4 py-2">{tour.title}</h4>
            <div class="trip-info-container d-none d-md-flex justify-content-between justify-content-xxl-around px-3 pb-3">
                <div class="trip-info p-1 px-2 py-md-2 px-md-3 d-flex align-items-center justify-content-center">
                    <!-- <i class="fa-solid fa-clock"></i> -->
                    <span>{tour.price}</span>
                </div>
                <div class="trip-info mx-1 p-1 px-2 py-md-2 px-md-3 d-flex align-items-center justify-content-center">
                    <!-- <i class="fa-solid fa-tachometer"></i> -->
                    <span>{tour.duration}</span>
                </div>
                <div class="trip-info p-1 px-2 py-md-2 px-md-3 d-flex align-items-center justify-content-center">
                    <!-- <i class="fa-solid fa-bicycle"></i> -->
                    {#if tour.ebikes}
                        <span>E-bikes available</span>
                    {:else}
                        <span>E-bikes not available</span>
                    {/if}
                </div>
            </div>
        </div>
        <div class="trip-info-container-mobile col-12 d-flex d-md-none justify-content-between justify-content-xxl-around px-3 pb-3">
            <div class="p-1 px-2 py-md-2 px-md-3 d-flex align-items-center justify-content-center">
                <!-- <i class="fa-solid fa-clock"></i> -->
                <span>{tour.price}</span>
            </div>
            <div class="mx-1 p-1 px-2 py-md-2 px-md-3 d-flex align-items-center justify-content-center">
                <!-- <i class="fa-solid fa-tachometer"></i> -->
                <span>{tour.duration}</span>
            </div>
            <div class="p-1 px-2 py-md-2 px-md-3 d-flex align-items-center justify-content-center">
                <!-- <i class="fa-solid fa-bicycle"></i> -->
                {#if tour.ebikes}
                    <span>E-bikes available</span>
                {:else}
                    <span>E-bikes not available</span>
                {/if}
            </div>
        </div>
    </a>
</div>


<style>
    .trip-info-container-mobile {
        color: var(--color-primary-dark);
    }
    .trip-preview-container {
        /* height: 40vh; */
        /* aspect-ratio: 1/1; */
        overflow: hidden;
        position: relative;
        padding: 0;
        z-index: 0;
        text-decoration: none;
    }

    /* .trip-preview-container h4 {
        width: 100%;
        text-align: center;
        transition: all var(--animation-duration) ease-in-out;
        color: var(--color-light);
    } */

    
    .trip-preview {
        width: 90%;
        aspect-ratio: 1/1;
        margin-left: 5%;
        margin-right: 5%;
        border-radius: 6px;
        /* padding: 1rem; */
        position: relative;
    }

    

    
    .trip-preview-img-container {
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: 6px;
        position: absolute;
        top: 0;
        left: 0;
        /* position: relative; */
        /* z-index: 2; */
    }

    .trip-preview-img {
        /* height: 40vh; */
        width: 100%;
        height: 100%;
        transition: all var(--animation-duration) ease-in-out;
        object-fit: cover;
        /* position: absolute;
        top: 0;
        left: 0; */
        /* z-index: 1; */
    }



    .trip-preview:hover .trip-preview-img, .trip-preview:focus .trip-preview-img {
        transform: scale(1.10);
        transition: all var(--animation-duration) ease-in-out;
        cursor: pointer;
    }

    .trip-preview-container h4 {
        /* position: absolute;
        left: 0;
        bottom: 15%; */
        background-color: var(--color-primary);
        color: var(--color-light);
        transition: all var(--animation-duration) ease-in-out;
        /* transform: translateY(-300%); */
        z-index: 3;
        position: relative;
        right: 1.5vw;
        /* bottom: 6vw; */
        width: fit-content;
        font-family: var(--font-hero);
    }

    .trip-info-container {
        transform: translateY(-100%);
        transition: all var(--animation-duration) ease-in-out;
        /* z-index: -1;
        width: 90%;
        margin-left: 10%; */
        opacity: 0;
        position: relative;
        /* bottom: 6vw; */
    }

    .trip-info {
        background-color: var(--color-primary);
        color: var(--color-light);
        padding: 0.5rem 0.75rem;
        height: 100%;
        /* z-index: -1; */
        
    }

    .trip-info span {
        line-height: 1rem;
    }

    .trip-preview:hover .trip-info-container, .trip-preview:focus .trip-info-container  {
        transform: translateY(0%);
        transition: all var(--animation-duration) ease-in-out;
        opacity: 1;
    }

    .trip-preview:hover h4, .trip-preview:focus h4 {
        transform: translateX(1.5vw);
        transition: all var(--animation-duration) ease-in-out; 
    }


    @media (max-width: 768px) { 
        .trip-preview .trip-info-container {
            transform: translateY(0%);
            transition: all var(--animation-duration) ease-in-out;
            opacity: 1;
        }
    }

</style>
