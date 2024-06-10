const holaMundo = require('./index');

test('deberia retornar "Hola Mundo"', () => {
    expect(holaMundo()).toBe('Hola Mundo');
});
