import {
  addToLocalStorage,
  getFromLocalStorage,
  removeFromLocalStorage
} from './storage';

// Simple localStorage mock
beforeEach(() => {
  let storage = {};

  global.localStorage = {
    setItem: (key, value) => {
      storage[key] = value;
    },
    getItem: (key) => {
      return storage[key] || null;
    },
    removeItem: (key) => {
      delete storage[key];
    },
    clear: () => {
      storage = {};
    }
  };
});

describe('localStorage interaction', () => {
  it('should add an item to localStorage', () => {
    const key = 'username';
    const value = 'testUser';

    // Call the function
    addToLocalStorage(key, value);

    // Assert that the item was added to localStorage
    expect(localStorage.getItem(key)).toBe(value);
  });

  it('should retrieve an item from localStorage', () => {
    const key = 'username';
    const storedValue = 'testUser';

    // Manually set the item in localStorage
    localStorage.setItem(key, storedValue);

    // Retrieve the item
    const result = getFromLocalStorage(key);

    // Assert that the correct value is retrieved
    expect(result).toBe(storedValue);
  });

  it('should remove an item from localStorage', () => {
    const key = 'username';
    const value = 'testUser';

    // Add the item to localStorage
    localStorage.setItem(key, value);

    // Remove the item
    removeFromLocalStorage(key);

    // Assert that the item was removed
    expect(localStorage.getItem(key)).toBeNull();
  });

  it('should verify that an item is no longer in localStorage', () => {
    const key = 'username';

    // Add the item to localStorage
    localStorage.setItem(key, 'testUser');

    // Remove the item
    removeFromLocalStorage(key);

    // Check if the item is no longer in localStorage
    const result = getFromLocalStorage(key);

    // Assert that the item is no longer there
    expect(result).toBeNull();
  });
});
