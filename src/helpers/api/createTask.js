const createTask = async (payload) => {
  const url = 'http://localhost:3000/tasks';
  // headers
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('X-User-Email', localStorage.getItem('email'));
  headers.append('X-User-Token', localStorage.getItem('token'));

  const options = {
    method: 'POST',
    mode: 'cors',
    headers,
    body: JSON.stringify({ task: payload }),
  };

  const response = await fetch(url, options).then((response) => response);
  if (response.status === 201) {
    console.log('succesfully created');
    // todo
  }
};

export default createTask;
