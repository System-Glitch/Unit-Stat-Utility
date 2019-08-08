const API_URL = 'https://api.projectceleste.com/gamedb'
const types   = ["Military", "AbstractCavalry","UnitTypeBldgTower","UnitTypeShipUtility1","AbstractWall","AbstractInfantry","UnitTypeBldgTownCenter","UnitTypeBldgWonder","AbstractPriest","UnitTypeArcherAntiInf1","UnitTypeCavalryBasic1","UnitTypeCaravan1","UnitTypeVillager1","UnitTypeSiegeTrebuchet1","UnitTypeBldgFortress","Ship","UnitTypeSiegeBallista1","AbstractArcher","AbstractCavalry","AbstractTownCenter","AbstractArtillery","UnitTypeBldgBarracks","AbstractFarm","UnitTypeShipFishing1","UnitTypeScout1","UnitTypeBldgHouse","UnitTypeBldgStorehouse","UnitTypeInfantryAntiCav1","Building","AbstractVillager"]

const fs      = require('fs')
const helpers = require('./helpers.js')

const unitsRaw = fs.readFileSync('./scripts/units.js', 'utf8')
const units = JSON.parse(unitsRaw.replace('var units=', '').replace(';', ''))

helpers.get(API_URL + '/units', (data) => {
    const dataUnits = JSON.parse(data)
    for(let key in units) {
        const unit = units[key]
        const model = helpers.findUnit(dataUnits, key)

        unit.types = []
        for(let keyType in model.UnitType) {
            if(types.indexOf(model.UnitType[keyType]) != -1) {
                unit.types.push(model.UnitType[keyType])
            }
        }
    }
    fs.writeFileSync('./scripts/units.js', 'var units=' + JSON.stringify(units) + ';')
})

