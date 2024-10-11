export async function getTodos(limit) {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  if (!response.ok) {
    throw new Error('Failed to fetch todos');
  }
  const todos = await response.json();
  return todos.slice(0, limit); // Return only the number of todos up to the limit
}

export async function getAllTodos() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  if (!response.ok) {
    throw new Error('Failed to fetch todos');
  }
  return await response.json(); // Return all todos
}

export async function getTodoById(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  if (!response.ok) {
    throw new Error('Todo not found');
  }
  return await response.json(); // Return the todo with the matching ID
}
