// Get the car ID from the URL

const params = new URLSearchParams(window.location.search);

const carId = params.get("id");

// Find the selected car from existing cars array

const selectedCar = cars.find(function(car) {
    return car.id == carId;
});

// Set HTML Conatiner

const carDetails = document.getElementById("carDetails") 

//DISPLAY CAR DETAILS

if (selectedCar) {

    carDetails.innerHTML = `

    <div class="details-grid">
    
    <!--CAR IMAGE-->
    <div class="details-image">

        <img src="../${selectedCar.image}"
        alt="${selectedCar.fullName}">
            </div>

        <!--CAR INFORMATION-->
        <div class="details-content">
            <p class="car-category">
                ${selectedCar.bodyType}
                </p>
                <h1>${selectedCar.fullName}</h1>

                <p class="car-description">
                    Explore the features and specifications of ${selectedCar.fullName}.
                    </p>

                    <!--PRICING-->
                    <div class="pricing-box">

                    <p>Starting Price</p>

                    <h2>
                        ${selectedCar.price.toLocaleString("en-IN", {
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
                        <h3>${selectedCar.fuel}</h3>
                    </div>

                    <div class="spec-item">
                        <span>Transmission</span>
                        <h3>${selectedCar.transmission}</h3>
                    </div>

                    <div class="spec-item">
                        <span>Mileage</span>
                        <h3>${selectedCar.mileage}</h3>
                    </div>

                    <div class="spec-item">
                        <span>Engine</span>
                        <h3>${selectedCar.engine}</h3>
                    </div>

                    <div class="spec-item">
                        <span>Seating Capacity</span>
                        <h3>${selectedCar.seating} Persons</h3>
                    </div>

                    <div class="spec-item">
                        <span>Body Type</span>
                        <h3>${selectedCar.bodyType}</h3>
                    </div>

    
                     </div>

                <!-- ENQUIRY BUTTON -->
                <div class="enquiry-action">
                    <button type="button" id="enquiryBtn" class="btn btn-primary">
                        Enquire Now
                    </button>
                </div>

                <!-- ENQUIRY FORM -->
                <form id="enquiryForm" class="enquiry-form" hidden>

                    <h2>Car Enquiry</h2>

                    <p>Interested in ${selectedCar.fullName}? Send us your enquiry.</p>

                    <input type="text"
                        placeholder="Your Name"
                        name="name"
                        required>

                    <input type="email"
                        placeholder="Your Email"
                        name="email"
                        required>

                    <input type="number"
                        placeholder="Your Phone Number"
                        name="phone"
                        required>

                    <textarea
                        placeholder="Your Message"
                        name="message"
                        rows="4"
                        required></textarea>

                    <button type="submit" class="btn btn-primary">
                        Submit Enquiry
                    </button>

                  

                </form>
                  <p id="enquiryMessage" aria-live="polite"></p>

            </div>

        </div>

    `;

     // GET ENQUIRY ELEMENTS

    const enquiryBtn = document.getElementById("enquiryBtn");

    const enquiryForm = document.getElementById("enquiryForm");


    // SHOW ENQUIRY FORM

    enquiryBtn.addEventListener("click", function() {

        enquiryForm.hidden = false;

        enquiryForm.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    });


// SUBMIT ENQUIRY FORM

enquiryForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const enquiryMessage = document.getElementById("enquiryMessage");

    enquiryMessage.textContent =
        `Thank you! Your enquiry for ${selectedCar.fullName} has been received.`;

    enquiryForm.hidden = true;

});

} else {

    carDetails.innerHTML = `
        <h2>Car not found!</h2>
        <a href="../pages/cars.html">Explore Cars</a>
    `;

}


     