
/* ========================================
   AUTONEST - COMMON JAVASCRIPT
   ======================================== */

/* 1. GET WISHLIST */
function getWishlist() {
    return getStoredData(STORAGE_KEYS.wishlist);
}

/* 2. ADD TO WISHLIST */
function addToWishlist(carId) {
    const wishlist = getWishlist();

    if (!wishlist.includes(carId)) {
        wishlist.push(carId);
        saveStoredData(STORAGE_KEYS.wishlist, wishlist);
        return true;
    }

    return false;
}

/* 3. REMOVE FROM WISHLIST */
function removeFromWishlist(carId) {
    const wishlist = getWishlist();
    const updatedWishlist = wishlist.filter(id => id !== carId);

    saveStoredData(STORAGE_KEYS.wishlist, updatedWishlist);
}

/* 4. GET COMPARE LIST */
function getCompareList() {
    return getStoredData(STORAGE_KEYS.compare);
}

/* 5. ADD TO COMPARE */
function addToCompare(carId) {
    const compareList = getCompareList();

    if (compareList.includes(carId)) {
        return "already-added";
    }

    if (compareList.length >= 3) {
        return "limit-reached";
    }

    compareList.push(carId);
    saveStoredData(STORAGE_KEYS.compare, compareList);

    return "success";
}

/* 6. REMOVE FROM COMPARE */
function removeFromCompare(carId) {
    const compareList = getCompareList();
    const updatedList = compareList.filter(id => id !== carId);

    saveStoredData(STORAGE_KEYS.compare, updatedList);
}

/* 7. GET CAR BY ID */
function getCarById(carId) {
    return cars.find(car => car.id === Number(carId));
}

/* 8. FORMAT PRICE */
function formatPrice(price) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0
    }).format(price);
}

/* ========================================
   AUTONEST - HOME PAGE FEATURED CARS
   ======================================== */

const featuredCarsContainer = document.getElementById("featuredCars");

if (featuredCarsContainer) {

    const featuredCars = cars.slice(0, 3);

    featuredCarsContainer.innerHTML = featuredCars.map(car => `
        <div class="car-card">

            <div class="car-card-image">
                <img src="${car.image}" alt="${car.fullName}"
                     onerror="this.onerror=null;this.src='https://placehold.co/600x400?text=Car+Image'">
            </div>

            <div class="car-card-content">

                <h3>${car.fullName}</h3>

                <p class="car-brand">${car.bodyType}</p>

                <div class="car-price">
                    ${formatPrice(car.price)}
                </div>

                <div class="car-specs">
                    <span>${car.fuel}</span>
                    <span>${car.transmission}</span>
                    <span>${car.mileage}</span>
                </div>

                <div class="car-card-actions">

                    <a href="pages/car-details.html?id=${car.id}"
                       class="btn btn-primary">
                        View Details
                    </a>

                    <button class="btn btn-secondary"
                            onclick="handleWishlist(${car.id}, this)">
                        ♡ Wishlist
                    </button>

                </div>

            </div>

        </div>
    `).join("");

}


/* ========================================
   WISHLIST BUTTON FUNCTIONALITY
   ======================================== */

function handleWishlist(carId, button) {

    const added = addToWishlist(carId);

    if (added) {
        button.textContent = "♥ Added";
    } else {
        removeFromWishlist(carId);
        button.textContent = "♡ Wishlist";
    }

}
