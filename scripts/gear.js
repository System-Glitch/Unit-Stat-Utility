var gear = {
	sword: [
		{name: "None", img: 'Slot/SwordSlot_ua.png'},
		{name: "Sample sword 1", img: 'Gear/SWORDSL12_ua.png'},
		{name: "Sample sword 2", img: 'Gear/SWORDSL14_ua.png'},
	],
	axe: [
		{name: "None", img: 'Slot/GreatAxeSlot_ua.png'},
		{
			name: "Sample axe 1",
			img: 'Gear/AXEMANAXL4_ua.png',
			effects: [
				{min: 10, max: 12, positive: true, type: "damage"},
			]
		},
		{
			name: "Sample axe 2",
			img: 'Gear/AXEMANAXL7_ua.png',
			effects: [
				{min: 40, max: 53.9, positive: true, type: "damage"},
			]
		}
	],
	cavalryArmor: [
		{name: "None", img: 'Slot/LightArmorSlot_ua.png'},
		{
			name: "Sample cavalry armor 1",
			img: 'Gear/ArmCav_L001_ua.png',
			effects: [
				{min: 10.0, max: 50.0, positive: true, type: "damage"}
			]
		},
		{
			name: "Sample cavalry armor 2",
			img: 'Gear/ArmCav_L002_ua.png',
			effects: [
				{min: -40.0, max: 0.0, positive: false, type: "health"}
			]
		}
	],
	infantryArmor: [
		{name: "None", img: 'Slot/MedArmorSlot_ua.png'},
		{
			name: "Sample armor rare",
			img: 'Gear/Generic/Armor/Inf/Inf_R30v2_ua.png',
			effects: [
				{min: 10, max: 30, positive: true, type: "health"},
			]
		},
		{
			name: "Sample armor epic",
			img: 'Gear/Generic/Armor/Inf/Inf_E60_ua.png',
			effects: [
				{min: 70, max: 80, positive: true, type: "health"},
			]
		},
		{
			name: "Sample armor legendary",
			img: 'Gear/Generic/Armor/Inf/Inf_L90_ua.png',
			effects: [
				{min: 72, max: 85, positive: true, type: "health"},
			]
		}
	],
	soldierGear: [
		{name: "None", img: 'Slot/GearSlot_ua.png'},
		{
			name: "Sample gear 1",
			img: 'Gear/InfGearGreavesE_ua.png',
			effects: [
				{min: -15.0, max: -5.0, positive: false, type: "health"},
				{min: 1.0, max: 4.7, positive: true, type: "speed"}
			]
		},
		{
			name: "Sample gear 2",
			img: 'Gear/Celeste/Generic/Gear/Inf/Gear_MAG_ua.png',
			effects: [
				{min: 20.6, max: 22.8, positive: false, type: "cost"},
				{min: 11.8, max: 13.1, positive: true, type: "damage"},
				{min: 21.5, max: 23.8, positive: true, type: "health"}
			]
		}
	]
}