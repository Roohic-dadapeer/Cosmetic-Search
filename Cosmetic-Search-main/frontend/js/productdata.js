const heroimagesource =[
 "https://www.simpleskincare.in/cdn/shop/collections/Collection-page_SKIN-BARRIER-CARE_54929afb-54c5-4edc-83ae-3e8e93153ba4_1200x400.jpg?v=1721714285", // Replace with your image URL
    "https://www.simpleskincare.in/cdn/shop/collections/1743a16edc1a--Serums-GIF_1200x400.gif?v=1721713624",
    "https://www.simpleskincare.in/cdn/shop/files/New_user_banner_1300x_300_Desktop_1.jpg?v=1719471193",
    "https://www.nutriglowcosmetics.com/wp-content/uploads/2023/08/How-natural-skincare-products-can-benefit-you-in-long-term.jpg"
]
const mockProductData = [
    {
        id: 1,
        name: "Hydrating Face Cream",
        brand: "Brand A",
        price: 25.99,
        rating: 4,
        category: "skincare",
        description: "A nourishing face cream that provides hydration.",
        image:'',
       // image: "https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk=",
        ingredients: "Aloe Vera, Vitamin E, Shea Butter",
        shades: null,
        reviews: [
            {
                reviewer: "Alice",
                rating: 5,
                reviewText: "This cream is amazing! My skin feels so hydrated and smooth."
            },
            {
                reviewer: "Bob",
                rating: 4,
                reviewText: "Good product, but I expected more hydration."
            }
        ]
    },
    {
        id: 2,
        name: "Perfect Lipstick",
        brand: "Brand B",
        price: 15.99,
        rating: 5,
        category: "makeup",
        description: "Long-lasting lipstick with a smooth finish.",
        image: "https://hips.hearstapps.com/hmg-prod/images/gh-best-skincare-products-6557978b58b57.png?crop=0.6666666666666666xw:1xh;center,top&resize=1200:*",
        ingredients: "Natural Oils, Vitamin C",
        shades: ["Red Velvet", "Rose Pink", "Coral Crush"],
        reviews: [
            {
                reviewer: "Charlotte",
                rating: 5,
                reviewText: "I love the red velvet shade, and it lasts all day!"
            },
            {
                reviewer: "Emma",
                rating: 4,
                reviewText: "The color is beautiful, but it's a bit drying on my lips."
            }
        ]
    },
    {
        id: 3,
        name: "Refreshing Shampoo",
        brand: "Brand C",
        price: 12.99,
        rating: 4,
        category: "haircare",
        description: "A gentle shampoo that revitalizes your hair.",
        image: "https://via.placeholder.com/150",
        ingredients: "Tea Tree Oil, Keratin",
        shades: null,
        reviews: [
            {
                reviewer: "Liam",
                rating: 4,
                reviewText: "My hair feels cleaner, but it doesn't add volume like I hoped."
            }
        ]
    },
    {
        id: 4,
        name: "Silky Body Lotion",
        brand: "Brand D",
        price: 18.99,
        rating: 4.5,
        category: "skincare",
        description: "Provides silky smooth skin with long-lasting hydration.",
        image: "https://via.placeholder.com/150",
        ingredients: "Cocoa Butter, Almond Oil",
        shades: null,
        reviews: [
            {
                reviewer: "Sophia",
                rating: 5,
                reviewText: "This lotion is incredible. It keeps my skin hydrated all day."
            }
        ]
    },
    {
        id: 5,
        name: "Matte Foundation",
        brand: "Brand E",
        price: 29.99,
        rating: 5,
        category: "makeup",
        description: "Lightweight foundation with full coverage.",
        image: "https://via.placeholder.com/150",
        ingredients: "Hyaluronic Acid, Mineral Pigments",
        shades: ["Fair", "Medium", "Tan", "Deep"],
        reviews: [
            {
                reviewer: "Olivia",
                rating: 5,
                reviewText: "Perfect foundation. Covers everything while feeling light on my skin."
            },
            {
                reviewer: "Isabella",
                rating: 4,
                reviewText: "Great coverage, but it can be a bit thick if applied too much."
            }
        ]
    },
    {
        id: 6,
        name: "Luxury Perfume",
        brand: "Brand F",
        price: 85.99,
        rating: 5,
        category: "fragrances",
        description: "An exotic perfume with floral and woody notes.",
        image: "https://via.placeholder.com/150",
        ingredients: "Essential Oils, Sandalwood",
        shades: null,
        reviews: [
            {
                reviewer: "Zoe",
                rating: 5,
                reviewText: "The scent is heavenly! It lasts all day long."
            }
        ]
    },
    {
        id: 7,
        name: "Moisturizing Hand Cream",
        brand: "Brand G",
        price: 10.99,
        rating: 4,
        category: "skincare",
        description: "Nourishes dry hands with a non-greasy formula.",
        image: "https://via.placeholder.com/150",
        ingredients: "Jojoba Oil, Glycerin",
        shades: null,
        reviews: [
            {
                reviewer: "Ethan",
                rating: 4,
                reviewText: "It works well, but I wish it absorbed a bit faster."
            }
        ]
    },
    {
        id: 8,
        name: "Volumizing Mascara",
        brand: "Brand H",
        price: 19.99,
        rating: 4.5,
        category: "makeup",
        description: "Creates dramatic lashes with a smudge-proof formula.",
        image: "https://via.placeholder.com/150",
        ingredients: "Silica, Vitamin B5",
        shades: null,
        reviews: [
            {
                reviewer: "Ava",
                rating: 5,
                reviewText: "My lashes have never looked so full! Highly recommend."
            }
        ]
    },
    {
        id: 9,
        name: "Repairing Hair Mask",
        brand: "Brand I",
        price: 16.99,
        rating: 4,
        category: "haircare",
        description: "Deeply repairs damaged hair and restores shine.",
        image: "https://via.placeholder.com/150",
        ingredients: "Argan Oil, Biotin",
        shades: null,
        reviews: [
            {
                reviewer: "Mia",
                rating: 4,
                reviewText: "Good product, helps with frizz, but not sure if it repairs my hair."
            }
        ]
    },
    {
        id: 10,
        name: "Compact Powder",
        brand: "Brand J",
        price: 14.99,
        rating: 3.5,
        category: "makeup",
        description: "Absorbs excess oil and provides a matte finish.",
        image: "https://via.placeholder.com/150",
        ingredients: "Talc, Zinc Oxide",
        shades: ["Light", "Medium", "Dark"],
        reviews: [
            {
                reviewer: "James",
                rating: 3,
                reviewText: "It works okay, but it doesn’t keep my face matte for long."
            }
        ]
    }
];
