// priority: 0

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')

	// Science Items
	event.create('physics_science').displayName('§3Physics point§r')

	
	// Particles Items
	event.create('particle_housing').displayName('§3Particule Housing§r')
	event.create('quark1_up').displayName('§3Quark Up§r')
	event.create('quark1_down').displayName('§3Quark Down§r')
	event.create('quark2_charm').displayName('§3Quark Charm§r')
	event.create('quark2_strange').displayName('§3Quark Strange§r')
	event.create('quark3_top').displayName('§3Quark Top§r')
	event.create('quark3_bottom').displayName('§3Quark Bottom§r')

	event.create('gluon').displayName('§6Gluon§r')
	event.create('photon').displayName('§6Photon§r')
	event.create('boson_w').displayName('§eW Boson§r')
	event.create('boson_z').displayName('§eZ Boson§r')
	event.create('boson_higgs').displayName('§eHiggs Boson§r')
	event.create('massless_matter').displayName('§dMassless Matter§r')

	event.create('electron1').displayName('§eElectron§r')
	event.create('muon2').displayName('§eMuon§r')
	event.create('tau3').displayName('§eTau§r')

})
