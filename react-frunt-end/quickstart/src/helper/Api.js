import axios from "axios";

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    headers: { 'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa('admin:password123')},
  });
  
export async function getapi(url){
    return await api.get(url, {}, {
      auth: {
      username: 'admin',
      password: 'password123'
      }
    })
}