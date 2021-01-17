export const getAllTodos = async () => {
  const rawResponse = await fetch('http://localhost:8080/todos');

  return rawResponse.json();
};

export const postTodo = async (todo) => {
  const rawResponse = await fetch('http://localhost:8080/todos', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });

  return rawResponse.json();
};

export const putTodo = async (todo) => {
  const rawResponse = await fetch(`http://localhost:8080/todos/${todo.id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });

  return rawResponse.json();
};

export const deleteTodo = async (id) =>
  fetch(`http://localhost:8080/todos/${id}`, {
    method: 'DELETE',
  });
