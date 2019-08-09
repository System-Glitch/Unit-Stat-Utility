const API_URL    = 'https://api.projectceleste.com/gamedb'
const IMAGES_URL = 'https://images.projectceleste.com/Art/'

const fs      = require('fs')
const parser  = require('fast-xml-parser')
const helpers = require('./helpers.js')

const techtreeXML  = fs.readFileSync('./gamedata/techtreex.xml').toString()
const options = {
    attributeNamePrefix : "",
    attrNodeName: "attr", //default is 'false'
    textNodeName : "#text",
    ignoreAttributes : false,
    ignoreNameSpace : false,
    allowBooleanAttributes : true,
    parseNodeValue : true,
    parseAttributeValue : true,
    trimValues: true,
    cdataTagName: "__cdata", //default is 'false'
    cdataPositionChar: "\\c",
    localeRange: "", //To support non english character in tag/attribute values.
    parseTrueNumberOnly: false,
}
const stringsXML   = fs.readFileSync('./gamedata/stringtablex.xml').toString()
const language  = parser.parse(stringsXML, options).stringtable.language.string
const techtree  = parser.parse(techtreeXML, options).TechTree.Tech

const result = [{}, {}, {}, {}]

for(let key in result) {
    const entry = {
        name: 'None',
        icon: 'None',
        description: ''
    }
    result[key]['None'] = entry
}

helpers.get(API_URL + '/advisors', (data) => {
    const advisors = JSON.parse(data)

    for(let key in advisors) {
        const advisor = advisors[key]

        if(advisor.name.indexOf('_CivReward') != -1) {
            continue;
        }

        const id = advisor.name.substring(0, advisor.name.indexOf('_'))

        if(result[advisor.age][id] === undefined) {
            const containerEntry = {
                name: helpers.findByAttributeValue(language, '_locid', advisor.displaynameid)['#text'],
                icon: advisor.name,
                civ: helpers.civ(advisor.civilization),
                rarities: {}
            }

            result[advisor.age][id] = containerEntry
        }

        const icon = advisor.icon.replace(/\\/g, '/') + '.png'
        helpers.downloadImage(IMAGES_URL + icon, './img/Advisors/' + advisor.name  + '.png')

        const tech = helpers.findByAttributeValue(techtree, 'name', advisor.techs.tech)
        const effects = []

        const effect = tech.Effects ? tech.Effects.Effect : undefined
        if(Array.isArray(effect)) {
            for(let keyEffect in effect) {
                const ef = effect[keyEffect]
                const cef = helpers.convertEffect(ef)
                if(cef && helpers.findEffect(effects, cef) == null) {
                    effects.push(cef)
                }
            }
        } else {
            const cef = helpers.convertEffect(effect)
            if(cef) effects.push(cef)
        }

        const entry = {
            id: advisor.name,
            description: helpers.findByAttributeValue(language, '_locid', advisor.displaydescriptionid)['#text'],
            effects: effects
        }
        result[advisor.age][id].rarities[helpers.rarityToInteger(advisor.rarity)] = entry
    }

    const ordered = {}
    Object.keys(result[3]).sort(function(a, b) {
        const objA = result[3][a]
        const objB = result[3][b]

        if((!objA.rarities || Object.keys(objA.rarities).indexOf('4') != -1) && objB.rarities && Object.keys(objB.rarities).indexOf('4') == -1) return -1
        if(objA.rarities && Object.keys(objA.rarities).indexOf('4') == -1 && objB.rarities && Object.keys(objB.rarities).indexOf('4') == -1) return 0
        if((!objB.rarities || Object.keys(objB.rarities).indexOf('4') != -1) && objA.rarities && Object.keys(objA.rarities).indexOf('4') == -1) return 1
    }).forEach(function(key) {
        ordered[key] = result[3][key]
    });
    result[3] = ordered

    helpers.save('const advisors=' + JSON.stringify(result) + ';', './scripts/advisors.js')
    // helpers.save(JSON.stringify(result, null, 2), './scripts/advisors.json')
})