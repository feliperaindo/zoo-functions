const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  test('Verify if `getOpeningHours` is a function', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
  test('Verify when calls function with no parameter return', () => {
    const valueExpected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(valueExpected);
  });
  test('Verify when a day of week and an hour are apply as a parameters, if return match with correct value', () => {
    const weekDays = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const expectClose = 'The zoo is closed';
    const expectOpen = 'The zoo is open';
    weekDays.forEach((day) => {
      expect(getOpeningHours(day, '11:00-AM')).toBe(expectOpen);
      expect(getOpeningHours(day, '05:24-PM')).toBe(expectOpen);
      expect(getOpeningHours(day, '07:00-AM')).toBe(expectClose);
      expect(getOpeningHours(day, '11:30-PM')).toBe(expectClose);
    });
    expect(getOpeningHours('Monday', '09:00-AM')).toBe(expectClose);
  });
});
