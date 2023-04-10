// priority: 0

settings.logAddedRecipes = false
settings.logRemovedRecipes = false
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	// Change recipes here
})

// Listen to item tag event
onEvent('tags.items', event => {
	// Get the #forge:tag tag collection and add mod:item to it
	// event.add('forge:ingots/andesite_alloy', 'create:andesite_alloy')
	// event.add('minecraft:lectern_books', 'eccentrictome:tome')
	event.add('forge:books/guide', 'tinkers_reforged:reforging_guide')
	event.add('forge:books/guide', 'patchouli:guide_book')
	event.add('forge:books/guide', 'immersiveengineering:manual')
	event.add('forge:books/guide', 'eccentrictome:tome')
	event.add('minecraft:lectern_books', 'eccentrictome:tome')

	// Get the #forge:tag tag collection and remove mod:item from it
	// event.remove('forge:ingots\brick', 'supplementaries:ash_brick')
	
	// Removes all tags from this entry
	// event.removeAllTagsFrom('minecraft:stick')
})


// 'advancednetherite:netherite_iron_ingot'
// 'advancednetherite:netherite_gold_ingot'
// 'advancednetherite:netherite_emerald_ingot'
// 'advancednetherite:netherite_diamond_ingot'
