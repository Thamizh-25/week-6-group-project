
/* ========================================
   AUTONEST - COMMON CAR DATABASE
   ======================================== */

const cars = [
    {
        id: 1,
        brand: "Tata",
        name: "Nexon",
        fullName: "Tata Nexon",
        price: 850000,
        fuel: "Petrol",
        transmission: "Manual",
        mileage: "17.4 km/l",
        engine: "1199 cc",
        seating: 5,
        bodyType: "SUV",
        image: "assets/images/nexon.jpg"
    },
    {
        id: 2,
        brand: "Hyundai",
        name: "Creta",
        fullName: "Hyundai Creta",
        price: 1100000,
        fuel: "Petrol",
        transmission: "Automatic",
        mileage: "17.4 km/l",
        engine: "1497 cc",
        seating: 5,
        bodyType: "SUV",
        image: "assets/images/creta.jpg"
    },
    {
        id: 3,
        brand: "Maruti Suzuki",
        name: "Swift",
        fullName: "Maruti Suzuki Swift",
        price: 650000,
        fuel: "Petrol",
        transmission: "Manual",
        mileage: "24.8 km/l",
        engine: "1197 cc",
        seating: 5,
        bodyType: "Hatchback",
        image: "assets/images/swift.jpg"
    },
    {
        id: 4,
        brand: "Mahindra",
        name: "Thar",
        fullName: "Mahindra Thar",
        price: 1100000,
        fuel: "Diesel",
        transmission: "Manual",
        mileage: "15.2 km/l",
        engine: "1497 cc",
        seating: 4,
        bodyType: "SUV",
        image: "assets/images/thar.jpg"
    },
    {
        id: 5,
        brand: "Kia",
        name: "Seltos",
        fullName: "Kia Seltos",
        price: 1050000,
        fuel: "Petrol",
        transmission: "Automatic",
        mileage: "17.7 km/l",
        engine: "1497 cc",
        seating: 5,
        bodyType: "SUV",
        image: "assets/images/seltos.jpg"
    },
    {
        id: 6,
        brand: "Toyota",
        name: "Fortuner",
        fullName: "Toyota Fortuner",
        price: 3350000,
        fuel: "Diesel",
        transmission: "Automatic",
        mileage: "14.4 km/l",
        engine: "2755 cc",
        seating: 7,
        bodyType: "SUV",
        image: "assets/images/fortuner.jpg"
    }
];

/* ========================================
   COMMON LOCAL STORAGE KEYS
   ======================================== */

const STORAGE_KEYS = {
    wishlist: "autonest_wishlist",
    compare: "autonest_compare"
};

/* ========================================
   COMMON STORAGE FUNCTIONS
   ======================================== */

function getStoredData(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}

function saveStoredData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}
