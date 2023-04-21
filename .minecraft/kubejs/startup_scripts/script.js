// priority: 0

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')

	// Science Items
	event.create('physics_science').displayName('§3Physics point§r')

	
	// Particles Items
	event.create('quark0_housing').displayName('§3Quark Housing§r')
	event.create('quark1_up').displayName('§3Quark Up§r')
	event.create('quark1_down').displayName('§3Quark Down§r')
	event.create('quark2_charm').displayName('§3Quark Charm§r')
	event.create('quark2_strange').displayName('§3Quark Strange§r')
	event.create('quark3_top').displayName('§3Quark Top§r')
	event.create('quark3_bottom').displayName('§3Quark Bottom§r')

})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')



})