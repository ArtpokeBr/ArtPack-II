onEvent('recipes', (event) => {

    materialsToUnify.forEach((material) => {
        var ingot = getPreferredItemInTag(Ingredient.of('#forge:ingots/' + material)).id;
        var gem = getPreferredItemInTag(Ingredient.of('#forge:gems/' + material)).id;

        var plate = getPreferredItemInTag(Ingredient.of('#forge:plates/' + material)).id;
        var gear = getPreferredItemInTag(Ingredient.of('#forge:gears/' + material)).id;
        var rod = getPreferredItemInTag(Ingredient.of('#forge:rods/' + material)).id;
        var wire = getPreferredItemInTag(Ingredient.of('#forge:wires/' + material)).id;

        gear_unification(event, material, ingot, gem, gear);
        rod_unification(event, material, ingot, gem, rod);
        plate_unification(event, material, ingot, gem, plate);
        wire_unification(event, material, ingot, gem, wire, plate);
    });

    function gear_unification(event, material, ingot, gem, gear) {
        if (gear == air) {
            return;
        }

        var rodII = getPreferredItemInTag(Ingredient.of('#forge:rods/' + material)).id;
        var plateII = getPreferredItemInTag(Ingredient.of('#forge:plates/' + material)).id;

        event.remove({ output: gear });

        var output = gear,
            input,
            mold = '#thermal:crafting/dies/gear'; 

        if (ingot != air) {
            input = '#forge:ingots/' + material;
        } else if (gem != air) {
            input = '#forge:gems/' + material;
        } else {
            return;
        }

        event.recipes.thermal
            .press(gear, [Ingredient.of(input, 4), 'thermal:press_gear_die'])
            .id(`thermal:machine/press/press_${material}_ingot_to_gear`);

        event.recipes.immersiveengineering
            .metal_press(gear, Ingredient.of(input, 4), 'immersiveengineering:mold_gear')
            .id(`kubejs:immersiveengineering_metal_press_${material}_gear`);

        event
            .shaped(output, ['CBC', 'B B', 'CBC'], {
                //A: '#forge:nuggets/iron',
                B: plateII,
                C: rodII
            })
            .id(`kubejs:crafting_shaped_${material}_gear`); 
    }

    function rod_unification(event, material, ingot, gem, rod) {
        if (rod == air) {
            return;
        }

        event.remove({ output: rod });

        var output = rod,
            input,
            mold = '#thermal:crafting/dies/rod';

        if (ingot != air) {
            input = '#forge:ingots/' + material;
        } else if (gem != air) {
            input = '#forge:gems/' + material;
        } else {
            return;
        }

        event.recipes.thermal
            .press(item.of(rod, 2), [input, 'immersiveengineering:mold_rod'])
            .energy(2400)
            .id(`kubejs:immersiveengineering_metal_press_${material}_rod`);

        event.recipes.immersiveengineering
            .metal_press(item.of(rod, 2), input, 'immersiveengineering:mold_rod')
            .id(`kubejs:immersiveengineering_metal_press_${material}_rod`);
        
        event
            .shaped(output, ['A', 'A'], {
                A: input
            })
            .id(`kubejs:shaped_crafting_${material}_rod`);
        
    }

    function plate_unification(event, material, ingot, gem, plate) {
        if (plate == air) {
            return;
        }

        event.remove({ output: plate });
        event.remove({ id: /immersiveengineering:crafting\/plate_/ });
        event.remove({ id: /create:pressing\/\w*_ingot/ });

        const output = plate,
            mold = '#thermal:crafting/dies/plate',
            hammer = ['immersiveengineering:hammer', 'emendatusenigmatica:enigmatic_hammer'];

        if (ingot != air) {
            input = '#forge:ingots/' + material;
        } else if (gem != air) {
            input = '#forge:gems/' + material;
        } else {
            return;
        }
        event.shapeless(output, [input, input, hammer]).id(`kubejs:shapeless_crafting_${material}_plate`);

        event.recipes.immersiveengineering
            .metal_press(output, input, 'immersiveengineering:mold_plate')
            .id(`kubejs:immersiveengineering_metal_press_${material}_plate`);

        event.recipes.create.pressing(output, input).id(`kubejs:create_pressing_${material}_plate`);

        event.recipes.thermal
            .press(Item.of(output), input)
            .energy(2400)
            .id(`thermal:machine/press/press_${material}_ingot_to_plate`);
    }

    function wire_unification(event, material, ingot, gem, wire, plate) {
        if (wire == air) {
            return;
        }

        event.remove({ output: wire });

        const wireCutters = 'immersiveengineering:wirecutter';
        let output = wire,
            input,
            mold = '#thermal:crafting/dies/wire';

        if (ingot != air) {
            input = '#forge:ingots/' + material;
        } else if (gem != air) {
            input = '#forge:gems/' + material;
        } else {
            return;
        }

        event.recipes.thermal
            .press(Item.of(output, 2), [input, 'immersiveengineering:mold_wire'])
            .energy(2400)
            .id(`kubejs:immersiveengineering_metal_press_${material}_wire`);

        event.recipes.immersiveengineering
            .metal_press(Item.of(output, 2), input, 'immersiveengineering:mold_wire')
            .id(`kubejs:immersiveengineering_metal_press_${material}_wire`);

        event.shapeless(output, [plate, wireCutters]).id(`kubejs:shaped_crafting_${material}_wire`);
    }
});
