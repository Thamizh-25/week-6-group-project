// Get all car cards
const carCards = document.querySelectorAll(".car-card");

// Search and filter cars
function filterCars() {

    const search = document.getElementById("searchInput").value.toLowerCase();

    const type = document.getElementById("typeFilter").value;

    const brand = document.getElementById("brandFilter").value;

    const fuel = document.getElementById("fuelFilter").value;

    const price = document.getElementById("priceFilter").value;

    let visibleCars = 0;

    carCards.forEach(function(car) {

        const name = car.dataset.name.toLowerCase();
        const carType = car.dataset.type;
        const carBrand = car.dataset.brand;
        const carFuel = car.dataset.fuel;
        const carPrice = Number(car.dataset.price);

        let showCar = true;

        if (!name.includes(search)) {
            showCar = false;
        }

        if (type !== "" && carType !== type) {
            showCar = false;
        }

        if (brand !== "" && carBrand !== brand) {
            showCar = false;
        }

        if (fuel !== "" && carFuel !== fuel) {
            showCar = false;
        }

        if (price === "above100" && carPrice <= 100) {
            showCar = false;
        } 
        else if (price !== "" && price !== "above100" && carPrice >= Number(price)) {
            showCar = false;
        }

        if (showCar) {
            car.style.display = "block";
            visibleCars++;
        } else {
            car.style.display = "none";
        }

    });

    // No cars message
    const noCars = document.getElementById("noCars");

    if (visibleCars === 0) {
        noCars.innerText = "Sorry! No cars found.";
    } else {
        noCars.innerText = "";
    }
}


// Reset all filters
function resetFilters() {

    document.getElementById("searchInput").value = "";
    document.getElementById("typeFilter").value = "";
    document.getElementById("brandFilter").value = "";
    document.getElementById("fuelFilter").value = "";
    document.getElementById("priceFilter").value = "";

    carCards.forEach(function(car) {
        car.style.display = "block";
    });

    document.getElementById("noCars").innerText = "";
}


// View Details button
function viewDetails(carName) {
    alert("You selected " + carName);
}