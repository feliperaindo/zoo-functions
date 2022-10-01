const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('Check if `handlerElepahnts` is a function', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  test('Verify when no parameters is apply, if function return undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  test('Verify when parameters that is not a String is apply, if function return proprety message', () => {
    const expectResult = 'Parâmetro inválido, é necessário uma string';
    expect(handlerElephants(3)).toBe(expectResult);
    expect(handlerElephants(false)).toBe(expectResult);
    expect(handlerElephants(true)).toBe(expectResult);
    expect(handlerElephants([])).toBe(expectResult);
    expect(handlerElephants({ obj: 3 + 7 })).toBe(expectResult);
  });
  test('Verify if when parameter `count` is apply in `handlerElepahnts` return property value', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  test('Verify if when parameter `names` is apply in `handlerElepahnts` return property value', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
    expect(handlerElephants('names')).toContain('Ilana');
    expect(handlerElephants('names')).toContain('Orval');
    expect(handlerElephants('names')).toContain('Bea');
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
    expect(handlerElephants('names')).not.toContain('jefferson');
    expect(handlerElephants('names')).not.toContain('beA');
    expect(handlerElephants('names')).not.toContain('iLaNa');
    expect(handlerElephants('names')).not.toEqual(['Orval', 'Bea', 'Ilana', 'Jefferson']);
  });
  test('Verify if when parameter `averageAge` is apply in `handlerElepahnts` return property value', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  test('Verify when apply parameters `name`, `popularity`, `location`, `availability`, `residents` in `handlerElepahnts` return property value', () => {
    const expectObj = [
      {
        name: 'Ilana',
        sex: 'female',
        age: 11,
      },
      {
        name: 'Orval',
        sex: 'male',
        age: 15,
      },
      {
        name: 'Bea',
        sex: 'female',
        age: 12,
      },
      {
        name: 'Jefferson',
        sex: 'male',
        age: 4,
      },
    ];
    expect(handlerElephants('name')).toBe('elephants');
    expect(handlerElephants('popularity')).toBe(5);
    expect(handlerElephants('location')).toBe('NW');
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
    expect(handlerElephants('residents')).toEqual(expectObj);
    expect(handlerElephants('sex')).toBeNull();
  });
});
