//priority: 1000

// all animals that can be tamed, used for zoology challenge
// crows aren't in this list as they don't trigger the relevant advancement trigger when tamed
const tameableAnimals = [
    'minecraft:wolf',
    'minecraft:cat',
    'minecraft:parrot',
    'minecraft:horse',
    'minecraft:donkey',
    'minecraft:mule',
    'minecraft:llama',
    'atum:camel',
    'atum:desert_wolf',
    'atum:serval',
    'quark:foxhound'
];

// all animals that can be bred (except egg laying animals)
// all animals in this list are added to the 'Two by Two' advancement, which is used for conservationism challenge
const breedableAnimals = [
    'minecraft:horse',
    'minecraft:donkey',
    'minecraft:mule',
    'minecraft:sheep',
    'minecraft:cow',
    'minecraft:mooshroom',
    'minecraft:pig',
    'minecraft:chicken',
    'minecraft:wolf',
    'minecraft:ocelot',
    'minecraft:rabbit',
    'minecraft:llama',
    'minecraft:cat',
    'minecraft:panda',
    'minecraft:fox',
    'minecraft:bee',
    'minecraft:hoglin',
    'minecraft:strider',
    'atum:camel',
    'atum:desert_rabbit',
    'atum:desert_wolf',
    'atum:quail',
    'atum:serval',
    'quark:crab',
    'quark:foxhound',
    'quark:frog',
    'undergarden:gloomper',
    'undergarden:dweller'
];

// animals that can be bred, but don't immediately spawn a child after breeding
const eggLayingAnimals = ['minecraft:turtle'];
