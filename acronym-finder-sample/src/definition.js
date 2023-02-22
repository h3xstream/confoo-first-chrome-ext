class DefinitionUtil {
    constructor() {
        this.definitions = [];
    }

    loadDefFile() {

        let jsonDefinitions = require('./data/definitions.json');
        
        for(let i in jsonDefinitions) {

            let acronym    = jsonDefinitions[i]['acronym'];
            let fullname   = jsonDefinitions[i]['fullname'];
            let definition = jsonDefinitions[i]['definition'];

            this.definitions[acronym] = {"title":acronym, "description":fullname, "definition":definition};
        }
    }

    getDefinitionCount() {
        return Object.keys(this.definitions).length;
    }

    /**
     * Return the definition of the given acronym
     * 
     * @param {*} acronym 
     * @returns 
     */
    getDefinition(acronym) {
        if(acronym == undefined) return undefined;
        return this.definitions[acronym]['definition'];
    }

    getFullname(acronym) {
        if(bugId == undefined) return undefined;
        return this.definitions[bugId]['fullname'];
    }
}

module.exports = {
    DefinitionUtil
};
