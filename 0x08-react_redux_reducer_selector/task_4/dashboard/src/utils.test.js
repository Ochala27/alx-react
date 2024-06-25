
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('getFullYear function', () => {
  test('returns the correct year', () => {
    const currentYear = new Date().getFullYear();
    const result = getFullYear();
    expect(result).toEqual(currentYear);
  });
});

describe('getFooterCopy function', () => {
  test('returns correct string when argument is true', () => {
    const result = getFooterCopy(true);
    expect(result).toEqual('Holberton School');
  });

  test('returns correct string when argument is false', () => {
    const result = getFooterCopy(false);
    expect(result).toEqual('Holberton School main dashboard');
  });
});

describe('getLatestNotification function', () => {
  test('returns the correct latest notification string', () => {
    const result = getLatestNotification();
    expect(result).toEqual('<strong>Urgent requirement</strong> - complete by EOD');
  });
});

