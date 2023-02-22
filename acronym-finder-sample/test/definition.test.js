const def = require('../src/definition.js');

test('loading definitions', () => {

    let definitionUtil = new def.DefinitionUtil();

    definitionUtil.loadDefFile();
    
    expect(definitionUtil.getDefinitionCount()).toBeGreaterThan(1);
});

