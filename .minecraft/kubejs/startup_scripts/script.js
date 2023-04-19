// priority: 0

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')

	// Science Items
	event.create('physics_science').displayName('§3Physics point§r')

	
	// Particles Items
	event.create('quark1_up').displayName('§3Up quark§r')
	event.create('quark1_down').displayName('§3Down quark§r')
	event.create('quark2_charm').displayName('§3Charm quark§r')
	event.create('quark2_strange').displayName('§3Strange quark§r')
	event.create('quark3_top').displayName('§3Top quark§r')
	event.create('quark3_bottom').displayName('§3Bottom quark§r')

})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')



})