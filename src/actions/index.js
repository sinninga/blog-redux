const ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts';
const API_KEY = 'WAGON-BLOG';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const POST_CREATED = 'POST_CREATED';


export function fetchPosts() {
  const promise = fetch(`${ROOT_URL}?key=${API_KEY}`)
    .then(response => response.json());
  return {
    type: FETCH_POSTS,
    payload: promise
  };
}

export function fetchPost(id) {
  const promise = fetch(`${ROOT_URL}/${id}?key=${API_KEY}`)
    .then(response => response.json());
  return {
    type: FETCH_POST,
    payload: promise
  };
}

export function createPost(body, callback) {
  const request = fetch(`${ROOT_URL}?key=${API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then(response => response.json())
    .then(callback);

  return {
    type: POST_CREATED,
    payload: request
  };
}
