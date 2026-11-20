
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
    }
];
// Store selected cars
let selectedCars = [null, null, null];

// Get the car list container
const carList = document.getElementById("car-list");
// Get the comparison table body
const comparisonBody = document.getElementById("comparison-body");

// Store the currently selected slot
let currentSlot = null;

// Update the comparison table
function updateComparisonTable() {

    comparisonBody.innerHTML = `

        <tr>
            <td>Price</td>
            ${selectedCars.map(car => `<td>${car ? car.price : "-"}</td>`).join("")}
        </tr>

        <tr>
            <td>Fuel Type</td>
            ${selectedCars.map(car => `<td>${car ? car.fuel : "-"}</td>`).join("")}
        </tr>

        <tr>
            <td>Engine</td>
            ${selectedCars.map(car => `<td>${car ? car.engine : "-"}</td>`).join("")}
        </tr>

        <tr>
            <td>Transmission</td>
            ${selectedCars.map(car => `<td>${car ? car.transmission : "-"}</td>`).join("")}
        </tr>

        <tr>
            <td>Mileage</td>
            ${selectedCars.map(car => `<td>${car ? car.mileage : "-"}</td>`).join("")}
        </tr>

    `;
}
// Display empty comparison table when page loads
updateComparisonTable();

// Add click event to all Add Car buttons
// Get the parent container
const carContainer = document.querySelector(".car-container");

// Handle Add Car and Change Car button clicks
carContainer.addEventListener("click", function (event) {

    if (event.target.classList.contains("add-car")) {


        // Get the selected box number
        currentSlot = Number(event.target.dataset.slot);

        // Display available cars
        carList.innerHTML = "";

        // Get cars that are not selected in other slots
        const availableCars = cars.filter(function (car) {
            return !selectedCars.includes(car);
        });

        availableCars.forEach(function (car) {

            carList.innerHTML += `
                <div class="available-car">
                    <h3>${car.name}</h3>
                    <p>Price: ${car.price}</p>

                    <button class="select-car" data-index="${cars.indexOf(car)}">
                        Select Car
                    </button>
                </div>
            `;

        });

    }
    // Handle Remove button
    const removeButton = event.target.closest(".remove-car");

    if (removeButton) {

        console.log("Remove button clicked!");

        // Get the slot number
        const slot = Number(removeButton.dataset.slot);

        // Remove the selected car from the array
        selectedCars[slot] = null;

        // Reset the car box
        const carBox = document.querySelectorAll(".car-box")[slot];

        carBox.innerHTML = `
        <h3>Add ${["First", "Second", "Third"][slot]} Car</h3>
        <button class="add-car" data-slot="${slot}">
            Add Car +
        </button>
    `;

        // Update comparison table
        updateComparisonTable();

    }

});

// Select a car from the available list
carList.addEventListener("click", function (event) {

    if (event.target.classList.contains("select-car")) {

        // Get the selected car index
        const carIndex = Number(event.target.dataset.index);

        // Get the selected car details
        const selectedCar = cars[carIndex];

        // Store the selected car
        selectedCars[currentSlot] = selectedCar;

        // Update the comparison table
        updateComparisonTable();

        // Find the corresponding car box
        const carBox = document.querySelectorAll(".car-box")[currentSlot];

        // Display selected car details
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

        // Close the available car list
        carList.innerHTML = "";

    }

});


