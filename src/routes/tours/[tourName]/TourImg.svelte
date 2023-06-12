<script>
    // @ts-nocheck
    
        /**
         * @type {{ }}
         */
        export let tour;
        export let picIndex;
        
        let imgSrc
        function renderPicture(listing) {
            imgSrc = `../../img/tours/${tour.id}. ${tour.nickname}/tour${tour.id}-${picIndex}.jpg`;
            return imgSrc
        }
        // let imgSrc = `./img/test.jpg`;
        // console.log(imgSrc)
    </script>

<div class="tour-pic d-flex align-items-center">
    <img src={renderPicture(tour)} class="" alt="{tour.picAlts[picIndex]}"/>
</div>


<style>
    .tour-pic img {
        width: 100%;
        aspect-ratio: 3/2;
        max-height: 80vh;
        object-fit: cover;
        object-position: center;
        
    }
</style>