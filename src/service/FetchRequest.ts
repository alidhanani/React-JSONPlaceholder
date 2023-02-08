import { Post } from 'src/model';

export const useRequest = () => {
  const getPosts: () => Promise<Post[]> = function () {
    return new Promise((resolve, reject) => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json: Post[]) => resolve(json))
        .catch((error: string) => reject(error));
    });
  };

  const getPost: (id: string) => Promise<Post> = function (id) {
    return new Promise((resolve, reject) => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((json: Post) => resolve(json))
        .catch((error: string) => reject(error));
    });
  };

  const sendPost: (post: Post) => Promise<Post> = function (post) {
    return new Promise((resolve, reject) => {
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
      })
        .then((response) => response.json())
        .then((json: Post) => resolve(json))
        .catch((error: string) => reject(error));
    });
  };

  const deletePost: (id: string) => Promise<Post> = function (id) {
    return new Promise((resolve, reject) => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((json: Post) => resolve(json))
        .catch((error: string) => reject(error));
    });
  };

  const updatePost: (id: string, post: Post) => Promise<Post> = function (
    id,
    post
  ) {
    return new Promise((resolve, reject) => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
      })
        .then((response) => response.json())
        .then((json: Post) => resolve(json))
        .catch((error: string) => reject(error));
    });
  };

  return {
    getPosts,
    getPost,
    sendPost,
    deletePost,
    updatePost,
  };
};
