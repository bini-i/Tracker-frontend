const updateTaskAPI = async (payload) => {
  const url = `${window.URL}/tasks/${payload.id}`;
  // headers
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('X-User-Email', localStorage.getItem('email'));
  headers.append('X-User-Token', localStorage.getItem('token'));

  const options = {
    method: 'PATCH',
    mode: 'cors',
    headers,
    body: JSON.stringify({ task: payload }),
  };

  const response = await fetch(url, options).then((response) => response);
  return response;
};

export default updateTaskAPI;
