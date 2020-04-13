// usar crypto-js para los hashes! (como el ejemplo de blockchain)


export async function createUser({ username, password }) {
 /*
    Aqui se manejarán a los usuarios con una base de datos, por el momento, se usará un api_route creada para esto especificamente....
 */

  return { username, createdAt: Date.now() }
}

export async function findUser({ username, password }) {

   /*
    Aqui se manejarán a los usuarios con una base de datos, por el momento, se usará un api_route creada para esto especificamente....
  */
 //Queda pendiente el hash por el momento (se compararan strings!)
  // const hash = crypto.pbkdf2Sync(password, user.salt, 1000, 64, 'sha512').toString('hex')
  // const passwordsMatch = user.hash === hash

  return { username, createdAt: Date.now() }
}
