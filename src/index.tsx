import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Test1',
          type: 'deposit',
          category: 'Test1',
          amount: 1000,
          createdAt: new Date('2000-01-01 00:00:01'),
        },
        {
          id: 2,
          title: 'Test2',
          type: 'withdraw',
          category: 'Test2',
          amount: 500,
          createdAt: new Date('2000-01-01 00:00:02'),
        }
      ],
    })
  },
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transactions', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
