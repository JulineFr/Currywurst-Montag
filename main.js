function goBackOnePage() {
            window.history.go(-1);
        }
       

        let currentDay = 'Montag';

        function changeDay(day) {
            console.log(`Changed to ${day}`);
            currentDay = day;
            document.getElementById('current-day').textContent = `Wochentag: ${currentDay}`;
        }

        function updateAllergenIcons() {
            const menus = {
                'Currywurst': {
                    category: 'Mittagessen',
                    queue: '5 Minuten',
                    nutrition: 'Nährwertangaben: Kalorien: 300, Fett: 15g, Kohlenhydrate: 20g, Eiweiß: 10g',
                    allergens: 'Gluten, Soja'
                },
                'Nudelgericht': {
                    category: 'Mittagessen',
                    queue: '8 Minuten',
                    nutrition: 'Nährwertangaben: Kalorien: 400, Fett: 12g, Kohlenhydrate: 50g, Eiweiß: 15g',
                    allergens: 'Ei, Milch, Weizen'
                },
                'Veganes Gericht': {
                    category: 'Mittagessen',
                    queue: '3 Minuten',
                    nutrition: 'Nährwertangaben: Kalorien: 250, Fett: 8g, Kohlenhydrate: 30g, Eiweiß: 12g',
                    allergens: 'Nüsse, Soja'
                },
                'Müsli mit Früchten': {
                    category: 'Frühstück',
                    queue: '5 Minuten',
                    nutrition: 'Nährwertangaben: Kalorien: 200, Fett: 5g, Kohlenhydrate: 35g, Eiweiß: 8g',
                    allergens: 'Gluten, Nüsse'
                },
                'Pancakes mit Ahornsirup': {
                    category: 'Frühstück',
                    queue: '7 Minuten',
                    nutrition: 'Nährwertangaben: Kalorien: 350, Fett: 10g, Kohlenhydrate: 45g, Eiweiß: 12g',
                    allergens: 'Ei, Milch'
                },
                'Kuchen': {
                    category: 'Snacks',
                    queue: '6 Minuten',
                    nutrition: 'Nährwertangaben: Kalorien: 250, Fett: 12g, Kohlenhydrate: 30g, Eiweiß: 5g',
                    allergens: 'Ei, Milch, Gluten'
                },
                'Muffin': {
                    category: 'Snacks',
                    queue: '4 Minuten',
                    nutrition: 'Nährwertangaben: Kalorien: 180, Fett: 8g, Kohlenhydrate: 25g, Eiweiß: 3g',
                    allergens: 'Ei, Milch, Weizen'
                },
                'Popcorn': {
                    category: 'Snacks',
                    queue: '3 Minuten',
                    nutrition: 'Nährwertangaben: Kalorien: 120, Fett: 5g, Kohlenhydrate: 18g, Eiweiß: 2g',
                    allergens: 'Gluten'
                },
                // Weitere Snack-Elemente hinzufügen
             };
            const selectedAllergens = Array.from(document.querySelectorAll('#allergen-options input:checked')).map(checkbox => checkbox.value);
            const menuItems = document.querySelectorAll('.menu-item');

            menuItems.forEach(item => {
                const dataMenu = item.getAttribute('data-menu');
                const allergens = menus[dataMenu].allergens.split(',').map(allergen => allergen.trim());

                const hasAllergen = selectedAllergens.length > 0 && selectedAllergens.some(allergen => allergens.includes(allergen));
                const icon = item.querySelector('.allergen-icon');

                if (hasAllergen && !menus[dataMenu].consumed) {
                    if (!icon) {
                        const iconElement = document.createElement('span');
                        iconElement.className = 'allergen-icon';
                        iconElement.textContent = '!';
                        iconElement.style.color = 'red';
                        item.appendChild(iconElement);
                    }
                } else {
                    if (icon) {
                        icon.remove();
                    }
                }
            });
        }
        // Add event listeners for allergen checkboxes
        document.querySelectorAll('#allergen-options input').forEach(checkbox => {
            checkbox.addEventListener('change', filterMenuByAllergen);
        });

        function filterMenuByAllergen() {
            const selectedAllergens = Array.from(document.querySelectorAll('#allergen-options input:checked')).map(checkbox => checkbox.value);
            const menuItems = document.querySelectorAll('.menu-item');


            menuItems.forEach(item => {
                const dataMenu = item.getAttribute('data-menu');
                const allergens = menus[dataMenu].allergens.split(', ');

                if (selectedAllergens.length === 0 || selectedAllergens.every(allergen => !allergens.includes(allergen))) {
                    const category = menus[dataMenu].category;
                    const day = currentDay.toLowerCase();
                    const menuType = document.querySelector('.menu-type-button.selected').textContent;

                    if (category === menuType && menus[dataMenu].days.includes(day) && !menus[dataMenu].consumed) {
                        item.style.display = 'inline-block';
                    } else {
                        item.style.display = 'none';
                    }
                } else {
                    if (allergens.some(allergen => selectedAllergens.includes(allergen))) {
                        // Hide the item if it contains the selected allergen
                        item.style.display = 'none';
                    } else {
                        const category = menus[dataMenu].category;
                        const day = currentDay.toLowerCase();
                        const menuType = document.querySelector('.menu-type-button.selected').textContent;

                        if (category === menuType && menus[dataMenu].days.includes(day) && !menus[dataMenu].consumed) {
                            item.style.display = 'inline-block';
                        } else {
                            item.style.display = 'none';
                        }
                    }
                }
            });

            updateAllergenIcons();
        }





        const menus = {
            'Currywurst': {
                category: 'Mittagessen',
                queue: '5 Minuten',
                nutrition: 'Nährwertangaben: Kalorien: 300, Fett: 15g, Kohlenhydrate: 20g, Eiweiß: 10g',
                allergens: 'Gluten, Soja'
            },
            'Nudelgericht': {
                category: 'Mittagessen',
                queue: '8 Minuten',
                nutrition: 'Nährwertangaben: Kalorien: 400, Fett: 12g, Kohlenhydrate: 50g, Eiweiß: 15g',
                allergens: 'Ei, Milch, Weizen'
            },
            'Veganes Gericht': {
                category: 'Mittagessen',
                queue: '3 Minuten',
                nutrition: 'Nährwertangaben: Kalorien: 250, Fett: 8g, Kohlenhydrate: 30g, Eiweiß: 12g',
                allergens: 'Nüsse, Soja'
            },
            'Müsli mit Früchten': {
                category: 'Frühstück',
                queue: '5 Minuten',
                nutrition: 'Nährwertangaben: Kalorien: 200, Fett: 5g, Kohlenhydrate: 35g, Eiweiß: 8g',
                allergens: 'Gluten, Nüsse'
            },
            'Pancakes mit Ahornsirup': {
                category: 'Frühstück',
                queue: '7 Minuten',
                nutrition: 'Nährwertangaben: Kalorien: 350, Fett: 10g, Kohlenhydrate: 45g, Eiweiß: 12g',
                allergens: 'Ei, Milch'
            },
            'Kuchen': {
                category: 'Snacks',
                queue: '6 Minuten',
                nutrition: 'Nährwertangaben: Kalorien: 250, Fett: 12g, Kohlenhydrate: 30g, Eiweiß: 5g',
                allergens: 'Ei, Milch, Gluten'
            },
            'Muffin': {
                category: 'Snacks',
                queue: '4 Minuten',
                nutrition: 'Nährwertangaben: Kalorien: 180, Fett: 8g, Kohlenhydrate: 25g, Eiweiß: 3g',
                allergens: 'Ei, Milch, Weizen'
            },
            'Popcorn': {
                category: 'Snacks',
                queue: '3 Minuten',
                nutrition: 'Nährwertangaben: Kalorien: 120, Fett: 5g, Kohlenhydrate: 18g, Eiweiß: 2g',
                allergens: 'Gluten'
            },
            // Weitere Snack-Elemente hinzufügen
        };

          


        function showMenu(menuType) {
            console.log(`Clicked on ${menuType} button`);
            document.getElementById('start-screen').style.display = 'none';
            document.getElementById('main-menu').style.display = 'block';
            const allergenFilter = document.getElementById('allergen-filter');
            // Zeige den Allergenfilter nur auf den Hauptmenüseiten an
            if (menuType === 'Frühstück' || menuType === 'Mittagessen' || menuType === 'Snacks') {
                allergenFilter.style.display = 'block';
            } else {
                allergenFilter.style.display = 'none';
            }
            const menuItems = document.querySelectorAll('.menu-item');

            menuItems.forEach(item => {
                const dataMenu = item.getAttribute('data-menu');
                const category = menus[dataMenu].category;
                if (category === menuType) {
                    item.style.display = 'inline-block';
                } else {
                    item.style.display = 'none';
                }
            });

            // After showing the menu, update allergen icons and filter based on allergens
            updateAllergenIcons();
            filterMenuByAllergen();

           
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
