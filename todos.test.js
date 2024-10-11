import { getTodos, getAllTodos, getTodoById } from './todos-api.js';

const TEST_LIMIT = 3;

// Create a mock function that will pretend to be the native fetch function
const mockFetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue([
    { id: 1, title: 'Todo 1', completed: false },
    { id: 2, title: 'Todo 2', completed: true },
    { id: 3, title: 'Todo 3', completed: false },
    { id: 4, title: 'Todo 4', completed: true },
    { id: 5, title: 'Todo 5', completed: false }
  ])
});

// Assign this to the global fetch function before running the tests
global.fetch = mockFetchSuccess;

describe('Todos API', () => {
  // Test 1: Check that it returns the correct maximum number of items (based on limit)
  it('returns the correct maximum number of todos', async () => {
    const todos = await getTodos(TEST_LIMIT);
    expect(todos.length).toBeLessThanOrEqual(TEST_LIMIT); // Check the limit
  });

  // Test 2: Fetch all todos
  it('should return all todos', async () => {
    const todos = await getAllTodos();
    expect(todos.length).toBe(5); // We expect 5 items based on our mock data
    expect(todos[0].title).toBe('Todo 1'); // Checking the first item
  });

  // Test 3: Fetch a todo by ID
  it('should return a single todo by ID', async () => {
    // Modify the mockFetch to simulate fetching by ID
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: jest
        .fn()
        .mockResolvedValue({ id: 3, title: 'Todo 3', completed: false })
    });

    const todo = await getTodoById(3);
    expect(todo.id).toBe(3);
    expect(todo.title).toBe('Todo 3');
  });

  // Test 4: Fetch a todo by non-existent ID should throw an error
  it('should throw an error if todo is not found', async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: false,
      status: 404
    });

    await expect(getTodoById(999)).rejects.toThrow('Todo not found');
  });
});
