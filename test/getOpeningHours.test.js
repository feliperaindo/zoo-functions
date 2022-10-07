const getOpeningHours = require('../src/getOpeningHours');

const weekDays = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const expectClose = 'The zoo is closed';
const expectOpen = 'The zoo is open';

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
    weekDays.forEach((day) => {
      expect(getOpeningHours(day, '11:00-AM')).toBe(expectOpen);
      expect(getOpeningHours(day, '05:24-PM')).toBe(expectOpen);
      expect(getOpeningHours(day, '12:00-PM')).toBe(expectOpen);
      expect(getOpeningHours(day, '07:00-AM')).toBe(expectClose);
      expect(getOpeningHours(day, '11:30-PM')).toBe(expectClose);
      expect(getOpeningHours(day, '12:00-AM')).toBe(expectClose);
    });
    expect(getOpeningHours('Monday', '09:00-AM')).toBe(expectClose);
    expect(getOpeningHours('Monday', '12:00-AM')).toBe(expectClose);
    expect(getOpeningHours('Monday', '12:00-PM')).toBe(expectClose);
  });
  test('Check if `getOpeningHours` is case sensitive', () => {
    expect(getOpeningHours('monday', '09:00-AM')).toBe(expectClose);
    expect(getOpeningHours('mondAy', '09:00-pm')).toBe(expectClose);
    expect(getOpeningHours('THURSDAY', '09:00-am')).toBe(expectClose);
  });
});

describe('Error text messages when wrong parameter is apply', () => {
  test('Verify error message when a hour and minutes are bigger than twenty and sixty are apply', () => {
    expect(() => getOpeningHours('Tuesday', '15:00-PM')).toThrow('The hour must be between 0 and 12');
    expect(() => getOpeningHours('Saturday', '05:78-AM')).toThrow('The minutes must be between 0 and 59');
  });
  test('Verify error message when a not day parameter is apply', () => {
    expect(() => getOpeningHours('ontem', '12:00-AM')).toThrow('The day must be valid. Example: Monday');
  });
  test('Verify error message when a not number parameter is apply as hours', () => {
    expect(() => getOpeningHours('friday', 'gato:12-PM')).toThrow('The hour should represent a number');
    expect(() => getOpeningHours('Saturday', '05:bode-AM')).toThrow('The minutes should represent a number');
  });
  test('Verify error message when a parameter different of `AM` and `PM` is apply', () => {
    expect(() => getOpeningHours('Wednesday', '12:12-TA')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
});
