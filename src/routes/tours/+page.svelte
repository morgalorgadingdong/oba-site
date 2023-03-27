<script>
    import TourCard from "../TourCard.svelte";
    import { tours } from "../tours";
    
    
    let view = 'calendar';

    function toggleCalendarView() {
        console.log('toggleCalendarView called')
        view = 'calendar';
    }
    function toggleSingleDayView() {
        console.log('toggleSingleDayView called')
        view = 'singleDay';
    }
    function toggleMultiDayView() {
        console.log('toggleMultiDayView called')
        view = 'multiDay';
    }
</script>

<div class="vh-60 hero col-12 d-flex flex-column justify-content-end">
    <div class="img-container">
        <div class="img-overlay"></div>
        <img class="hero-img img" src="./img/tours-2.jpg"/>
    </div>
    <div id="hero-tagline-container" class="d-flex justify-content-center flex-wrap p-3 pb-3 pb-md-5">
        <h1 class="hero-tagline col-12">Tours</h1>
    </div>
</div>

<section class="col-12 d-flex justify-content-center flex-wrap my-5">
    <div class="col-12 col-md-8 px-0 d-flex justify-content-between flex-wrap">
        <div class="col-12 col-sm-4 d-flex justify-content-start justify-content-md-center pl-3 mb-3">
            <button class="view-toggle btn {view === 'calendar' ? 'active' : ''}" on:click={toggleCalendarView}>Calendar view</button>
        </div>
        <div class="col-12 col-sm-4 d-flex justify-content-start justify-content-md-center pl-3 mb-3">
            <button class="view-toggle btn {view === 'singleDay' ? 'active' : ''}" on:click={toggleSingleDayView}>Single Day Tours</button>
        </div>
        <div class="col-12 col-sm-4 d-flex justify-content-start justify-content-md-center pl-3 mb-3">
            <button class="view-toggle btn {view === 'multiDay' ? 'active' : ''}" on:click={toggleMultiDayView}>MultiDay Tours</button>
        </div>
    </div>
    {#if view == 'calendar'}
        <div id="calendarView" class="col-12 col-md-8 px-0">
            <h3>This is where the Calender will go</h3>
        </div>
    {:else if view == 'singleDay'}
        <div id="singleDayView" class="col-12 col-md-8 px-0 d-flex justify-content-between flex-wrap">
            {#each tours as tour}
                {#if tour.type == 'Single Day'}
                    <TourCard {tour}/>
                {/if}
            {/each}
        </div>
    {:else if view == 'multiDay'}
        <div id="multiDayView" class="col-12 col-md-8 px-0">
            {#each tours as tour}
                {#if tour.type == 'Multi Day'}
                    <TourCard {tour}/>
                {/if}
            {/each}
        </div>
    {/if}
    
</section>


<style>
    h1 {
        font-family: var(--font-hero);
        z-index: 2;
    }

    .btn.active {
        background-color: var(--color-primary);
        color: var(--color-light);
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

</style>