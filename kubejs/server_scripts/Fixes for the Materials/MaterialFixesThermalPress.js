onEvent('recipes', (event) => {

    event.remove({ output: 'emendatusenigmatica:cobalt_plate' });
    event.remove({ output: 'emendatusenigmatica:cobalt_gear' });
    event.remove({ output: 'emendatusenigmatica:cobalt_rod' }); 

    const recipes = [
        {
            inputs: [Ingredient.of('#forge:ingots/cobalt', 1)],
            outputs: [Item.of('emendatusenigmatica:cobalt_plate', 1)],
            energy: 2400
        },
        {
            inputs: [Ingredient.of('#forge:ingots/cobalt', 4), Ingredient.of('thermal:press_gear_die')],
            outputs: [Item.of('emendatusenigmatica:cobalt_gear', 1)],
            energy: 2400
        },
        {
            inputs: [Ingredient.of('#forge:ingots/cobalt', 1), Ingredient.of('immersiveengineering:mold_rod')],
            outputs: [Item.of('emendatusenigmatica:cobalt_rod', 2)],
            energy: 2400
        }
    ];
    recipes.forEach((recipe) => {
        recipe.id
            ? event.recipes.thermal.press(recipe.outputs, recipe.inputs).energy(recipe.energy).id(recipe.id)
            : event.recipes.thermal.press(recipe.outputs, recipe.inputs).energy(recipe.energy);
            
    });
});
