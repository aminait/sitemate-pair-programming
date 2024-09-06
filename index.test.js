const { convertTimeToWords } = require('./index');

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });

  it('Handles 30 - 8:30', () => {
    expect(convertTimeToWords('8:30')).toBe('half past eight');
    expect(convertTimeToWords('11:30')).toBe('half past eleven');
  });

  it('Handles times after 30 mins - 2:45', () => {
    const timeInWords = convertTimeToWords('2:45');
    expect(timeInWords).toBe('quarter to three');
  });

  it('Handles times after 00 mins to :15', () => {
    expect(convertTimeToWords('9:15')).toBe('quarter past nine');
  });

  it('Handles minutes being 00', () => {
    expect(convertTimeToWords('9:00')).toBe("nine o'clock");
  });

  it('Handles midday', () => {
    expect(convertTimeToWords('12:00')).toBe('midday');
  });
});
