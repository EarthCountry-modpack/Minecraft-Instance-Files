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

	// Add tags for custom items (Science)
	event.add('forge:science/physics', 'kubejs:physics_science')
	event.add('forge:particle/boson', 'kubejs:boson_higgs')
	event.add('forge:particle/boson', 'kubejs:boson_w')
	event.add('forge:particle/boson', 'kubejs:boson_z')
	event.add('forge:particle/energetic', 'kubejs:electron1')
	event.add('forge:particle/energetic', 'kubejs:muon2')
	event.add('forge:particle/energetic', 'kubejs:tau3')
	event.add('forge:particle/massless', 'kubejs:massless_matter')
	event.add('forge:particle/neutrino', 'kubejs:gluon')
	event.add('forge:particle/neutrino', 'kubejs:photon')
	event.add('forge:particle/quark', 'kubejs:quark1_down')
	event.add('forge:particle/quark', 'kubejs:quark1_up')
	event.add('forge:particle/quark', 'kubejs:quark2_charm')
	event.add('forge:particle/quark', 'kubejs:quark2_strange')
	event.add('forge:particle/quark', 'kubejs:quark3_bottom')
	event.add('forge:particle/quark', 'kubejs:quark3_top')
	event.add('forge:particle/quark1', 'kubejs:quark1_down')
	event.add('forge:particle/quark1', 'kubejs:quark1_up')
	event.add('forge:particle/quark2', 'kubejs:quark2_charm')
	event.add('forge:particle/quark2', 'kubejs:quark2_strange')
	event.add('forge:particle/quark3', 'kubejs:quark3_bottom')
	event.add('forge:particle/quark3', 'kubejs:quark3_top')
	
	// Removes all tags from this entry
	// event.removeAllTagsFrom('minecraft:stick')
})
