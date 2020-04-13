import Link from 'next/link'

const Form = ({ isLogin, errorMessage, onSubmit }) => (
  <form className="rec" onSubmit={onSubmit}>
    <label>
      <span>Usuario</span>
      <input type="text" name="username" required />
    </label>
    <label>
      <span>Contraseña</span>
      <input type="password" name="password" required />
    </label>
    {!isLogin && (
      <label>
        <span>Repetir Contraseña</span>
        <input type="password" name="rpassword" required />
      </label>
    )}

    <div className="submit">
      {isLogin ? (
        <>
          <Link href="/signup">
            <a>No tengo una cuenta :(</a>
          </Link>
          <button type="submit">Ingresar</button>
        </>
      ) : (
        <>
          <Link href="/login">
            <a>Ya tengo mi cuenta :)</a>
          </Link>
          <button type="submit">Registrarme</button>
        </>
      )}
    </div>

    {errorMessage && <p className="error">{errorMessage}</p>}

    <style jsx>{`
      
      form,
      label {
        display: flex;
        flex-flow: column;
      }
      a {
        color:red;
      }
      label > span {
        font-weight: 600;
      }
      input {
        padding: 8px;
        margin: 0.3rem 0 1rem;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
      .submit {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        justify-content: space-between;
      }
      .submit > a {
        text-decoration: none;
      }
      .submit > button {
        padding: 0.5rem 1rem;
        cursor: pointer;
        background: #fff;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
      .submit > button:hover {
        border-color: #888;
      }
      .error {
        color: brown;
        margin: 1rem 0 0;
      }
    `}</style>
  </form>
)

export default Form
