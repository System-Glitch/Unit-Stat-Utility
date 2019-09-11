const https   = require('https')
const Stream  = require('stream').Transform
const fs      = require('fs')
const sharp   = require('sharp')
const effects = require('./effects_mapping.js')
const civs    = require('./civs_mapping.js')

module.exports = {
    get(url, callback) {
        console.log('GET: ' + url)
        https.get(url, (res) => {
            let data = ''
            res.on('data', (d) => {
                data += d
            })

            res.on('end', () => {
                callback(data)
            })
        }).on('error', (e) => {
            console.error(e);
        })
    },
    downloadImage(url, dest) {
        if (!fs.existsSync(dest)) {
            console.log('Download image: ' + url + ' to ' + dest)

            fs.promises.mkdir(dest.substring(0, dest.lastIndexOf('/')), { recursive: true })
            .then(() => {
                https.get(url, (res) => {

                    if(res.statusCode == 200) {
                        const destTmp = dest + '.tmp'
                        const file = fs.createWriteStream(destTmp)
                        res.on('data', (d) => {
                            file.write(d)
                        })

                        res.on('end', () => {
                            file.end()
                            fs.createReadStream(destTmp).pipe(sharp().resize(64, 64)).pipe(fs.createWriteStream(dest)).on('finish', function() {
                                fs.unlink(destTmp, function (err) {
                                    if (err) throw err;
                                })
                            })
                        })
                    } else {
                        console.error('GET ' + url + ' returned code ' + res.statusCode)
                    }

                }).on('error', (e) => {
                    console.error(e);
                })
            }).catch(console.error)
        }
    },
    // Returns the first object having the given value for the
    // given attribute in the given array
    findByAttributeValue(arr, attributeName, value) {
        if(Array.isArray(arr)) {
            for(let key in arr) {
                const obj = arr[key]
                for(let keyAttr in obj.attr) {
                    if(keyAttr == attributeName && obj.attr[keyAttr] == value) {
                        return obj
                    }
                }
            }
            return null;
        }

        if(arr) {
            for(let keyAttr in arr.attr) {
                if(keyAttr == attributeName && arr.attr[keyAttr] == value) {
                    return arr
                }
            }
        }
        return null;
    },
    findUnit(arr, name) {
        for(let key in arr) {
            if(arr[key].name == name) {
                return arr[key]
            }
        }
        return null
    },
    findEffect(arr, effect) {
        for(let key in arr) {
            const ef = arr[key]
            let ok = true
            for(let i in ef) {
                if(ef[i] != effect[i]) {
                    ok = false
                    break
                }
            }

            if(ok) return ef
        }
        return null
    },
    rarityToInteger(rarity) {
        switch(rarity) {
            case 'common': return 0
            case 'uncommon': return 1
            case 'rare': return 2
            case 'epic': return 3
            case 'legendary': return 4
            default: return 0
        }
    },
    getEffect(name) {
        for(let key in effects) {
            if(effects[key].name == name)
                return key;
        }
        return null;
    },
    convertEffect(effect) {
        let type = undefined
        const target = effect.Target ? effect.Target['#text'] != 'Unit' ? effect.Target['#text'] : undefined : undefined

        switch(effect.attr.subtype) {
            case 'Cost':
                type = 'cost' + effect.attr.resource
                break
            case 'CarryCapacity':
                type = 'carryCapacity' + effect.attr.resource
                break
            case 'WorkRate':
                if(effect.attr.action == 'Heal') {
                    type = 'healRate'
                    break
                } else if(effect.attr.action == 'Convert') {
                    type = 'conversionRate'
                    break
                } else if(effect.attr.action == 'SelfHeal') {
                    type = 'regen'
                    break
                }
            case 'Yield':
                switch(effect.attr.unittype) {
                    case 'Con_Res_BerryBush_C':
                    case 'AbstractFruit': type = 'gatherBerry' ;break
                    case 'AbstractFish': type = 'gatherFish'   ;break
                    case 'AbstractFarm': type = 'gatherFarm'   ;break
                    case 'Huntable': type = 'gatherHuntable'   ;break
                    case 'Tree': type = 'gatherWood'           ;break
                    case 'Herdable': type = 'gatherHerdable'   ;break
                    case 'AbstractTownCenter': type = 'trade'  ;break
                    default:
                        if(target == 'Ba_Bldg_Garden' && effect.attr.unittype  == 'Food') {
                            type = 'autoGatherFood'
                        } else {
                            type = 'gather' + effect.attr.unittype
                        }
                }
                break
            case 'DamageBonus':
                switch(effect.attr.unittype) {
                    case 'Building': type = 'multiplierBuildings'         ;break
                    case 'AbstractArtillery': type = 'multiplierSiege'    ;break
                    case 'UnitTypeVillager1': type = 'multiplierVillager' ;break
                    case 'Ship': type = 'multiplierShips'                 ;break
                    case 'AbstractArcher': type = 'multiplierRanged'      ;break
                    case 'AbstractPriest': type = 'multiplierSupport'     ;break
                    case 'AbstractCavalry': type = 'multiplierCavalry'    ;break
                    case 'Huntable': type = 'multiplierHuntable'          ;break
                    default: type = 'multiplier' + effect.attr.unittype
                }
                break
            case 'Armor':
                switch(effect.attr.armortype) {
                    case 'Hand': type = 'armorInfantry' ;break
                    case 'Ranged': type = 'armorPierce' ;break
                    default: type = 'armor' + effect.attr.armortype
                }
                break
            case 'MaximumRange':
                if(effect.attr.action == 'Convert') {
                    if(effect.Target['#text'] == 'Eg_Spc_PriestSet') {
                        type = 'chaosRange'
                    } else {
                        type = 'convertRange'
                    }
                    break
                }
            case 'TargetSpeedBoostResist':
                if(effect.attr.amount >= 1000) {
                    effect.attr.amount = 1
                    effect.attr.relativity = 'Absolute'
                }
            default: type = effects[effect.attr.subtype]
        }

        if(type == undefined) {
            return undefined
        }

        const absolute = effect.attr.relativity == 'Absolute' ? true : undefined
        return {
            type: type,
            amount: absolute ? effect.attr.amount : (effect.attr.amount - 1) * 100,
            isAbsolute: absolute,
            target: target
        }
    },
    civ(civ) {
        return civs[civ]
    },
    // Save a JSON element to a file
    save(json, file) {
        fs.writeFile(file, typeof json == "string" ? json : JSON.stringify(json), 'utf8', err => {
            if(err) throw err
        });
    }
}