export const getAllTodos = async () => {
  const rawResponse = await fetch('http://localhost:8080/todos');

  const content = await rawResponse.json();

  return content;
};

export const addTodo = async (todo) => {
  const rawResponse = await fetch('http://localhost:8080/todos', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });

  const content = await rawResponse.json();

  return content;
};

export const editTodo = async (todo) => {
  const rawResponse = await fetch(`http://localhost:8080/todos/${todo.id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });

  const content = await rawResponse.json();

  return content;
};

export const removeTodo = async (id) => {
  const rawResponse = await fetch(`http://localhost:8080/todos/${id}`, {
    method: 'DELETE',
  });

  const content = await rawResponse.json();

  return content;
};
