import { useForm } from '../hooks/useForm';

export const Formularios = () => {

  const {onChange, email, password, formulario} = useForm({
    email: 'example@example.com',
    password: 'password123'
  })

  return (
    <>
      <h3>Formularios</h3>
      <input
        name="email"
        type="text"
        className="form-control"
        placeholder="Email"
        value={ email }
        // onChange={(e) => onChange(e.target)}
        onChange={({ target }) => onChange(target.value, 'email')}
      />
      <input
        name="password"
        type="text"
        className="form-control mt-2 mb-2"
        placeholder="Password"
        value={ password }
        // onChange={(e) => onChange(e.target)}
        onChange={({ target }) => onChange(target.value, 'password')}
      />

      <code>
        {JSON.stringify(formulario, null, 2)}
      </code>
    </>
  )
}
