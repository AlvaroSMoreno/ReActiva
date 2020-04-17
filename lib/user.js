// import crypto from 'crypto'
import Users from '../pages/api/user.json';
import Empresas from '../pages/api/empresas.json';

export async function createUser({ username, password }) {
  
  return { username, createdAt: Date.now() }
}

const fetcher = url =>
  fetch(url)
    .then(r => r.json())
    .then(data => {
      return { user: data?.user || null }
    })

export async function findUser({ username, password }) {
  
  for(const user in Users) {
    if(username == Users[user].user && password == Users[user].password) {
      if(Users[user].type=='sell') {
        for(const emp in Empresas) {
          if(Users[user].company != "" && Users[user].company == Empresas[emp].empresa) {
            return {user: username, done:(parseInt(100*Empresas[emp].ventas_actual/Empresas[emp].ventas_fin)), name: Users[user].name, type: Users[user].type, empresa:Users[user].company,createdAt: Date.now()}
          }
        } 
      }
      else {
        return {user: username, name: Users[user].name, type: Users[user].type, empresa:Users[user].company,createdAt: Date.now()}
      }
    }
  }
}
