onEvent('recipes', (event) => {

const hammer = ['immersiveengineering:hammer', 'emendatusenigmatica:enigmatic_hammer']; 

//Cobalt Gear    
event
.shaped('#forge:gears/cobalt', ['CBC', 'B B', 'CBC'], {
    //A: '#forge:nuggets/iron',
    B: '#forge:plates/cobalt',
    C: '#forge:rods/cobalt'
})
.id(`kubejs:crafting_shaped_cobalt_gear`); 

//Cobalt Rod
event
.shaped('#forge:rods/cobalt', ['A', 'A'], {
    A: '#forge:ingots/cobalt'
})
.id(`kubejs:crafting_shaped_cobalt_rod`);

//Cobalt Plate
event.shapeless('#forge:plates/cobalt', ['#forge:ingots/cobalt', '#forge:ingots/cobalt', hammer]).id(`kubejs:shapeless_crafting_cobalt_plate`);

});   