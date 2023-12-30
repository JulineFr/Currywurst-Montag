const menus = {
    'Currywurst': {
        queue: '5 Minuten',
        nutrition: 'Nährwertangaben: Kalorien: 300, Fett: 15g, Kohlenhydrate: 20g, Eiweiß: 10g',
        allergens: 'Allergene: Gluten, Soja'
    },
    'Nudelgericht': {
        queue: '8 Minuten',
        nutrition: 'Nährwertangaben: Kalorien: 400, Fett: 12g, Kohlenhydrate: 50g, Eiweiß: 15g',
        allergens: 'Allergene: Ei, Milch, Weizen'
    },
    'Veganes Gericht': {
        queue: '3 Minuten',
        nutrition: 'Nährwertangaben: Kalorien: 250, Fett: 8g, Kohlenhydrate: 30g, Eiweiß: 12g',
        allergens: 'Allergene: Nüsse, Soja'
    },
    // Füge hier weitere Menüs hinzu
};

function showMenu(menuType) {
    console.log(`Clicked on ${menuType} button`);
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('main-menu').style.display = 'block';
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.style.display = 'inline-block';
    });
}

function showMenuItemDetails(menuItem) {
    const menuTitle = document.getElementById('menu-title');
    const menuQueue = document.getElementById('menu-queue');
    const menuNutrition = document.getElementById('menu-nutrition');
    const menuAllergens = document.getElementById('menu-allergens');
    
    menuTitle.textContent = menuItem;
    menuQueue.textContent = `Warteschlange: ${menus[menuItem].queue}`;
    menuNutrition.textContent = menus[menuItem].nutrition;
    menuAllergens.textContent = `Allergene: ${menus[menuItem].allergens}`;

    document.getElementById('main-menu').style.display = 'none';
    document.getElementById('menu-details').style.display = 'block';
}

function goToStartScreen() {
    document.getElementById('menu-details').style.display = 'none';
    document.getElementById('main-menu').style.display = 'none';
    document.getElementById('start-screen').style.display = 'block';
}
