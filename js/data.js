/* ========================================
   AUTONEST - COMMON CAR DATABASE
======================================== */

const cars = [
    // 1. Honda City
    {
        id: 1,
        brand: "Honda",
        name: "City",
        fullName: "Honda City",
        price: 1200000,
        fuel: "Petrol",
        transmission: "Manual",
        mileage: "17.8 km/l",
        engine: "1498 cc",
        seating: 5,
        bodyType: "Sedan",
        image: "assets/images/honda city.jpeg"
    },

    // 2. Hyundai Verna
    {
        id: 2,
        brand: "Hyundai",
        name: "Verna",
        fullName: "Hyundai Verna",
        price: 1300000,
        fuel: "Petrol",
        transmission: "Automatic",
        mileage: "18.6 km/l",
        engine: "1497 cc",
        seating: 5,
        bodyType: "Sedan",
        image: "assets/images/hyundai verna.jpeg"
    },

    // 3. Tata Nexon
    {
        id: 3,
        brand: "Tata",
        name: "Nexon",
        fullName: "Tata Nexon",
        price: 900000,
        fuel: "Petrol",
        transmission: "Manual",
        mileage: "17.4 km/l",
        engine: "1199 cc",
        seating: 5,
        bodyType: "SUV",
        image: "assets/images/Tata Nexon.jpeg"
    },

    // 4. Mahindra XUV700
    {
        id: 4,
        brand: "Mahindra",
        name: "XUV700",
        fullName: "Mahindra XUV700",
        price: 1800000,
        fuel: "Diesel",
        transmission: "Manual",
        mileage: "17 km/l",
        engine: "2198 cc",
        seating: 7,
        bodyType: "SUV",
        image: "assets/images/mahindra.jpeg"
    },

    // 5. Hyundai Creta
    {
        id: 5,
        brand: "Hyundai",
        name: "Creta",
        fullName: "Hyundai Creta",
        price: 1200000,
        fuel: "Petrol",
        transmission: "Automatic",
        mileage: "17.4 km/l",
        engine: "1497 cc",
        seating: 5,
        bodyType: "SUV",
        image: "assets/images/hyundai creta.jpeg"
    },

    // 6. Mercedes-Benz S-Class
    {
        id: 6,
        brand: "Mercedes",
        name: "S-Class",
        fullName: "Mercedes-Benz S-Class",
        price: 18000000,
        fuel: "Petrol",
        transmission: "Automatic",
        mileage: "12 km/l",
        engine: "2999 cc",
        seating: 5,
        bodyType: "Luxury",
        image: "assets/images/benz.jpeg"
    },

    // 7. BMW 7 Series
    {
        id: 7,
        brand: "BMW",
        name: "7 Series",
        fullName: "BMW 7 Series",
        price: 18500000,
        fuel: "Petrol",
        transmission: "Automatic",
        mileage: "12 km/l",
        engine: "2998 cc",
        seating: 5,
        bodyType: "Luxury",
        image: "assets/images/bmw7.jpeg"
    },

    // 8. Porsche 911
    {
        id: 8,
        brand: "Porsche",
        name: "911",
        fullName: "Porsche 911",
        price: 29000000,
        fuel: "Petrol",
        transmission: "Automatic",
        mileage: "9 km/l",
        engine: "2981 cc",
        seating: 4,
        bodyType: "Sports",
        image: "assets/images/911.jpeg"
    },

    // 9. Ford Mustang GT
    {
        id: 9,
        brand: "Ford",
        name: "Mustang GT",
        fullName: "Ford Mustang GT",
        price: 7500000,
        fuel: "Petrol",
        transmission: "Automatic",
        mileage: "7 km/l",
        engine: "5038 cc",
        seating: 4,
        bodyType: "Sports",
        image: "assets/images/ford.jpeg"
    },

    // 10. Lamborghini Huracan
    {
        id: 10,
        brand: "Lamborghini",
        name: "Huracan",
        fullName: "Lamborghini Huracan",
        price: 49900000,
        fuel: "Petrol",
        transmission: "Automatic",
        mileage: "8 km/l",
        engine: "5204 cc",
        seating: 2,
        bodyType: "Sports",
        image: "assets/images/lamborghini.jpeg"
    },

    // Additional cars for Compare Cars
    {
        id: 11,
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
        id: 12,
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
        id: 13,
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
        id: 14,
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