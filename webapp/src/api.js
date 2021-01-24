const url = 'http://localhost:5000';

export const api = {
  header: {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  },

  getBlog: `${url}/blog`,

};