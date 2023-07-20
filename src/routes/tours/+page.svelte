<script>
    import TourCard from "../TourCard.svelte";
    import { tours } from "../tours";
    import { browser } from '$app/environment';
    import Calendar from "../Calendar.svelte";


    let url = 'https://fareharbor.com/embeds/script/calendar/oregonbicycleadventures/?fallback=simple&full-items=yes'

    let view = 'singleDay';

    function toggleCalendarView() {
        console.log('toggleCalendarView called')
        view = 'calendar';
    }
    function toggleSingleDayView() {
        console.log('toggleSingleDayView called')
        view = 'singleDay';
    }
    // function toggleMultiDayView() {
    //     console.log('toggleMultiDayView called')
    //     view = 'multiDay';
    // }

</script>

<div class="hero hero-sub col-12 d-flex flex-column justify-content-end">
    <div class="img-container">
        <div class="img-overlay"></div>
        <img class="img" src="./img/tours-2.jpg"/>
    </div>
    <div id="hero-tagline-container" class="d-flex justify-content-center flex-wrap p-3 pb-3 pb-md-5">
        <h1 class="hero-tagline col-12">Tours</h1>
    </div>
</div>

<section class="col-12 d-flex justify-content-center flex-wrap py-5">
    <div class="toggle-container col-12 col-md-8 px-0 d-flex justify-content-between flex-wrap mb-5">
        <div class="col-6 d-flex justify-content-center justify-content-md-center pl-3 mb-3">
            <button class="view-toggle btn {view === 'singleDay' ? 'active' : 'inactive'}" on:click={toggleSingleDayView}>By Tour</button>
        </div>
        <div class="col-6 d-flex justify-content-center justify-content-md-center pl-3 mb-3">
            <button class="view-toggle btn {view === 'calendar' ? 'active' : 'inactive'}" on:click={toggleCalendarView}>By Date</button>
        </div>
        
        <!-- <div class="col-12 col-sm-4 d-flex justify-content-start justify-content-md-center pl-3 mb-3">
            <button class="view-toggle btn {view === 'multiDay' ? 'active' : ''}" on:click={toggleMultiDayView}>MultiDay Tours</button>
        </div> -->
    </div>
    {#if view == 'calendar'}
        <div id="calendarView" class="col-12 col-md-8 px-0">
            <!-- FareHarbor calendar -->
            {#if browser}
                <Calendar {url}/>
            {/if}
            
        </div>
    {:else if view == 'singleDay'}
        <div id="singleDayView" class="col-12 col-xxl-8 px-0 d-flex justify-content-center justify-content-xl-start flex-wrap">
            <div class="filter-container">

            </div>
            {#each tours as tour}
                {#if tour.published}
                    <TourCard {tour}/>
                {/if}
            {/each}
        </div>
    <!-- {:else if view == 'multiDay'}
        <div id="multiDayView" class="col-12 col-md-8 px-0">
            {#each tours as tour}
                {#if tour.type == 'Multi Day'}
                    <TourCard {tour}/>
                {/if}
            {/each}
        </div> -->
    {/if}
    
</section>


<style>
    h1 {
        z-index: 2;
    }

    .btn.active {
        background-color: var(--color-primary);
        color: var(--color-light);
    }

    .btn.inactive {
        background-color: var(--color-light);
        color: var(--color-primary);
    }

    .btn.inactive:hover {
        background-color: var(--color-primary);
        color: var(--color-light);
        box-shadow: none;
    }

    .btn {
        outline: none;
        border: none;
    }

    /* .hero-img {
        z-index: -1;
    } */

    .hero-img {
        object-position: left;
    }


    section {
        transition: all 0.5s ease;
    }

    section > .toggle-container {
        border-bottom: 2px solid var(--color-primary);
    }

</style>