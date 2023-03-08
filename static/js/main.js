

function goToAbout() {
    document.getElementById("home").classList.remove("active");
    document.getElementById("about").classList.add("active");
    console.log("clicked");
}

function goToHome() {
    document.getElementById("home").classList.add("active");
    document.getElementById("about").classList.remove("active");
}

function toggleFilterMenu() {
    console.log("clicked");
    let filter = document.getElementById("blog-filter-container");
    if (filter.classList.contains("active")) {
        filter.classList.remove("active");
    } else {
        filter.classList.add("active");
    }
}

// let activeFilters = []
// let filterAll = true

// function updateFilters(category) {
//     let targetedFilter = document.getElementById(category)
//     document.getElementById('all').checked = false
//     filterAll = false
//     if (targetedFilter.checked) {
//         activeFilters.push(category)   
//     } else {
//         activeFilters.splice(activeFilters.indexOf(category), 1)
//         if (activeFilters.length < 1) {
//             document.getElementById('all').checked = true
//             filterAll = true
//         }
//     }
    
     
// }

// function toggleFilterAll(e) {
//     e.target.checked = true
//     let filterToggleBtns = document.getElementsByClassName('filterCheckBox')
//     for (let i = 0; i < filterToggleBtns.length; i++) {
//         filterToggleBtns[i].checked = false;
//     }
// }