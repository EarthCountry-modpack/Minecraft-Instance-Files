// priority: 0

settings.logAddedRecipes = false
settings.logRemovedRecipes = false
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

// Listen to item tag event
onEvent('tags.items', event => {
	// Get the #forge:tag tag collection and add mod:item to it
	// event.add('forge:ingots/andesite_alloy', 'create:andesite_alloy')
	// event.add('minecraft:lectern_books', 'eccentrictome:tome')

	// Stone Ore Dictionary
	event.add('forge:ores/stone/aluminum', 'immersiveengineering:ore_aluminum')
	event.add('forge:ores/stone/aluminum', 'tinkers_reforged:aluminum_ore')
	event.add('forge:ores/stone/certus_quartz', 'ae2:quartz_ore')
	event.add('forge:ores/stone/cinnabar', 'thermal:cinnabar_ore')
	event.add('forge:ores/stone/coal', 'minecraft:coal_ore')
	event.add('forge:ores/stone/copper', 'minecraft:copper_ore')
	event.add('forge:ores/stone/diamond', 'minecraft:diamond_ore')
	event.add('forge:ores/stone/dimensional_shard', 'rftoolsbase:dimensionalshard_overworld')
	event.add('forge:ores/stone/emerald', 'minecraft:emerald_ore')
	event.add('forge:ores/stone/fluorite', 'mekanism:fluorite_ore')
	event.add('forge:ores/stone/gold', 'minecraft:gold_ore')
	event.add('forge:ores/stone/iron', 'minecraft:iron_ore')
	event.add('forge:ores/stone/lapis', 'minecraft:lapis_ore')
	event.add('forge:ores/stone/lead', 'immersiveengineering:ore_lead')
	event.add('forge:ores/stone/lead', 'mekanism:lead_ore')
	event.add('forge:ores/stone/lead', 'thermal:lead_ore')
	event.add('forge:ores/stone/nickel', 'immersiveengineering:ore_nickel')
	event.add('forge:ores/stone/nickel', 'thermal:nickel_ore')
	event.add('forge:ores/stone/niter', 'thermal:niter_ore')
	event.add('forge:ores/stone/osmium', 'mekanism:osmium_ore')
	event.add('forge:ores/stone/prosperity', 'mysticalagriculture:prosperity_ore')
	event.add('forge:ores/stone/red_beryl', 'tinkers_reforged:red_beryl_ore')
	event.add('forge:ores/stone/redstone', 'minecraft:redstone_ore')
	event.add('forge:ores/stone/silver', 'immersiveengineering:ore_silver')
	event.add('forge:ores/stone/silver', 'thermal:silver_ore')
	event.add('forge:ores/stone/sulfur', 'thermal:sulfur_ore')
	event.add('forge:ores/stone/tin', 'mekanism:tin_ore')
	event.add('forge:ores/stone/tin', 'thermal:tin_ore')
	event.add('forge:ores/stone/uranium', 'immersiveengineering:ore_uranium')
	event.add('forge:ores/stone/uranium', 'mekanism:uranium_ore')
	event.add('forge:ores/stone/zinc', 'create:zinc_ore')

	// Deepslate Ore Dictionary
	event.add('forge:ores/deepslate/aluminum', 'immersiveengineering:deepslate_ore_aluminum')
	event.add('forge:ores/deepslate/aluminum', 'tinkers_reforged:deepslate_aluminum_ore')
	event.add('forge:ores/deepslate/certus_quartz', 'ae2:deepslate_quartz_ore')
	event.add('forge:ores/deepslate/cinnabar', 'thermal:deepslate_cinnabar_ore')
	event.add('forge:ores/deepslate/coal', 'minecraft:deepslate_coal_ore')
	event.add('forge:ores/deepslate/copper', 'minecraft:deepslate_copper_ore')
	event.add('forge:ores/deepslate/diamond', 'minecraft:deepslate_diamond_ore')
	event.add('forge:ores/deepslate/emerald', 'minecraft:deepslate_emerald_ore')
	event.add('forge:ores/deepslate/epidote', 'tinkers_reforged:deepslate_epidote_ore')
	event.add('forge:ores/deepslate/fluorite', 'mekanism:deepslate_fluorite_ore')
	event.add('forge:ores/deepslate/gold', 'minecraft:deepslate_gold_ore')
	event.add('forge:ores/deepslate/hureaulite', 'tinkers_reforged:deepslate_hureaulite_ore')
	event.add('forge:ores/deepslate/inferium', 'mysticalagriculture:deepslate_inferium_ore')
	event.add('forge:ores/deepslate/iron', 'minecraft:deepslate_iron_ore')
	event.add('forge:ores/deepslate/lapis', 'minecraft:deepslate_lapis_ore')
	event.add('forge:ores/deepslate/lead', 'immersiveengineering:deepslate_ore_lead')
	event.add('forge:ores/deepslate/lead', 'mekanism:deepslate_lead_ore')
	event.add('forge:ores/deepslate/lead', 'thermal:deepslate_lead_ore')
	event.add('forge:ores/deepslate/nickel', 'immersiveengineering:deepslate_ore_nickel')
	event.add('forge:ores/deepslate/nickel', 'thermal:deepslate_nickel_ore')
	event.add('forge:ores/deepslate/niter', 'thermal:deepslate_niter_ore')
	event.add('forge:ores/deepslate/osmium', 'mekanism:deepslate_osmium_ore')
	event.add('forge:ores/deepslate/prosperity', 'mysticalagriculture:deepslate_prosperity_ore')
	event.add('forge:ores/deepslate/red_beryl', 'tinkers_reforged:deepslate_red_beryl_ore')
	event.add('forge:ores/deepslate/redstone', 'minecraft:deepslate_redstone_ore')
	event.add('forge:ores/deepslate/silver', 'immersiveengineering:deepslate_ore_silver')
	event.add('forge:ores/deepslate/silver', 'thermal:deepslate_silver_ore')
	event.add('forge:ores/deepslate/sulfur', 'thermal:deepslate_sulfur_ore')
	event.add('forge:ores/deepslate/tin', 'mekanism:deepslate_tin_ore')
	event.add('forge:ores/deepslate/tin', 'thermal:deepslate_tin_ore')
	event.add('forge:ores/deepslate/uranium', 'immersiveengineering:deepslate_ore_uranium')
	event.add('forge:ores/deepslate/uranium', 'mekanism:deepslate_uranium_ore')
	event.add('forge:ores/deepslate/zinc', 'create:deepslate_zinc_ore')

	// Nether Ore Dictionary
	event.add('forge:ores/nether/ancient_debris', 'minecraft:ancient_debris')
	event.add('forge:ores/nether/cobalt', 'tconstruct:cobalt_ore')
	event.add('forge:ores/nether/dimensional_shard', 'rftoolsbase:dimensionalshard_nether')
	event.add('forge:ores/nether/gold', 'minecraft:nether_gold_ore')
	event.add('forge:ores/nether/inferium', 'mysticalagradditions:nether_inferium_ore')
	event.add('forge:ores/nether/prosperity', 'mysticalagradditions:nether_prosperity_ore')
	event.add('forge:ores/nether/quartz', 'minecraft:nether_quartz_ore')

	// End Ore Dictionary
	event.add('forge:ores/end/dimensional_shard', 'rftoolsbase:dimensionalshard_end')
	event.add('forge:ores/end/inferium', 'mysticalagradditions:end_inferium_ore')
	event.add('forge:ores/end/kepu', 'tinkers_reforged:kepu_ore')
	event.add('forge:ores/end/prosperity', 'mysticalagradditions:end_prosperity_ore')

	// Raw Ore Dictionary
	event.add('forge:ores/raw/uranium', 'exnihilosequentia:raw_uranium')
	event.add('forge:ores/raw/platinum', 'exnihilosequentia:raw_platinum')
	event.add('forge:ores/raw/aluminum', 'exnihilosequentia:raw_aluminum')
	event.add('forge:ores/raw/tin', 'exnihilosequentia:raw_tin')
	event.add('forge:ores/raw/silver', 'exnihilosequentia:raw_silver')
	event.add('forge:ores/raw/nickel', 'exnihilosequentia:raw_nickel')
	event.add('forge:ores/raw/lead', 'exnihilosequentia:raw_lead')
	event.add('forge:ores/raw/zinc', 'exnihilosequentia:raw_zinc')

	// Raw Block Dictionary
	event.add('forge:ores/rawblock/aluminum', 'immersiveengineering:raw_block_aluminum')
	event.add('forge:ores/rawblock/aluminum', 'tinkers_reforged:raw_aluminum_block')
	event.add('forge:ores/rawblock/cobalt', 'tconstruct:raw_cobalt_block')
	event.add('forge:ores/rawblock/copper', 'minecraft:raw_copper_block')
	event.add('forge:ores/rawblock/gold', 'minecraft:raw_gold_block')
	event.add('forge:ores/rawblock/iron', 'minecraft:raw_iron_block')
	event.add('forge:ores/rawblock/kepu', 'tinkers_reforged:raw_kepu_block')
	event.add('forge:ores/rawblock/lead', 'immersiveengineering:raw_block_lead')
	event.add('forge:ores/rawblock/lead', 'mekanism:block_raw_lead')
	event.add('forge:ores/rawblock/lead', 'thermal:raw_lead_block')
	event.add('forge:ores/rawblock/nickel', 'immersiveengineering:raw_block_nickel')
	event.add('forge:ores/rawblock/nickel', 'thermal:raw_nickel_block')
	event.add('forge:ores/rawblock/osmium', 'mekanism:block_raw_osmium')
	event.add('forge:ores/rawblock/silver', 'immersiveengineering:raw_block_silver')
	event.add('forge:ores/rawblock/silver', 'thermal:raw_silver_block')
	event.add('forge:ores/rawblock/tin', 'mekanism:block_raw_tin')
	event.add('forge:ores/rawblock/tin', 'thermal:raw_tin_block')
	event.add('forge:ores/rawblock/uranium', 'immersiveengineering:raw_block_uranium')
	event.add('forge:ores/rawblock/uranium', 'mekanism:block_raw_uranium')
	event.add('forge:ores/rawblock/zinc', 'create:raw_zinc_block')

	// Raw Ingot Dictionary
	event.add('forge:ores/rawingot/aluminum', 'immersiveengineering:raw_aluminum')
	event.add('forge:ores/rawingot/aluminum', 'tinkers_reforged:raw_aluminum')
	event.add('forge:ores/rawingot/cobalt', 'tconstruct:raw_cobalt')
	event.add('forge:ores/rawingot/copper', 'minecraft:raw_copper')
	event.add('forge:ores/rawingot/gold', 'minecraft:raw_gold')
	event.add('forge:ores/rawingot/iron', 'minecraft:raw_iron')
	event.add('forge:ores/rawingot/kepu', 'tinkers_reforged:raw_kepu')
	event.add('forge:ores/rawingot/lead', 'immersiveengineering:raw_lead')
	event.add('forge:ores/rawingot/lead', 'mekanism:raw_lead')
	event.add('forge:ores/rawingot/lead', 'thermal:raw_lead')
	event.add('forge:ores/rawingot/nickel', 'immersiveengineering:raw_nickel')
	event.add('forge:ores/rawingot/nickel', 'thermal:raw_nickel')
	event.add('forge:ores/rawingot/osmium', 'mekanism:raw_osmium')
	event.add('forge:ores/rawingot/silver', 'immersiveengineering:raw_silver')
	event.add('forge:ores/rawingot/silver', 'thermal:raw_silver')
	event.add('forge:ores/rawingot/tin', 'mekanism:raw_tin')
	event.add('forge:ores/rawingot/tin', 'thermal:raw_tin')
	event.add('forge:ores/rawingot/tin', 'thermal:raw_tin')
	event.add('forge:ores/rawingot/uranium', 'immersiveengineering:raw_uranium')
	event.add('forge:ores/rawingot/uranium', 'mekanism:raw_uranium')
	event.add('forge:ores/rawingot/zinc', 'create:raw_zinc')

	// Nuggets
	event.add('forge:nuggets/experience', 'create:experience_nugget')

	// Coins
	event.add('forge:coins/brass', 'createdeco:brass_coin')
	event.add('forge:coins/cast_iron', 'createdeco:cast_iron_coin')
	event.add('forge:coins/copper', 'createdeco:copper_coin')
	event.add('forge:coins/gold', 'createdeco:gold_coin')
	event.add('forge:coins/iron', 'createdeco:iron_coin')
	event.add('forge:coins/netherite', 'createdeco:netherite_coin')
	event.add('forge:coins/zinc', 'createdeco:zinc_coin')
	event.add('forge:coinstack/brass', 'createdeco:brass_coinstack')
	event.add('forge:coinstack/cast_iron', 'createdeco:cast_iron_coinstack')
	event.add('forge:coinstack/copper', 'createdeco:copper_coinstack')
	event.add('forge:coinstack/gold', 'createdeco:gold_coinstack')
	event.add('forge:coinstack/iron', 'createdeco:iron_coinstack')
	event.add('forge:coinstack/netherite', 'createdeco:netherite_coinstack')
	event.add('forge:coinstack/zinc', 'createdeco:zinc_coinstack')

	// Book tag fot Lectern and Eccentric Tome
	event.add('forge:books/guide', 'citadel:citadel_book')
	event.add('forge:books/guide', 'cookingforblockheads:crafting_book')
	event.add('forge:books/guide', 'cookingforblockheads:no_filter_edition')
	event.add('forge:books/guide', 'cookingforblockheads:recipe_book')
	event.add('forge:books/guide', 'create_enchantment_industry:enchanting_guide')
	event.add('forge:books/guide', 'eccentrictome:tome')
	event.add('forge:books/guide', 'immersiveengineering:manual')
	event.add('forge:books/guide', 'patchouli:guide_book')
	event.add('forge:books/guide', 'rftoolsbase:manual')
	event.add('forge:books/guide', 'tinkers_reforged:reforging_guide')
	event.add('minecraft:lectern_books', 'eccentrictome:tome')

	// Get the #forge:tag tag collection and remove mod:item from it
	// event.remove('forge:ingots\brick', 'supplementaries:ash_brick')
	// Remove Baolian ingot, Piroot ingot nuggets tag
	event.remove('balm:nuggets', 'tinkers_reforged:baolian_ingot')
	event.remove('balm:nuggets', 'tinkers_reforged:piroot_ingot')
	event.remove('forge:nuggets', 'tinkers_reforged:baolian_ingot')
	event.remove('forge:nuggets', 'tinkers_reforged:piroot_ingot')
	
	// Removes all tags from this entry
	// event.removeAllTagsFrom('minecraft:stick')
})


// 'advancednetherite:netherite_iron_ingot'
// 'advancednetherite:netherite_gold_ingot'
// 'advancednetherite:netherite_emerald_ingot'
// 'advancednetherite:netherite_diamond_ingot'
