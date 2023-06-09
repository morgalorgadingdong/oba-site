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
        <div class="trip-preview d-flex flex-column justify-content-end py-0 mx-3">
            <div class="trip-preview-img-container">
                <img src="{imgSrc}" alt="{tour.title}" class="trip-preview-img">
                <!-- <div id="tour2" class="trip-preview-img"></div> -->
            </div>
            <h4 id="tour-title-desktop" class="px-4 py-2">{tour.title}</h4>
            
            <div class="trip-info-container d-none d-md-flex justify-content-start justify-content-xxl-around px-3 pb-3">
                
                {#if tour.price}
                <div class="trip-info p-1 px-2 py-md-2 px-md-3 d-flex align-items-center justify-content-center">
                    <!-- <i class="fa-solid fa-clock"></i> -->
                    <span>{tour.price}</span>
                </div>
                {:else}
                <div class="trip-info blank p-1 px-2 py-md-2 px-md-3 d-flex align-items-center justify-content-center">
                    <!-- <i class="fa-solid fa-clock"></i> -->
                    <span>filler</span>
                </div>
                {/if}
                {#if tour.duration}
                <div class="trip-info mx-1 p-1 px-2 py-md-2 px-md-3 d-flex align-items-center justify-content-center">
                    <!-- <i class="fa-solid fa-tachometer"></i> -->
                    <span>{tour.duration}</span>
                </div>
                {/if}
                {#if tour.difficultyRating}
                <div class="trip-info p-1 px-2 py-md-2 px-md-3 d-flex align-items-center justify-content-center">
                    <!-- <i class="fa-solid fa-bicycle"></i> -->
                    <span>Difficulty (1-5): {tour.difficultyRating}</span>
                    <!-- {#if tour.available}
                        <span>E-bikes available</span>
                    {:else}
                        <span>E-bikes not available</span>
                    {/if} -->
                </div>
                {/if}
                
                
                
            </div>
            
        </div>
        <div class="trip-info-container-mobile d-flex d-md-none justify-content-between flex-wrap justify-content-xxl-around mx-3 px-0">
            <h4 id="tour-title-mobile" class="py-2 col-12 mb-0">{tour.title}</h4>
            <!-- <div class="px-3">
                <p>{tour.price}</p>
                <p>{tour.duration}</p>
                <p>Difficulty (1-5): {tour.difficultyRating}</p>
            </div> -->
            
            {#if tour.price}
            <div class="divider mx-3"></div>
            <div class="p-1 px-3 py-md-2 px-md-3 d-flex align-items-center justify-content-center">

                <span>{tour.price}</span>
            </div>
            <div class="mx-1 p-1 px-2 py-md-2 px-md-3 d-flex align-items-center justify-content-center">

                <span>{tour.duration}</span>
            </div>
            <div class="p-1 px-2 py-md-2 px-md-3 d-flex align-items-center justify-content-center">
                <span>Difficulty (1-5): {tour.difficultyRating}</span>
            </div>
            {/if}
        </div>
    </a>
</div>


<style>
    .divider {
        width: 100%;
        height: 1px;
        background-color: lightgray;
    }
    .trip-info-container-mobile {
        color: var(--color-primary-dark);
        border-radius: 0 0 6px 6px;
        border: solid 2px lightgray;
        border-top: none;
        /* border-top: 5px solid var(--color-primary); */
    }

    .blank {
        opacity: 0;
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
        /* width: 90%; */
        aspect-ratio: 1/1;
        /* margin-left: 5%;
        margin-right: 5%; */
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
        
        transition: all var(--animation-duration) ease-in-out;
        /* transform: translateY(-300%); */
        z-index: 3;
        position: relative;
        /* right: 1.5vw; */
        /* bottom: 6vw; */
        width: fit-content;
        font-family: var(--font-header);
    }

    #tour-title-desktop {
        background-color: var(--color-primary);
        color: var(--color-light);
    }

    @media (min-width: 768px) {
        .trip-preview-container h4 {
            /* bottom: 15%; */
            right: 1.5vw;
        }
        .trip-preview:hover h4, .trip-preview:focus h4 {
        transform: translateX(1.5vw);
        transition: all var(--animation-duration) ease-in-out; 
        }
        #tour-title-mobile {
            display: none;
        }
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

    


    @media (max-width: 768px) { 
        .trip-preview .trip-info-container {
            transform: translateY(0%);
            transition: all var(--animation-duration) ease-in-out;
            opacity: 1;
        }

        #tour-title-desktop {
            display: none;
        }

        .trip-preview-img-container {
            border-radius: 6px 6px 0 0;
            border-bottom: solid 5px var(--color-primary);
        }

    }

</style>
