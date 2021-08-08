import { User } from '../interfaces/reqRes';
import { useUsuarios } from '../hooks/useUsuarios';

export const Usuarios = () => {

  const { usuarios, paginaAnterior, paginaSiguiente } = useUsuarios()

  const renderItem = ({id, first_name, last_name, email, avatar}: User) => {
    return (
      <tr key={id}>
        <th>
          <img
            src={avatar}
            alt={first_name}
            style={{
              borderRadius: 100,
              width: 40
            }}
          />
        </th>
        <th>{first_name} {last_name}</th>
        <th>{ email }</th>
      </tr>
    )
  }

  return (
    <>
      <h3>Usuarios: </h3>

      <table className='table'>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(user => renderItem(user))}
        </tbody>
      </table>

      <button className='btn btn-primary' onClick={ paginaAnterior }>
        Anterior
      </button>
      &nbsp;
      <button className='btn btn-primary' onClick={ paginaSiguiente }>
        Siguiente
      </button>
    </>
  )
}
