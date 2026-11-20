// Available Cars
const cars = [
    {
        name: "Hyundai Creta",
        price: "₹12,00,000",
        fuel: "Petrol",
        engine: "1497 cc",
        transmission: "Manual",
        mileage: "17 km/l"
    },

    {
        name: "Kia Seltos",
        price: "₹14,00,000",
        fuel: "Diesel",
        engine: "1498 cc",
        transmission: "Automatic",
        mileage: "20 km/l"
    },

    {
        name: "Maruti Grand Vitara",
        price: "₹16,00,000",
        fuel: "Petrol",
        engine: "1462 cc",
        transmission: "Manual",
        mileage: "21 km/l"
    },

    {
        name: "Tata Nexon",
        price: "₹10,00,000",
        fuel: "Petrol",
        engine: "1199 cc",
        transmission: "Manual",
        mileage: "17 km/l"
    },

    {
        name: "Maruti Swift",
        price: "₹7,00,000",
        fuel: "Petrol",
        engine: "1197 cc",
        transmission: "Manual",
        mileage: "22 km/l"
    },

    {
        name: "Toyota Fortuner",
        price: "₹35,00,000",
        fuel: "Diesel",
        engine: "2755 cc",
        transmission: "Automatic",
        mileage: "14 km/l"
    }
];

// Store selected cars
let selectedCars = [null, null, null];

// Get elements
const carList = document.getElementById("car-list");

const comparisonBody = document.getElementById("comparison-body");

const carContainer = document.querySelector(".car-container");

// Store currently selected slot
let currentSlot = null;


// Update Comparison Table
function updateComparisonTable() {

    comparisonBody.innerHTML = `

        <tr>
            <td>Price</td>
            ${selectedCars.map(car =>
                `<td>${car ? car.price : "-"}</td>`
            ).join("")}
        </tr>

        <tr>
            <td>Fuel Type</td>
            ${selectedCars.map(car =>
                `<td>${car ? car.fuel : "-"}</td>`
            ).join("")}
        </tr>

        <tr>
            <td>Engine</td>
            ${selectedCars.map(car =>
                `<td>${car ? car.engine : "-"}</td>`
            ).join("")}
        </tr>

        <tr>
            <td>Transmission</td>
            ${selectedCars.map(car =>
                `<td>${car ? car.transmission : "-"}</td>`
            ).join("")}
        </tr>

        <tr>
            <td>Mileage</td>
            ${selectedCars.map(car =>
                `<td>${car ? car.mileage : "-"}</td>`
            ).join("")}
        </tr>

    `;

    // Update table headings
    selectedCars.forEach(function (car, index) {

        const heading = document.getElementById(`car-name-${index}`);

        heading.textContent = car ? car.name : `Car ${index + 1}`;

    });

}


// Display Available Cars
function displayAvailableCars() {

    carList.innerHTML = "";

    const availableCars = cars.filter(function (car) {

        return !selectedCars.includes(car);

    });

    if (availableCars.length === 0) {

        carList.innerHTML = `
            <p>No more cars available.</p>
        `;

        return;

    }

    availableCars.forEach(function (car) {

        const carIndex = cars.indexOf(car);

        carList.innerHTML += `

            <div class="available-car">

                <h3>${car.name}</h3>

                <p>Price: ${car.price}</p>

                <button
                    class="select-car"
                    data-index="${carIndex}">
                    Select Car
                </button>

            </div>

        `;

    });

}


// Add Car and Remove Car Events
carContainer.addEventListener("click", function (event) {

    // Add Car Button
    if (event.target.classList.contains("add-car")) {

        currentSlot = Number(event.target.dataset.slot);

        displayAvailableCars();

    }


    // Remove Car Button
    const removeButton = event.target.closest(".remove-car");

    if (removeButton) {

        const slot = Number(removeButton.dataset.slot);

        selectedCars[slot] = null;

        const carBox = document.querySelectorAll(".car-box")[slot];

        carBox.innerHTML = `

            <h3>Add ${["First", "Second", "Third"][slot]} Car</h3>

            <button class="add-car" data-slot="${slot}">
                Add Car +
            </button>

        `;

        updateComparisonTable();

        carList.innerHTML = "";

    }

});


// Select Car Event
carList.addEventListener("click", function (event) {

    if (event.target.classList.contains("select-car")) {

        const carIndex = Number(event.target.dataset.index);

        const selectedCar = cars[carIndex];

        selectedCars[currentSlot] = selectedCar;

        updateComparisonTable();

        const carBox = document.querySelectorAll(".car-box")[currentSlot];

        carBox.innerHTML = `

            <h3>${selectedCar.name}</h3>

            <p>${selectedCar.price}</p>

            <button class="add-car" data-slot="${currentSlot}">
                Change Car
            </button>

            <button class="remove-car" data-slot="${currentSlot}">
                Remove
            </button>

        `;

        carList.innerHTML = "";

    }

});


// Initial Table
updateComparisonTable();