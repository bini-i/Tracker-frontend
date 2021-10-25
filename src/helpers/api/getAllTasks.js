const getAllTasks = async () => {
  const url = 'http://localhost:3000/tasks';
  // headers
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('X-User-Email', localStorage.getItem('email'));
  headers.append('X-User-Token', localStorage.getItem('token'));

  const options = {
    mode: 'cors',
    headers,
  };

  const response = await fetch(url, options).then((response) => response.json());
  return response;
};

export default getAllTasks;
