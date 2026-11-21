
/* ==========================================
   AUTONEST - CAR DETAILS JAVASCRIPT
========================================== */

// GET CAR ID OR NAME FROM URL

const params = new URLSearchParams(window.location.search);

const carId = params.get("id");
const carName = params.get("name");


// NORMALIZE CAR NAMES

function normalizeCarName(name) {
    return String(name || "")
        .trim()
        .toLowerCase()
        .replace(/\s+/g, " ");
}


// FIND SELECTED CAR

let selectedCar = cars.find(function (car) {

    // SEARCH BY ID
    if (carId) {
        return String(car.id) === String(carId);
    }

    // SEARCH BY NAME
    if (carName) {

        const requestedName = normalizeCarName(carName);

        const availableNames = [
            car.fullName,
            car.name,
            car.model
        ];

        return availableNames.some(function (name) {
            return normalizeCarName(name) === requestedName;
        });

    }

    return false;

});


// DEFAULT CAR WHEN NAVBAR IS CLICKED

if (!selectedCar && !carId && !carName) {
    selectedCar = cars[0];
}


// GET HTML CONTAINER

const carDetails = document.getElementById("carDetails");


// ==========================================
// DISPLAY CAR DETAILS
// ==========================================

if (selectedCar) {

    // CAR NAME
    const displayName =
        selectedCar.fullName ||
        selectedCar.name ||
        selectedCar.model ||
        "Car";


    // CAR IMAGE
    let carImage = selectedCar.image || "";

    if (
        carImage &&
        !carImage.startsWith("http") &&
        !carImage.startsWith("../")
    ) {
        carImage = "../" + carImage;
    }


    // CAR PRICE
    const carPrice = Number(selectedCar.price) || 0;


    carDetails.innerHTML = `

        <div class="details-grid">

            <!-- CAR IMAGE -->

            <div class="details-image">

                <img
                    src="${carImage}"
                    alt="${displayName}"
                >

            </div>


            <!-- CAR INFORMATION -->

            <div class="details-content">

                <p class="car-category">
                    ${selectedCar.bodyType || "Car"}
                </p>

                <h1>${displayName}</h1>

                <p class="car-description">
                    Explore the features and specifications
                    of ${displayName}.
                </p>


                <!-- PRICING -->

                <div class="pricing-box">

                    <p>Starting Price</p>

                    <h2>
                        ${carPrice.toLocaleString("en-IN", {
                            style: "currency",
                            currency: "INR",
                            maximumFractionDigits: 0
                        })}
                    </h2>

                </div>


                <!-- CAR SPECIFICATIONS -->

                <div class="specifications">

                    <div class="spec-item">

                        <span>Fuel Type</span>

                        <h3>
                            ${selectedCar.fuel || "N/A"}
                        </h3>

                    </div>


                    <div class="spec-item">

                        <span>Transmission</span>

                        <h3>
                            ${selectedCar.transmission || "N/A"}
                        </h3>

                    </div>


                    <div class="spec-item">

                        <span>Mileage</span>

                        <h3>
                            ${selectedCar.mileage || "N/A"}
                        </h3>

                    </div>


                    <div class="spec-item">

                        <span>Engine</span>

                        <h3>
                            ${selectedCar.engine || "N/A"}
                        </h3>

                    </div>


                    <div class="spec-item">

                        <span>Seating Capacity</span>

                        <h3>
                            ${selectedCar.seating || "N/A"} Persons
                        </h3>

                    </div>


                    <div class="spec-item">

                        <span>Body Type</span>

                        <h3>
                            ${selectedCar.bodyType || "N/A"}
                        </h3>

                    </div>

                </div>


                <!-- ENQUIRY BUTTON -->

                <div class="enquiry-action">

                    <button
                        type="button"
                        id="enquiryBtn"
                        class="btn btn-primary">

                        Enquire Now

                    </button>

                </div>


                <!-- ENQUIRY FORM -->

                <form
                    id="enquiryForm"
                    class="enquiry-form"
                    hidden>

                    <h2>Car Enquiry</h2>

                    <p>
                        Interested in ${displayName}?
                        Send us your enquiry.
                    </p>


                    <input
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        required
                    >


                    <input
                        type="email"
                        placeholder="Your Email"
                        name="email"
                        required
                    >


                    <input
                        type="tel"
                        placeholder="Your Phone Number"
                        name="phone"
                        required
                    >


                    <textarea
                        placeholder="Your Message"
                        name="message"
                        rows="4"
                        required
                    ></textarea>


                    <button
                        type="submit"
                        class="btn btn-primary">

                        Submit Enquiry

                    </button>

                </form>


                <!-- ENQUIRY MESSAGE -->

                <p
                    id="enquiryMessage"
                    aria-live="polite">

                </p>

            </div>

        </div>

    `;


    // ==========================================
    // ENQUIRY FUNCTIONALITY
    // ==========================================

    const enquiryBtn =
        document.getElementById("enquiryBtn");

    const enquiryForm =
        document.getElementById("enquiryForm");


    // SHOW ENQUIRY FORM

    enquiryBtn.addEventListener("click", function () {

        enquiryForm.hidden = false;

        enquiryForm.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    });


    // SUBMIT ENQUIRY FORM

    enquiryForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const enquiryMessage =
            document.getElementById("enquiryMessage");

        enquiryMessage.textContent =
            `Thank you! Your enquiry for ${displayName} has been received.`;

        enquiryForm.hidden = true;

    });


}


// ==========================================
// CAR NOT FOUND
// ==========================================

else {

    carDetails.innerHTML = `

        <div class="car-not-found">

            <h2>Car not found!</h2>

            <a href="cars.html">
                Explore Cars
            </a>

        </div>

    `;

}
