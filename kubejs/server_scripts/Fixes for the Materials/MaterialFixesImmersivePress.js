onEvent('recipes', (event) => {

    const recipes = [
        { output: Item.of('emendatusenigmatica:cobalt_gear', 1), input: Ingredient.of('#forge:ingots/cobalt', 4), mold: 'immersiveengineering:mold_gear' },
        { output: Item.of('emendatusenigmatica:cobalt_plate', 1), input: Ingredient.of('#forge:ingots/cobalt', 1), mold: 'immersiveengineering:mold_plate' },
        { output: Item.of('emendatusenigmatica:cobalt_rod', 2), input: Ingredient.of('#forge:ingots/cobalt', 1), mold: 'immersiveengineering:mold_rod' }
    ];

    recipes.forEach((recipe) => {
        recipe.id
            ? event.recipes.immersiveengineering.metal_press(recipe.output, recipe.input, recipe.mold).id(recipe.id)
            : event.recipes.immersiveengineering.metal_press(recipe.output, recipe.input, recipe.mold);
    });
});    