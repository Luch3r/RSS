const items = [
    { name: "AK-47 | Redline", rarity: "Редкий", price: 15, imageUrl: "https://example.com/ak47-redline.jpg" },
    { name: "M4A4 | Howl", rarity: "Легендарный", price: 50, imageUrl: "https://example.com/m4a4-howl.jpg" },
    { name: "Glock-18 | Fade", rarity: "Редкий", price: 10, imageUrl: "https://example.com/glock-fade.jpg" },
    { name: "AWP | Dragon Lore", rarity: "Легендарный", price: 100, imageUrl: "https://example.com/awp-dragon-lore.jpg" },
];

document.getElementById("openCaseButton").addEventListener("click", openCase);

function openCase() {
    const randomIndex = Math.floor(Math.random() * items.length);
    const item = items[randomIndex];
    
    document.getElementById("result").innerHTML = `Вы получили ${item.name} (${item.rarity}) - $${item.price}`;
    
    const itemImage = document.getElementById("itemImage");
    itemImage.src = item.imageUrl;
    itemImage.alt = item.name;
    itemImage.style.display = 'block'; 
}