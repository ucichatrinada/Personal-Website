// Data resep makanan
const recipes = [
    {
        title: "Nasi Biryani Spesial",
        image: "img/nasiBiryani.jpeg",
        description: "Nasi seribu bumbu yang terkenal di Asia Selatan. Disajikan dengan daging atau sayuran lezat!",
        ingredients: [
            "2 cangkir beras basmati",
            "400 gram daging ayam, potong sesuai selera (bisa diganti dengan daging sapi, kambing, atau tanpa daging untuk versi vegetarian)",
            "1 bawang bombay, cincang halus",
            "3 siung bawang putih, cincang",
            "1 ruas jahe, cincang halus",
            "2 sendok makan minyak atau ghee (minyak samin)",
            "1/2 cangkir yogurt plain",
            "1 sendok teh bubuk kunyit",
            "1 sendok teh bubuk cabai merah (sesuaikan dengan selera pedas)",
            "1 sendok makan bumbu garam masala",
            "1 sendok teh jinten",
            "4 butir cengkeh",
            "3 buah kapulaga",
            "1 batang kayu manis",
            "2 lembar daun salam",
            "4 cangkir air",
            "Garam secukupnya",
            "Daun ketumbar atau daun mint untuk taburan (opsional)"

        ]
    },
    {
        title: "Ayam Tulang Lunak",
        image: "img/ayamGoreng.jpeg",
        description: "Hidangan ayam lezat yang empuk dengan tulang yang juga lunak dan bisa dimakan"

,
        ingredients: [
            "1 ekor ayam kampung atau ayam broiler, potong menjadi 4 bagian (dengan tulangnya)",
            "3 lembar daun salam",
            "3 lembar daun jeruk, sobek-sobek",
            "2 batang serai, memarkan",
            "2 ruas lengkuas, memarkan",
           "1 sendok makan air asam jawa",
           "500 ml air kelapa (opsional, bisa diganti dengan air biasa)",
            "1 sendok makan gula merah, serut",
            "Garam secukupnya",
            "2 sendok makan minyak untuk menumis",
        ]
    },
];

// Fungsi untuk menampilkan resep pada halaman
function displayRecipes() {
    const recipeContainer = document.getElementById('recipes');
    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';
        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <div class="recipe-card-content">
                <h3>${recipe.title}</h3>
                <p>${recipe.description}</p>
                <button onclick="showIngredients('${recipe.title}')">Lihat Bahan</button>
            </div>
        `;
        recipeContainer.appendChild(recipeCard);
    });
}

// Fungsi untuk menampilkan bahan-bahan resep
function showIngredients(title) {
    const recipe = recipes.find(r => r.title === title);
    alert(`Bahan-bahan untuk ${title}:\n\n${recipe.ingredients.join('\n')}`);
}

// Panggil fungsi displayRecipes saat halaman dimuat
window.onload = displayRecipes;
