import axios from 'axios';

export const createRegistrations = (todo) => fetch("http://localhost:7000/api/auth", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  