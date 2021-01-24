const url = 'http://localhost:5000';

export const api = {
  header: {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  },
  webapp_url : 'http://localhost:3000',
  getBlog: `${url}/blog`,
  getComment: `${url}/comment`,

};