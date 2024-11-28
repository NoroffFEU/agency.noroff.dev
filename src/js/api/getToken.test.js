import { getToken } from './getToken.js';

// Test suite for getToken
describe('getToken', () => {
    const TOKEN_KEY = 'token'; 
    const VALID_TOKEN = 'abc123'; 
    const QUOTED_TOKEN = `"${VALID_TOKEN}"`;
  
    // Clear both storages before each test
    beforeEach(() => {
      sessionStorage.clear();
      localStorage.clear();
    });
  
    it('should return token from sessionStorage without quotes', () => {
      sessionStorage.setItem(TOKEN_KEY, VALID_TOKEN);
      
      const token = getToken();
      
      expect(token).toBe(VALID_TOKEN);
    });
  
    it('should return token from sessionStorage with quotes', () => {
      sessionStorage.setItem(TOKEN_KEY, QUOTED_TOKEN);
      
      const token = getToken();
      
      expect(token).toBe(VALID_TOKEN);
    });
  
    it('should return token from localStorage when sessionStorage is empty', () => {
      localStorage.setItem(TOKEN_KEY, VALID_TOKEN);
      
      const token = getToken();
      
      expect(token).toBe(VALID_TOKEN);
    });
  
    it('should return token from localStorage with quotes removed when sessionStorage is empty', () => {
      localStorage.setItem(TOKEN_KEY, QUOTED_TOKEN);
      
      const token = getToken();
      
      expect(token).toBe(VALID_TOKEN);
    });
  
    it('should prioritize sessionStorage over localStorage', () => {
      sessionStorage.setItem(TOKEN_KEY, VALID_TOKEN);
      localStorage.setItem(TOKEN_KEY, QUOTED_TOKEN);
      
      const token = getToken();
      
      expect(token).toBe(VALID_TOKEN);
    });
  
    it('should return null when token is not present in either storage', () => {
      const token = getToken();
      
      expect(token).toBeNull();
    });
  
    it('should return null when token is present but empty in both storages', () => {
      sessionStorage.setItem(TOKEN_KEY, '');
      localStorage.setItem(TOKEN_KEY, '');
      
      const token = getToken();
      
      expect(token).toBeNull();
    });
  
    it('should handle malformed JSON gracefully in storage', () => {
      // Although getToken doesn't parse JSON, ensuring robustness
      sessionStorage.setItem(TOKEN_KEY, 'malformed"token');
      
      const token = getToken();
      
      // The regex in getToken only removes surrounding quotes, so 'malformed"token' becomes 'malformed"token'
      expect(token).toBe('malformed"token');
    });
  }); 