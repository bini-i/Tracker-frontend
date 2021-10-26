helpers / API / createSession;

const createSession = async (email, password) => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  const payload = { email, password };
  const response = await fetch(
    'http://localhost:3000/sessions',
    {
      method: 'POST',
      mode: 'cors',
      headers,
      body: JSON.stringify(payload),
    },
  );
  if (response.status === 201) {
    const data = await response.json();
    localStorage.setItem('token', data.token);
    setSignedIn(true, email);
  } else {
    console.log(response.status);
  }
};

// {"utf8"=>"✓", "authenticity_token"=>"e8ZUOhqbsOoIhJgNmiMcGzGHiD/boEnawDQ/
// 4PM1D5rSlriIWi3tHwxy7KRYDoXJYX8htsGBbG70Kr4Ou3GTew==", "user"=>{"email"=>"user1@gmail.com",
// "password"=>"[FILTERED]", "remember_me"=>"0"}, "commit"=>"Log in"}
