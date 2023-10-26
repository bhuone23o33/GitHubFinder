// initializing keys or url
const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;


// searching Users
export const SearchUsers = async (user) => {
  // const res = await fetch(`${GITHUB_URL}/search/users?q=${user}`);
  const res = await fetch(`${GITHUB_URL}/search/users?q=${user}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`
    }
  });
  // const res  = await fetch(`https://api.github.com/search/users?q=${user}`)
  const { items } = await res.json();
  return items;
}

// get singleuser from github
export const getUser = async (user) => {
  // const res = await fetch(`${GITHUB_URL}/users/${user}`);
  const res = await fetch(`${GITHUB_URL}/users/${user}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`
    }
  });

  const data = await res.json();
  // check if user not found
  if (res.status === 404) {
    window.location = '/notfound';
  } else {
    return data;
  }
}


// getting only 10 repos using param
const params = new URLSearchParams({
  sort: 'created',
  per_page: 10,
})

// getting repos of the user
export const getRepos = async (user) => {
  // const res = await fetch(`${GITHUB_URL}/users/${user}/repos?${params}`);
  const res = await fetch(`${GITHUB_URL}/users/${user}/repos?${params}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`
    }
  });
  const data = await res.json();
  // check if user not found
  if (res.status === 404) {
    window.location = '/notfound';
  } else {
    return data;
  }
}