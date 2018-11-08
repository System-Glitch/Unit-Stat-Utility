var upgrades = {
	championSpearmanGreece: {
		isChain: false,
		name: "Spearman Champion",
		img: "img/Upgrades/SpearmanChampionGreek.png",
		effects: [
			{amount: 25, positive: true, type: "armorPierce"},
			{amount: 25, positive: true, type: "damage"}
		],
		cost: {
			gold: 200
		}
	},
	championHypaspist: {
		isChain: false,
		name: "Hypaspist Champion",
		img: "img/Upgrades/HypaspistChampion.png",
		effects: [
			{amount: 25, positive: true, type: "health"},
			{amount: 15, positive: true, type: "speed"}
		],
		cost: {
			gold: 300
		}
	},
	championHoplite: {
		isChain: false,
		name: "Hoplite Champion",
		img: "img/Upgrades/HopliteChampion.png",
		effects: [
			{amount: 50, positive: true, type: "multiplierCavalry"},
			{amount: 50, positive: true, type: "armorPierce"}
		],
		cost: {
			gold: 1000
		}
	},
	championToxotes: {
		isChain: false,
		name: "Toxotes Champion",
		img: "img/Upgrades/ToxotesChampion.png",
		effects: [
			{amount: 10, positive: true, type: "health"},
			{amount: 10, positive: true, type: "damage"}
		],
		cost: {
			gold: 400
		}
	},
	championPeltast: {
		isChain: false,
		name: "Peltast Champion",
		img: "img/Upgrades/PeltastChampion.png",
		effects: [
			{amount: 25, positive: true, type: "health"},
			{amount: 15, positive: true, type: "speed"}
		],
		cost: {
			gold: 800
		}
	},
	championGastraphetes: {
		isChain: false,
		name: "Gastraphetes Champion",
		img: "img/Upgrades/GastraphetesChampion.png",
		effects: [
			{amount: 25, positive: true, type: "rateOfFire"}
		],
		cost: {
			gold: 1000
		}
	},
	championSarissophoroi: {
		isChain: false,
		name: "Sarissophoroi Champion",
		img: "img/Upgrades/SarissophoroiChampion.png",
		effects: [
			{amount: 40, positive: true, type: "range"},
			{amount: 10, positive: true, type: "speed"}
		],
		cost: {
			gold: 350
		}
	},
	championProdromos: {
		isChain: false,
		name: "Prodromos Champion",
		img: "img/Upgrades/ProdromosChampion.png",
		effects: [
			{amount: 50, positive: true, type: "multiplierSiege"},
			{amount: 50, positive: true, type: "multiplierBuildings"},
			{amount: 50, positive: true, type: "snare"}
		],
		cost: {
			gold: 800
		}
	},
	championHippikon: {
		isChain: false,
		name: "Hippikon Champion",
		img: "img/Upgrades/HippikonChampion.png",
		effects: [
			{amount: -1, positive: true, type: "population", isAbsolute: true}
		],
		cost: {
			gold: 1200
		}
	},
	championBallistaTrireme: {
		name: "Ballista Trireme Champion",
		img: "img/Upgrades/BallistaTriremeChampion.png",
		effects: [
			{amount: 25, positive: true, type: "damage"}
		],
		cost: {
			gold: 800
		}
	},
	championBatteringRam: {
		name: "Battering Ram Champion",
		img: "img/Upgrades/BatteringRamChampion.png",
		effects: [
			{amount: 50, positive: true, type: "damage"},
			{amount: 100, positive: true, type: "snareImmunity"},
		],
		cost: {
			gold: 400
		}
	},
	championBallista: {
		name: "Ballista Champion",
		img: "img/Upgrades/BallistaChampion.png",
		effects: [
			{amount: 20.0, positive: true, type: "speed"}
		],
		cost: {
			gold: 1000
		}
	},
	championChariotArcher: {
		isChain: false,
		name: "Chariot Archer Champion",
		img: "img/Upgrades/ChariotArcherChampion.png",
		effects: [
			{amount: 25, positive: true, type: "health"},
			{amount: 50, positive: true, type: "multiplierInfantry"}
		],
		cost: {
			gold: 800
		}
	},
	championElephantArcher: {
		isChain: false,
		name: "Elephant Archer Champion",
		img: "img/Upgrades/ElephantArcherChampion.png",
		effects: [
			{amount: -1, positive: true, type: "population", isAbsolute: true}
		],
		cost: {
			gold: 1200
		}
	},
	championSlinger: {
		isChain: false,
		name: "Slinger Champion",
		img: "img/Upgrades/SlingerChampion.png",
		effects: [
			{amount: 50, positive: true, type: "armorPierce"},
			{amount: -20, positive: true, type: "timeTrain"},
			{amount: 25, positive: true, type: "vision"}
		],
		cost: {
			gold: 350
		}
	},
	championCamelRider: {
		isChain: false,
		name: "Camel Ride Champion",
		img: "img/Upgrades/CamelRiderChampion.png",
		effects: [
			{amount: 100, positive: true, type: "multiplierRanged"},
			{amount: 25, positive: true, type: "armorPierce"}
		],
		cost: {
			gold: 400
		}
	},
	championWarElephant: {
		isChain: false,
		name: "War Elephant Champion",
		img: "img/Upgrades/WarElephantChampion.png",
		effects: [
			{amount: 25, positive: true, type: "armorPierce"},
			{amount: 50, positive: true, type: "conversionResistance"}
		],
		cost: {
			gold: 1200
		}
	},
	championAxeman: {
		isChain: false,
		name: "Axeman Champion",
		img: "img/Upgrades/AxemanChampion.png",
		effects: [
			{amount: 25, positive: true, type: "health"},
			{amount: 15, positive: true, type: "damage"},
			{amount: 100, positive: true, type: "splash"}
		],
		cost: {
			gold: 350
		}
	},
	championSpearmanEgypt: {
		isChain: false,
		name: "Spearman Champion",
		img: "img/Upgrades/SpearmanChampionEgyptian.png",
		effects: [
			{amount: 25, positive: true, type: "health"},
			{amount: -100, positive: true, type: "costGold"},
			{amount: -50, positive: true, type: "timeTrain"}
		],
		cost: {
			gold: 350
		}
	},
	championCatapultTrireme: {
		isChain: false,
		name: "Catapult Trireme Champion",
		img: "img/Upgrades/CatapultTriremeChampion.png",
		effects: [
			{amount: 25, positive: true, type: "damage"}
		],
		cost: {
			gold: 800
		}
	},
	championTrireme: {
		isChain: false,
		name: "Trireme Champion",
		img: "img/Upgrades/TriremeChampion.png",
		effects: [
			{amount: 15, positive: true, type: "range"},
			{amount: 20, positive: true, type: "speed"}
		],
		cost: {
			gold: 350
		}
	},
	championFireShip: {
		isChain: false,
		name: "Fire Ship Champion",
		img: "img/Upgrades/FireShipChampion.png",
		effects: [
			{amount: 100, positive: true, type: "protection"}
		],
		cost: {
			gold: 600
		}
	},
	championSiegeTower: {
		isChain: false,
		name: "Siege Tower Champion",
		img: "img/Upgrades/SiegeTowerChampion.png",
		effects: [
			{amount: 50, positive: true, type: "health"},
			{amount: 100, positive: true, type: "snareImmunity"}
		],
		cost: {
			gold: 400
		}
	},
	championCatapult: {
		isChain: false,
		name: "Catapult Champion",
		img: "img/Upgrades/CatapultChampion.png",
		effects: [
			{amount: 25, positive: true, type: "damage"}
		],
		cost: {
			gold: 1200
		}
	},
	championPalintonon: {
		isChain: false,
		name: "Palintonon Champion",
		img: "img/Upgrades/PalintononChampion.png",
		effects: [
			{amount: 20, positive: true, type: "range"},
			{amount: 20, positive: true, type: "vision"}
		],
		cost: {
			gold: 1200
		}
	},
	championSparabara: {
		isChain: false,
		name: "Sparabara Champion",
		img: "img/Upgrades/SparabaraChampion.png",
		effects: [
			{amount: 15, positive: true, type: "health"},
			{amount: 15, positive: true, type: "snare"}
		],
		cost: {
			gold: 250
		}
	},
	championGalley: {
		isChain: false,
		name: "Galley Champion",
		img: "img/Upgrades/GalleyChampion.png",
		effects: [
			{amount: 15, positive: true, type: "range"},
			{amount: 20, positive: true, type: "speed"}
		],
		cost: { /* TODO UNKNOWN */ }
	},
	championSpearmanPersia: {
		isChain: false,
		name: "Spearman Champion",
		img: "img/Upgrades/SpearmanChampionPersian.png",
		effects: [
			{amount: 20, positive: true, type: "multiplierCavalry"},
			{amount: 15, positive: true, type: "speed"}
		],
		cost: {
			gold: 400
		}
	},
	championBowman: {
		isChain: false,
		name: "Bowman Champion",
		img: "img/Upgrades/BowmanChampion.png",
		effects: [
			{amount: 25, positive: true, type: "rateOfFire"}
		],
		cost: {
			gold: 400
		}
	},
	championAsabara: {
		isChain: false,
		name: "Asabara Champion",
		img: "img/Upgrades/AsabaraChampion.png",
		effects: [
			{amount: 10, positive: true, type: "health"},
			{amount: 10, positive: true, type: "damage"},
			{amount: 10, positive: true, type: "speed"}
		],
		cost: {
			gold: 400
		}
	},
	championMangonelGalley: {
		isChain: false,
		name: "Mangone Galley Champion",
		img: "img/Upgrades/MangonelGalleyChampion.png",
		effects: [
			{amount: 25, positive: true, type: "damage"}
		],
		cost: { /* TODO UNKNOWN */ }
	},
	championRamShipPersia: {
		isChain: false,
		name: "Ram Ship Champion",
		img: "img/Upgrades/RamShipChampionPersian.png",
		effects: [
			{amount: 25, positive: true, type: "multiplierBuildings"},
			{amount: 20, positive: true, type: "speed"}
		],
		cost: { /* TODO UNKNOWN */ }
	},
	championImmortal: {
		isChain: false,
		name: "Immortal Champion",
		img: "img/Upgrades/ImmortalChampion.png",
		effects: [
			{amount: -1, positive: true, type: "population", isAbsolute: true}
		],
		cost: {
			gold: 1200
		}
	},
	championTakabara: {
		isChain: false,
		name: "Takabara Champion",
		img: "img/Upgrades/TakabaraChampion.png",
		effects: [
			{amount: 20, positive: true, type: "range"}
		],
		cost: {
			gold: 800
		}
	},
	championCataphract: {
		isChain: false,
		name: "Cataphract Champion",
		img: "img/Upgrades/CataphractChampion.png",
		effects: [
			{amount: 20, positive: true, type: "damage"},
			{amount: 50, positive: true, type: "armorPierce"}
		],
		cost: {
			gold: 1200
		}
	},
	championMountedArcher: {
		isChain: false,
		name: "Mounted Archer Champion",
		img: "img/Upgrades/MountedArcherChampion.png",
		effects: [
			{amount: -50, positive: true, type: "costGold"},
			{amount: 50, positive: true, type: "multiplierCavalry"}
		],
		cost: {
			gold: 800
		}
	},
	championBatteringRamPersia: {
		isChain: false,
		name: "Battering Ram Champion",
		img: "img/Upgrades/BatteringRamChampion.png",
		effects: [
			{amount: 25, positive: true, type: "damage"},
			{amount: 15, positive: true, type: "speed"},
			{amount: 100, positive: true, type: "snareImmunity"}
		],
		cost: {
			gold: 1000
		}
	},
	championWarWagon: {
		isChain: false,
		name: "War Wagon Champion",
		img: "img/Upgrades/WarWagonChampion.png",
		effects: [
			{amount: 25, positive: true, type: "health"},
			{amount: 100, positive: true, type: "splash"}
		],
		cost: {
			gold: 1200
		}
	},
	championSpearmanCelt: {
		isChain: false,
		name: "Spearman Champion",
		img: "img/Upgrades/SpearmanChampionCeltic.png",
		effects: [
			{amount: 25, positive: true, type: "multiplierCavalry"},
			{amount: 25, positive: true, type: "multiplierBuildings"}
		],
		cost: {
			gold: 200
		}
	},
	championSwanship: {
		isChain: false,
		name: "Swanship Champion",
		img: "img/Upgrades/SwanshipChampion.png",
		effects: [
			{amount: 50, positive: true, type: "health"}
		],
		cost: {
			gold: 400
		}
	},
	championLongSwordsman: {
		isChain: false,
		name: "Long Swordsman Champion",
		img: "img/Upgrades/LongSwordsmanChampion.png",
		effects: [
			{amount: 25, positive: true, type: "armorInfantry"},
			{amount: 25, positive: true, type: "armorPierce"}
		],
		cost: {
			gold: 300
		}
	},
	championSlingerCelt: {
		isChain: false,
		name: "Slinger Champion",
		img: "img/Upgrades/SlingerChampion.png",
		effects: [
			{amount: 25, positive: true, type: "multiplierVillager"},
			{amount: 15, positive: true, type: "speed"}
		],
		cost: {
			gold: 300
		}
	},
	championWoadRaider: {
		isChain: false,
		name: "Woad Raider Champion",
		img: "img/Upgrades/WoadRaiderChampion.png",
		effects: [
			{amount: 100, positive: true, type: "splash"},
			{amount: 100, positive: true, type: "snareImmunity"}
		],
		cost: {
			gold: 1000
		}
	},
	championChampion: {
		isChain: false,
		name: "Champion Champion",
		img: "img/Upgrades/ChampionChampion.png",
		effects: [
			{amount: 35, positive: true, type: "damage"},
			{amount: 35, positive: true, type: "health"},
			{amount: 50, positive: false, type: "cost"},
			{amount: 1, positive: false, type: "population", isAbsolute: true}
		],
		cost: {
			gold: 1000
		}
	},
	championBowmanCelt: {
		isChain: false,
		name: "Bowman Champion",
		img: "img/Upgrades/BowmanChampion.png",
		effects: [
			{amount: 20, positive: true, type: "range"}
		],
		cost: {
			gold: 1000
		}
	},
	championHorseman: {
		isChain: false,
		name: "Horseman Champion",
		img: "img/Upgrades/HorsemanChampion.png",
		effects: [
			{amount: 25, positive: true, type: "armorPierce"},
			{amount: 50, positive: true, type: "snare"}
		],
		cost: {
			gold: 800
		}
	},
	championRam: {
		isChain: false,
		name: "Ram Champion",
		img: "img/Upgrades/RamChampion.png",
		effects: [
			{amount: 25, positive: true, type: "armorPierce"},
			{amount: -40, positive: true, type: "timeTrain"},
			{amount: 100, positive: true, type: "snareImmunity"}
		],
		cost: {
			gold: 600
		}
	},
	championStoneThrower: {
		isChain: false,
		name: "Stone Thrower Champion",
		img: "img/Upgrades/StoneThrowerChampion.png",
		effects: [
			{amount: 50, positive: true, type: "multiplierSiege"},
			{amount: -1, positive: true, type: "population", isAbsolute: true}
		],
		cost: {
			gold: 1200
		}
	},
	championCarpentom: {
		isChain: false,
		name: "Carpentom Champion",
		img: "img/Upgrades/CarpentomChampion.png",
		effects: [
			{amount: 10, positive: true, type: "speed"},
			{amount: 100, positive: true, type: "splash"}
		],
		cost: {
			gold: 1000
		}
	},
	championSpearmanBabylon: {
		isChain: false,
		name: "Spearman Champion",
		img: "img/Upgrades/SpearmanChampionBabylonian.png",
		effects: [
			{amount: 25, positive: true, type: "damage"},
			{amount: 20, positive: true, type: "snare"}
		],
		cost: {
			gold: 200
		}
	},
	championBireme: {
		isChain: false,
		name: "Bireme Champion",
		img: "img/Upgrades/BiremeChampion.png",
		effects: [
			{amount: 15, positive: true, type: "range"},
			{amount: 20, positive: true, type: "speed"}
		],
		cost: { /* TODO UNKNOWN */ }
	},
	championShieldBearer: {
		isChain: false,
		name: "Shield Bearer Champion",
		img: "img/Upgrades/ShieldBearerChampion.png",
		effects: [
			{amount: 50, positive: true, type: "armorPierce"}
		],
		cost: {
			gold: 450
		}
	},
	championSlingerBabylon: {
		isChain: false,
		name: "Slinger Champion",
		img: "img/Upgrades/SlingerChampionBabylonian.png",
		effects: [
			{amount: 100, positive: true, type: "bonusDamageImmunity"}
		],
		cost: {
			gold: 450
		}
	},
	championBowmanBabylon: {
		isChain: false,
		name: "Bowman Champion",
		img: "img/Upgrades/BowmanChampionBabylonian.png",
		effects: [
			{amount: -100, positive: true, type: "costGold"},
			{amount: -20, positive: true, type: "timeTrain"}
		],
		cost: {
			gold: 450
		}
	},
	championLancer: {
		isChain: false,
		name: "Lancer Champion",
		img: "img/Upgrades/ChampionLancer.png",
		effects: [
			{amount: 20, positive: true, type: "health"},
			{amount: 175, positive: true, type: "chargeAttack"}
		],
		cost: {
			gold: 450
		}
	},
	championRamShipBabylon: {
		isChain: false,
		name: "Ram Ship Champion",
		img: "img/Upgrades/RamShipChampionBabylonian.png",
		effects: [
			{amount: 25, positive: true, type: "multiplierBuildings"},
			{amount: 20, positive: true, type: "speed"}
		],
		cost: { /* TODO UNKNOWN */ }
	},
	championRoyalGuard: {
		isChain: false,
		name: "Royal Guard Champion",
		img: "img/Upgrades/RoyalGuardChampionBabylonian.png",
		effects: [
			{amount: 50, positive: true, type: "attackRate"},
			{amount: -50, positive: false, type: "multiplierBuildings"}
		],
		cost: {
			gold: 1200
		}
	},
	championSapper: {
		isChain: false,
		name: "Sapper Champion",
		img: "img/Upgrades/SapperChampion.png",
		effects: [
			{amount: -100, positive: true, type: "costFood"},
			{amount: 50, positive: true, type: "multiplierBuildings"},
			{amount: 15, positive: true, type: "speed"}
		],
		cost: {
			gold: 800
		}
	},
	championChariotArcherBabylon: {
		isChain: false,
		name: "Chariot Archer Champion",
		img: "img/Upgrades/ChariotArcherChampionBabylonian.png",
		effects: [
			{amount: -50, positive: true, type: "cost"},
			{amount: -20, positive: false, type: "health"}
		],
		cost: {
			gold: 800
		}
	},
	championMountedArcherBabylon: {
		isChain: false,
		name: "Mounted Archer Champion",
		img: "img/Upgrades/MountedArcherChampionBabylonian.png",
		effects: [
			{amount: 25, positive: true, type: "damage"},
			{amount: 25, positive: true, type: "snare"}
		],
		cost: {
			gold: 1000
		}
	},
	championSiegeTowerBabylon: {
		isChain: false,
		name: "Siege Tower Champion",
		img: "img/Upgrades/SiegeTowerChampionBabylonian.png",
		effects: [
			{amount: 100, positive: true, type: "health"},
			{amount: 100, positive: true, type: "splash"},
			{amount: 100, positive: true, type: "snareImmunity"}
		],
		cost: {
			gold: 1000
		}
	},
	championSpearmanNorse: {
		isChain: false,
		name: "Spearman Champion",
		img: "img/Upgrades/SpearmanChampionNorse.png",
		effects: [
			{amount: 15, positive: true, type: "multiplierCavalry"},
			{amount: 25, positive: true, type: "health"}
		],
		cost: {
			gold: 250
		}
	},
	championLongship: {
		isChain: false,
		name: "Longship Champion",
		img: "img/Upgrades/LongshipChampion.png",
		effects: [
			{amount: 15, positive: true, type: "damage"}
		],
		cost: {
			gold: 350
		}
	},
	championThrowingAxeman: {
		isChain: false,
		name: "Throwing Axeman Champion",
		img: "img/Upgrades/ThrowingAxemanChampion.png",
		effects: [
			{amount: 40, positive: true, type: "ignoreArmor"}
		],
		cost: {
			gold: 300
		}
	},
	championSkirmisher: {
		isChain: false,
		name: "Skirmisher Champion",
		img: "img/Upgrades/SkirmisherChampion.png",
		effects: [
			{amount: 50, positive: true, type: "multiplierRanged"},
			{amount: -25, positive: true, type: "timeTrain"}
		],
		cost: {
			gold: 300
		}
	},
	championRaider: {
		isChain: false,
		name: "Raider Champion",
		img: "img/Upgrades/RaiderChampion.png",
		effects: [
			{amount: 100, positive: true, type: "multiplierVillager"},
			{amount: 100, positive: true, type: "snareImmunity"}
		],
		cost: {
			gold: 300
		}
	},
	agogeDiscipline: {
		isChain: false,
		name: "Agoge Discipline",
		img: "img/Upgrades/AgogeDiscipline.png",
		effects: [
			{amount: -25.0, positive: true, type: "timeTrain"}
		],
		cost: {
			food: 200,
			gold: 100
		}
	},
	murderHoles: {
		isChain: false,
		name: "Murder Holes",
		img: "img/Upgrades/MurderHoles.png",
		effects: [
			{amount: 25, positive: true, type: "damage"}
		],
		cost: {
			wood: 50,
			gold: 50
		}
	},
	ashlarMasonry: {
		isChain: false,
		name: "Ashlar Masonry",
		img: "img/Upgrades/AshlarMasonry.png",
		effects: [
			{amount: 25.0, positive: true, type: "health"}
		],
		cost: {
			wood: 100,
			stone: 100
		}
	},
	greekFire: {
		isChain: false,
		name: "Greek Fire",
		img: "img/Upgrades/GreekFire.png",
		effects: [
			{amount: 50.0, positive: true, type: "multiplierBuildings"},
			{amount: 25.0, positive: true, type: "multiplierSiege"},
			{amount: 25.0, positive: true, type: "multiplierShips"}
		],
		cost: {
			wood: 200,
			gold: 300
		}
	},
	divineVision: {
		isChain: false,
		name: "Divine vision",
		img: "img/Upgrades/DivineVision.png",
		effects: [
			{amount: 20.0, positive: true, type: "conversionRange"},
			{amount: 20.0, positive: true, type: "vision"}
		],
		cost: {
			wood: 200,
			gold: 300
		}
	},
	touchofRa: {
		isChain: false,
		name: "Touch of Ra ",
		img: "img/Upgrades/TouchofRa.png",
		effects: [
			{amount: 40, positive: true, type: "healRate"}
		],
		cost: {
			food: 150,
			gold: 150
		}
	},
	sightoftheSun: {
		isChain: false,
		name: "Sight of the Sun",
		img: "img/Upgrades/SightoftheSun.png",
		effects: [
			{amount: 25, positive: true, type: "healRange"},
			{amount: 25, positive: true, type: "conversionRange"},
			{amount: 25, positive: true, type: "chaosRange"},
			{amount: 25, positive: true, type: "vision"},
		],
		cost: {
			food: 150,
			gold: 150
		}
	},
	paidinBlood: {
		isChain: false,
		name: "Paid in Blood",
		img: "img/Upgrades/PaidinBlood.png",
		effects: [
			{amount: -30, positive: true, type: "cost"}
		],
		cost: {
			food: 200,
			gold: 200
		}
	},
	essenceoftheCobra: {
		isChain: false,
		name: "Essence of the Cobra",
		img: "img/Upgrades/EssenceoftheCobra.png",
		effects: [
			{amount: 30, positive: true, type: "speed"}
		],
		cost: {
			food: 200,
			gold: 200
		}
	},
	divineProduction: {
		isChain: false,
		name: "Divine Production",
		img: "img/Upgrades/DivineProduction.png",
		effects: [
			{amount: -40, positive: true, type: "timeTrain"}
		],
		cost: {
			food: 250,
			gold: 250
		}
	},
	strengthoftheGods: {
		isChain: false,
		name: "Strength of the Gods",
		img: "img/Upgrades/StrengthoftheGods.png",
		effects: [
			{amount: 50, positive: true, type: "health"}
		],
		cost: {
			food: 250,
			gold: 250
		}
	},
	rigorousTraining: {
		isChain: false,
		name: "Rigorous Training",
		img: "img/Upgrades/RigorousTraining.png",
		effects: [
			{amount: -30, positive: true, type: "timeTrain"},
			{amount: 15, positive: false, type: "cost"}
		],
		cost: {}
	},
	shieldWall: {
		isChain: false,
		name: "Shield Wall",
		img: "img/Upgrades/ShieldWall.png",
		effects: [
			{amount: 20, positive: true, type: "health"},
			{amount: 180, positive: true, type: "armorCrush"},
			{amount: -10, positive: false, type: "speed"}
		],
		cost: {
			food: 250,
			gold: 250
		}
	},
	royalRoads: {
		isChain: false,
		name: "Royal Roads",
		img: "img/Upgrades/RoyalRoads.png",
		effects: [
			{amount: 20, positive: true, type: "speed"}
		],
		cost: { /* TODO UNKNOWN */ }
	},
	paidLabor: {
		isChain: false,
		name: "Paid Labor",
		img: "img/Upgrades/PaidLabor.png",
		effects: [
			{amount: -45, positive: true, type: "timeTrain"},
			{amount: -40, positive: true, type: "costFood", isAbsolute: true},
			{amount: 40, positive: false, type: "costGold", isAbsolute: true}
		],
		cost: { /* TODO UNKNOWN */ }
	},
	withoutNumber: {
		isChain: false,
		name: "Whithout Number",
		img: "img/Upgrades/WithoutNumber.png",
		effects: [
			{amount: 50, positive: true, type: "conversionRate"}
		],
		cost: {
			gold: 1000
		}
	},
	relentlessZeal: {
		isChain: false,
		name: "Relentless Zeal",
		img: "img/Upgrades/RelentlessZeal.png",
		effects: [
			{amount: -60, positive: true, type: "timeTrain"},
			{amount: 30, positive: false, type: "cost"}
		],
		cost: {}
	},
	blotOuttheSun: {
		isChain: false,
		name: "Blot Out the Sun",
		img: "img/Upgrades/BlotOuttheSun.png",
		effects: [
			{amount: 30, positive: true, type: "range"},
			{amount: -15, positive: false, type: "health"}
		],
		cost: {
			wood: 500,
			gold: 500
		}
	},
	giftOfBalor: {
		isChain: false,
		name: "Gift of Balor",
		img: "img/Upgrades/GiftofBalor.png",
		effects: [
			{amount: 25, positive: true, type: "health"},
			{amount: 25, positive: true, type: "damage"}
		],
		cost: {
			food: 100,
			gold: 150
		}
	},
	callToArms: {
		isChain: false,
		name: "Call to Arms",
		img: "img/Upgrades/CalltoArms.png",
		effects: [
			{amount: 150, positive: true, type: "damage"}
		],
		cost: {
			food: 150,
			gold: 150
		}
	},
	woodenRoads: {
		isChain: false,
		name: "Wooden Roads",
		img: "img/Upgrades/WoodenRoads.png",
		effects: [
			{amount: 20, positive: true, type: "speed"}
		],
		cost: {
			wood: 300,
			gold: 300
		}
	},
	cargoExpansion: {
		isChain: false,
		name: "Cargo Expansion",
		img: "img/Upgrades/CargoExpansion.png",
		effects: [
			{amount: 8, positive: true, type: "carryCapacity", isAbsolute: true}
		],
		cost: {
			gold: 100
		}
	},
	giftOfSequana: {
		isChain: false,
		name: "Gift of Sequana",
		img: "img/Upgrades/GiftofSequana.png",
		effects: [
			{amount: 40, positive: true, type: "healRate"}
		],
		cost: {
			food: 200,
			gold: 300
		}
	},
	riteOfDamara: {
		isChain: false,
		name: "Rite of Damara",
		img: "img/Upgrades/RiteofDamara.png",
		effects: [
			{amount: -20, positive: true, type: "timeTrain"}
		],
		cost: { /* TODO UNKNOWN */ }
	},
	riteOfRatis: {
		isChain: false,
		name: "Rite of Ratis",
		img: "img/Upgrades/RiteofRatis.png",
		effects: [
			{amount: 50, positive: true, type: "multiplierBuildings"}
		],
		cost: { /* TODO UNKNOWN */ }
	},
	brewing: {
		isChain: false,
		name: "Brewing",
		img: "img/Upgrades/Brewing.png",
		effects: [
			{amount: 10, positive: true, type: "health"}
		],
		cost: {
			food: 500
		}
	},
	furorCeltica: {
		isChain: false,
		name: "Furor Celtica",
		img: "img/Upgrades/FurorCeltica.png",
		effects: [
			{amount: 10, positive: true, type: "speed"}
		],
		cost: {
			food: 250,
			gold: 250
		}
	},
	headhunting: {
		isChain: false,
		name: "Headhunting",
		img: "img/Upgrades/Headhunting.png",
		effects: [
			{amount: 10, positive: true, type: "damage"}
		],
		cost: {
			gold: 1200
		}
	},
	riteOfRudiobus: {
		isChain: false,
		name: "Rite of Rudiobus",
		img: "img/Upgrades/RiteofRudiobus.png",
		effects: [
			{amount: 15, positive: true, type: "speed"}
		],
		cost: { /* TODO UNKNOWN */ }
	},
	riteOfAndrastra: {
		isChain: false,
		name: "Rite of Andrastra",
		img: "img/Upgrades/RiteofAndrastra.png",
		effects: [
			{amount: 15, positive: true, type: "damage"}
		],
		cost: { /* TODO UNKNOWN */ }
	},
	fortifiedTowerLone: {
		isChain: false,
		name: "Fortified Tower",
		img: "img/Upgrades/FortifiedTower.png",
		effects: [
			{amount: 30, positive: true, type: "health"},
			{amount: 30, positive: true, type: "damage"}
		],
		cost: {
			wood: 200,
			gold: 300
		}
	},
	tower: {
		isChain: true,
		noneTower: {
			isChain: false,
			name: "None",
			img: "img/Slot/GearSlotGeneric_ua.png",
			effects: [],
			cost: {}
		},
		fortifiedTower: {
			isChain: false,
			name: "Fortified Tower",
			img: "img/Upgrades/FortifiedTower.png",
			effects: [
				{amount: 30, positive: true, type: "health"},
				{amount: 30, positive: true, type: "damage"}
			],
			cost: {
				wood: 200,
				gold: 300
			}
		},
		strongholdTower: {
			isChain: false,
			name: "Stronghold Tower",
			img: "img/Upgrades/StrongholdTower.png",
			effects: [
				{amount: 30, positive: true, type: "health"},
				{amount: 30, positive: true, type: "damage"}
			],
			cost: {
				wood: 300,
				gold: 500
			}
		},
	},
	saddleBags: {
		isChain: false,
		name: "Saddle Bags",
		img: "img/Upgrades/SaddleBags.png",
		effects: [
			{amount: 20, positive: true, type: "trade"}
		],
		cost: {
			food: 500,
			wood: 500
		}
	},
	townWatch: {
		isChain: false,
		name: "Town Watch",
		img: "img/Upgrades/TownWatch.png",
		effects: [
			{amount: 25, positive: true, type: "vision"}
		],
		cost: {
			food: 100
		}
	},
	reinforcedCart: {
		isChain: false,
		name: "Reinforced Cart",
		img: "img/Upgrades/ReinforcedCart.png",
		effects: [
			{amount: 50, positive: true, type: "health"}
		],
		cost: {
			wood: 100
		}
	},
	pharmacology: {
		isChain: false,
		name: "Pharmacology",
		img: "img/Upgrades/Pharmacology.png",
		effects: [
			{amount: 1, positive: true, type: "regen", isAbsolute: true}
		],
		cost: {
			food: 200
		}
	},
	cargoExpansionBabylon: {
		isChain: false,
		name: "Cargo Expansion",
		img: "img/Upgrades/CargoExpansion.png",
		effects: [
			{amount: 8, positive: true, type: "carryCapacity", isAbsolute: true}
		],
		cost: {
			wood: 150,
			gold: 150
		}
	},
	ironWheels: {
		isChain: false,
		name: "Iron Wheels",
		img: "img/Upgrades/IronWheels.png",
		effects: [
			{amount: 10, positive: true, type: "health"},
			{amount: 10, positive: true, type: "speed"}
		],
		cost: {
			wood: 200,
			gold: 200
		}
	},
	ironWheelsCart: {
		isChain: false,
		name: "Iron Wheels",
		img: "img/Upgrades/IronWheels.png",
		effects: [
			{amount: 10, positive: true, type: "health"},
			{amount: 20, positive: true, type: "speed"}
		],
		cost: {
			wood: 200,
			gold: 200
		}
	},
	arithmetic: {
		isChain: false,
		name: "Arithmetic",
		img: "img/Upgrades/Arithmetic.png",
		effects: [
			{amount: -25, positive: true, type: "cost"},
			{amount: -25, positive: true, type: "timeBuilding"}
		],
		cost: {
			wood: 350,
			gold: 350
		}
	},
	totalWar: {
		isChain: false,
		name: "Total War",
		img: "img/Upgrades/TotalWar.png",
		effects: [
			{amount: 10, positive: true, type: "damage"},
			{amount: 50, positive: true, type: "multiplierVillager"}
		],
		cost: {
			food: 300,
			wood: 300,
			gold: 300
		}
	},
	codeofHammurabi: {
		isChain: false,
		name: "Code of Hammurabi",
		img: "img/Upgrades/CodeofHammurabi.png",
		effects: [
			{amount: 25, positive: true, type: "conversionRate"},
			{amount: 25, positive: true, type: "vision"},
			{amount: 10, positive: true, type: "conversionRange"}
		],
		cost: {
			gold: 1200
		}
	},
	dogTraining: {
		isChain: false,
		name: "Dog Training",
		img: "img/Upgrades/DogTraining.png",
		effects: [
			{amount: -30, positive: true, type: "timeTrain"},
			{amount: 12, positive: true, type: "buildLimit", isAbsolute: true}
		],
		cost: {
			food: 100,
			wood: 150
		}
	},
	burningPitch: {
		isChain: false,
		name: "Burning Pitch",
		img: "img/Upgrades/BurningPitch.png",
		effects: [
			{amount: 80, positive: true, type: "burning"}
		],
		cost: {
			food: 300,
			wood: 300
		}
	},
	netLuresLone: {
		isChain: false,
		name: "Net Lures",
		img: "img/Upgrades/NetLures.png",
		effects: [
			{amount: 20.0, positive: true, type: "gatherFish"},
			{amount: 50.0, positive: true, type: "carryCapacity"}
		],
		cost: {
			wood: 75,
			gold: 50
		}
	},
	fishing: {
		isChain: true,
		noneFishing: {
			isChain: false,
			name: "None",
			img: "img/Slot/GearSlotGeneric_ua.png",
			effects: [],
			cost: {}
		},
		netLures: {
			isChain: false,
			name: "Net Lures",
			img: "img/Upgrades/NetLures.png",
			effects: [
				{amount: 20.0, positive: true, type: "gatherFish"},
				{amount: 50.0, positive: true, type: "carryCapacity"}
			],
			cost: {
				wood: 75,
				gold: 50
			}
		},
		netWeights: {
			isChain: false,
			name: "Net Weights",
			img: "img/Upgrades/NetWeights.png",
			effects: [
				{amount: 20.0, positive: true, type: "gatherFish"},
				{amount: 50.0, positive: true, type: "carryCapacity"}
			],
			cost: {
				wood: 150,
				gold: 100
			}
		},
		netLandline: {
			isChain: false,
			name: "Net Landline",
			img: "img/Upgrades/NetLandline.png",
			effects: [
				{amount: 20.0, positive: true, type: "gatherFish"},
				{amount: 50.0, positive: true, type: "carryCapacity"}
			],
			cost: {
				wood: 300,
				gold: 200
			}
		}
	},
	fishingPartial: {
		isChain: true,
		noneFishingPartial: {
			isChain: false,
			name: "None",
			img: "img/Slot/GearSlotGeneric_ua.png",
			effects: [],
			cost: {}
		},
		netLuresPartial: {
			isChain: false,
			name: "Net Lures",
			img: "img/Upgrades/NetLures.png",
			effects: [
				{amount: 20.0, positive: true, type: "gatherFish"},
				{amount: 50.0, positive: true, type: "carryCapacity"}
			],
			cost: {
				wood: 75,
				gold: 50
			}
		},
		netWeightsPartial: {
			isChain: false,
			name: "Net Weights",
			img: "img/Upgrades/NetWeights.png",
			effects: [
				{amount: 20.0, positive: true, type: "gatherFish"},
				{amount: 50.0, positive: true, type: "carryCapacity"}
			],
			cost: {
				wood: 150,
				gold: 100
			}
		}
	},
	stables: {
		isChain: true,
		noneStables: {
			isChain: false,
			name: "None",
			img: "img/Slot/GearSlotGeneric_ua.png",
			effects: [],
			cost: {}
		},
		horsemanship: {
			isChain: false,
			name: "Horsemanship",
			img: "img/Upgrades/Horsemanship.png",
			effects: [
				{amount: 10.0, positive: true, type: "speed"}
			],
			cost: {
				food: 150,
				gold: 100
			}
		},
		purebred: {
			isChain: false,
			name: "Purebred",
			img: "img/Upgrades/Purebred.png",
			effects: [
				{amount: 10.0, positive: true, type: "speed"}
			],
			cost: {
				food: 300,
				gold: 200
			}
		},
		horseshoes: {
			isChain: false,
			name: "Horseshoes",
			img: "img/Upgrades/Horseshoes.png",
			effects: [
				{amount: 10.0, positive: true, type: "health"},
				{amount: 10.0, positive: true, type: "damage"},
				{amount: 5.0, positive: true, type: "speed"},
			],
			cost: {
				food: 900,
				gold: 600
			}
		},
	},
	stablesNorse: {
		isChain: true,
		noneStablesNorse: {
			isChain: false,
			name: "None",
			img: "img/Slot/GearSlotGeneric_ua.png",
			effects: [],
			cost: {}
		},
		purebredNorse: {
			isChain: false,
			name: "Purebred",
			img: "img/Upgrades/Purebred.png",
			effects: [
				{amount: 10.0, positive: true, type: "speed"}
			],
			cost: {
				food: 300,
				gold: 200
			}
		},
		horseshoesNorse: {
			isChain: false,
			name: "Horseshoes",
			img: "img/Upgrades/Horseshoes.png",
			effects: [
				{amount: 10.0, positive: true, type: "health"},
				{amount: 10.0, positive: true, type: "damage"},
				{amount: 5.0, positive: true, type: "speed"},
			],
			cost: {
				food: 900,
				gold: 600
			}
		},
	},
	stablesEgypt: {
		isChain: true,
		noneStablesEgypt: {
			isChain: false,
			name: "None",
			img: "img/Slot/GearSlotGeneric_ua.png",
			effects: [],
			cost: {}
		},
		mountedTraining: {
			isChain: false,
			name: "Mounted Training",
			img: "img/Upgrades/MountedTraining.png",
			effects: [
				{amount: 10.0, positive: true, type: "speed"}
			],
			cost: {
				food: 150,
				gold: 100
			}
		},
		purebredEgypt: {
			isChain: false,
			name: "Purebred",
			img: "img/Upgrades/Purebred.png",
			effects: [
				{amount: 10.0, positive: true, type: "speed"}
			],
			cost: {
				food: 300,
				gold: 200
			}
		},
		desertConditioning: {
			isChain: false,
			name: "Desert Conditioning",
			img: "img/Upgrades/DesertConditioning.png",
			effects: [
				{amount: 10.0, positive: true, type: "health"},
				{amount: 10.0, positive: true, type: "damage"},
				{amount: 5.0, positive: true, type: "speed"},
			],
			cost: {
				food: 900,
				gold: 600
			}
		},
	},
	barracks: {
		isChain: true,
		noneBarracks: {
			isChain: false,
			name: "None",
			img: "img/Slot/GearSlotGeneric_ua.png",
			effects: [],
			cost: {}
		},
		conditioning: {
			isChain: false,
			name: "Conditioning",
			img: "img/Upgrades/Conditioning.png",
			effects: [
				{amount: -20, positive: true, type: "timeTrain"}
			],
			cost: {
				food: 150,
				gold: 100
			}
		},
		combinedArms: {
			isChain: false,
			name: "Combined Arms",
			img: "img/Upgrades/CombinedArms.png",
			effects: [
				{amount: -30, positive: true, type: "timeTrain"}
			],
			cost: {
				food: 300,
				gold: 200
			}
		},
		closeCombatExpertise: {
			isChain: false,
			name: "Close-Combat Expertise",
			img: "img/Upgrades/Close-CombatExpertise.png",
			effects: [
				{amount: 15, positive: true, type: "health"},
				{amount: 15, positive: true, type: "damage"}
			],
			cost: {
				food: 900,
				gold: 600
			}
		}		
	},
	archery: {
		isChain: true,
		noneArchery: {
			isChain: false,
			name: "None",
			img: "img/Slot/GearSlotGeneric_ua.png",
			effects: [],
			cost: {}
		},
		marksmanship: {
			isChain: false,
			name: "Marksmanship",
			img: "img/Upgrades/Marksmanship.png",
			effects: [
				{amount: 20, positive: true, type: "vision"}
			],
			cost: {
				wood: 75,
				gold: 50
			}
		},
		improvedFletching: {
			isChain: false,
			name: "Improved Fletching",
			img: "img/Upgrades/ImprovedFletching.png",
			effects: [
				{amount: 30, positive: true, type: "vision"}
			],
			cost: {
				wood: 150,
				gold: 100
			}
		},
		compositeBow: {
			isChain: false,
			name: "Composite Bow",
			img: "img/Upgrades/CompositeBow.png",
			effects: [
				{amount: 10, positive: true, type: "damage"},
				{amount: 20, positive: true, type: "range"}
			],
			cost: {
				wood: 900,
				gold: 600
			}
		}		
	},
	armoryMelee: {
		isChain: true,
		noneArmoryMelee: {
			isChain: false,
			name: "None",
			img: "img/Slot/GearSlotGeneric_ua.png",
			effects: [],
			cost: {}
		},
		temper: {
			isChain: false,
			name: "Temper",
			img: "img/Upgrades/Temper.png",
			effects: [
				{amount: 20.0, positive: true, type: "damage"}
			],
			cost: {
				wood: 150,
				gold: 150,
				stone: 75
			}
		},
		ironSmelting: {
			isChain: false,
			name: "Iron Smelting",
			img: "img/Upgrades/IronSmelting.png",
			effects: [
				{amount: 20.0, positive: true, type: "damage"}
			],
			cost: {
				wood: 300,
				gold: 300,
				stone: 150
			}
		},
		damascusSteel: {
			isChain: false,
			name: "Damascus Steel",
			img: "img/Upgrades/DamascusSteel.png",
			effects: [
				{amount: 20.0, positive: true, type: "damage"}
			],
			cost: {
				wood: 600,
				gold: 600,
				stone: 300
			}
		}
	},
	armoryArrows: {
		isChain: true,
		noneArmoryArrows: {
			isChain: false,
			name: "None",
			img: "img/Slot/GearSlotGeneric_ua.png",
			effects: [],
			cost: {}
		},
		barbedArrows: {
			isChain: false,
			name: "Barbed Arrows",
			img: "img/Upgrades/BarbedArrows.png",
			effects: [
				{amount: 20.0, positive: true, type: "damage"}
			],
			cost: {
				wood: 150,
				gold: 150,
				stone: 75
			}
		},
		broadheadArrows: {
			isChain: false,
			name: "Broadhead Arrows",
			img: "img/Upgrades/BroadheadArrows.png",
			effects: [
				{amount: 20.0, positive: true, type: "damage"}
			],
			cost: {
				wood: 300,
				gold: 300,
				stone: 150
			}
		},
		bodkinArrows: {
			isChain: false,
			name: "Bodkin Arrows",
			img: "img/Upgrades/BodkinArrows.png",
			effects: [
				{amount: 20.0, positive: true, type: "damage"}
			],
			cost: {
				wood: 600,
				gold: 600,
				stone: 300
			}
		}
	},
	armoryArmor: {
		isChain: true,
		noneArmoryArmor: {
			isChain: false,
			name: "None",
			img: "img/Slot/GearSlotGeneric_ua.png",
			effects: [],
			cost: {}
		},
		scaleMail: {
			isChain: false,
			name: "Scale Mail",
			img: "img/Upgrades/ScaleMail.png",
			effects: [
				{amount: 20.0, positive: true, type: "armorInfantry"},
				{amount: 20.0, positive: true, type: "armorCavalry"}
			],
			cost: {
				wood: 150,
				gold: 150,
				stone: 75
			}
		},
		chainMail: {
			isChain: false,
			name: "Chain Mail",
			img: "img/Upgrades/ChainMail.png",
			effects: [
				{amount: 20.0, positive: true, type: "armorInfantry"},
				{amount: 20.0, positive: true, type: "armorCavalry"}
			],
			cost: {
				wood: 300,
				gold: 300,
				stone: 150
			}
		},
		laminarArmor: {
			isChain: false,
			name: "Laminar Armor",
			img: "img/Upgrades/LaminarArmor.png",
			effects: [
				{amount: 20.0, positive: true, type: "armorInfantry"},
				{amount: 20.0, positive: true, type: "armorCavalry"}
			],
			cost: {
				wood: 600,
				gold: 600,
				stone: 300
			}
		}
	},
	armoryArmorEgyptian: {
		isChain: true,
		noneArmoryArmorEgyptian: {
			isChain: false,
			name: "None",
			img: "img/Slot/GearSlotGeneric_ua.png",
			effects: [],
			cost: {}
		},
		scaleMailAndHide: {
			isChain: false,
			name: "Scale Mail and Hide Armor",
			img: "img/Upgrades/ScaleMailandHideArmor.png",
			effects: [
				{amount: 20.0, positive: true, type: "armorInfantry"},
				{amount: 20.0, positive: true, type: "armorCavalry"},
				{amount: 20.0, positive: true, type: "armorPierce"}
			],
			cost: {
				wood: 150,
				gold: 150,
				stone: 75
			}
		},
		chainMailAndBoiledLeather: {
			isChain: false,
			name: "Chain Mail and Boiled-Leather Armor",
			img: "img/Upgrades/ChainMailandBoiled-LeatherArmor.png",
			effects: [
				{amount: 20.0, positive: true, type: "armorInfantry"},
				{amount: 20.0, positive: true, type: "armorCavalry"},
				{amount: 20.0, positive: true, type: "armorPierce"}
			],
			cost: {
				wood: 300,
				gold: 300,
				stone: 150
			}
		},
		lamellarAndLacqueredLeather: {
			isChain: false,
			name: "Lamellar and Lacquered-Leather Armor",
			img: "img/Upgrades/LamellarandLacquered-LeatherArmor.png",
			effects: [
				{amount: 20.0, positive: true, type: "armorInfantry"},
				{amount: 20.0, positive: true, type: "armorCavalry"},
				{amount: 20.0, positive: true, type: "armorPierce"}
			],
			cost: {
				wood: 600,
				gold: 600,
				stone: 300
			}
		}
	},
	armoryShield: {
		isChain: true,
		noneArmoryShield: {
			isChain: false,
			name: "None",
			img: "img/Slot/GearSlotGeneric_ua.png",
			effects: [],
			cost: {}
		},
		shieldRim: {
			isChain: false,
			name: "Shield Rim",
			img: "img/Upgrades/ShieldRim.png",
			effects: [
				{amount: 20.0, positive: true, type: "armorPierce"}
			],
			cost: {
				wood: 150,
				gold: 150,
				stone: 75
			}
		},
		shieldTruss: {
			isChain: false,
			name: "Shield Truss",
			img: "img/Upgrades/ShieldTruss.png",
			effects: [
				{amount: 20.0, positive: true, type: "armorPierce"}
			],
			cost: {
				wood: 300,
				gold: 300,
				stone: 150
			}
		},
		shieldBoss: {
			isChain: false,
			name: "Shield Boss",
			img: "img/Upgrades/ShieldBoss.png",
			effects: [
				{amount: 20.0, positive: true, type: "armorPierce"}
			],
			cost: {
				wood: 600,
				gold: 600,
				stone: 300
			}
		}
	}
};

var upgradesContainer = document.getElementById("upgrades-container");
var loneUpgradesContainer = document.getElementById("lone-upgrades-container");
var upgradeElements = {};

function createUpgradeElement(key, upgrade, chain) {
	let container = document.createElement('div');
	container.dataset.upgrade = key;

	let icon = document.createElement('img');
	icon.classList.add("upgrade");
	icon.src = upgrade.img;

	let tooltip = createUpgradeTooptip(upgrade);
	let input = document.createElement('input');
	input.classList.add('upgrade-active');
	input.type = "hidden";
	input.value = 0;

	if(chain != undefined) {
		container.classList.add('chained-upgrade');
		input.dataset.chain = chain;
	}

	container.appendChild(icon);
	container.appendChild(tooltip);
	container.appendChild(input);

	return container;
}

function createUpgradeTooptip(upgrade) {
	let tooltip = document.createElement('div');
	tooltip.classList.add('upgrade-tooltip');

	tooltip.innerHTML = '<span class="upgrade-title">' + upgrade.name + '</span>';
	tooltip.innerHTML += createCostSpan(upgrade.cost);

	for(let key in upgrade.effects) {
		let effect = upgrade.effects[key];
		let html = components.upgradeEffect(effects[effect.type].name, effect.amount, effect.isAbsolute);
		let element = createEffectElement(html, effect);
		tooltip.appendChild(element);
	}
	return tooltip;
}

function createCostSpan(cost) {
	let content = '';
	for(let key in cost)
		content += '<span>' + cost[key] + '</span><img src="img/Resources/' + key + '.png" class="resource-icon">&nbsp;'

	return content;
}

function hideAllUpgrades() {
	for(let key in upgradeElements) {
		let element = upgradeElements[key];
		element.style.display = "none";
		if(element.nextSibling != undefined && !element.nextSibling.classList.contains('upgrade-row')) {
			element.nextSibling.style.display = "none";
			element.nextSibling.classList.remove("active");
		}

		let input = element.getElementsByClassName('upgrade-active')[0];
		input.value = 0;

		let img = element.getElementsByClassName('upgrade')[0];
		img.classList.remove("active");
	}
}

function toggleUpgrade(element) {

	if(!element.classList.contains("upgrade-arrow")) {
		let input = element.parentElement.getElementsByClassName('upgrade-active')[0];
		input.value = input.value == 1 ? 0 : 1;
	}

	if(!element.classList.contains("active")) {
		element.classList.add("active");
		return true;
	} else {
		element.classList.remove("active");
		return false;
	}
}

function enableUpgrade(element) {
	if(!element.classList.contains("upgrade-arrow")) {
		let input = element.getElementsByClassName('upgrade-active')[0];
		input.value = 1;
	}

	if(element.classList.contains('chained-upgrade'))
		element = element.getElementsByClassName('upgrade')[0];

	element.classList.add("active");
}

function disableUpgrade(element) {
	if(!element.classList.contains("upgrade-arrow")) {
		let input = element.getElementsByClassName('upgrade-active')[0];
		input.value = 0;
	}

	if(element.classList.contains('chained-upgrade'))
		element = element.getElementsByClassName('upgrade')[0];

	element.classList.remove("active");
}

function loadUpgrade(container, key, upgrade, chain) {
	let element = createUpgradeElement(key, upgrade, chain);
	upgradeElements[key] = element;
	container.appendChild(element);

	element.addEventListener('click', onUpgradeClick);
}

function onUpgradeClick(event) {
	let element = event.target;
	let parent = element.parentElement;

	if(parent.classList.contains("chained-upgrade")) {
		let sibling = parent;
		while((sibling = sibling.previousElementSibling) != null)
			enableUpgrade(sibling);
		sibling = parent;
		while((sibling = sibling.nextElementSibling) != null)
			disableUpgrade(sibling);
		
		enableUpgrade(element.parentElement);
	} else
		toggleUpgrade(element);


	updateStats();
}

function loadUpgradeChain(key, chain) {
	let container = document.createElement('div');
	container.classList.add('upgrade-row');

	for(let key2 in chain) {
		if(key2 == "isChain") continue;

		loadUpgrade(container, key2, chain[key2], key);
		let arrow = document.createElement('span');
		arrow.classList.add('upgrade-arrow');
		arrow.textContent = '➡';
		container.appendChild(arrow);

	}

	container.lastChild.remove(); //Remove last arrow
	upgradesContainer.appendChild(container);
}

function loadUpgrades() {
	console.log("Loading upgrades...");
	for(let key in upgrades) {

		let upgrade = upgrades[key];
		if(upgrade.isChain)
			loadUpgradeChain(key, upgrade);
		else
			loadUpgrade(loneUpgradesContainer, key, upgrade);
	}
}

//loadUpgrades();