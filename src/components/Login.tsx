import { useReducer, useEffect } from "react"

interface AuthState {
  validando: boolean
  token: string | null
  userName: string
  name: string
}

const initialState: AuthState = {
  validando: true,
  token: null,
  userName: '',
  name: ''
}

type LoginPayload = {
  userName: string,
  name: string
}

type AuthAction =
  | { type: 'logout' }
  | { type: 'login', payload: LoginPayload }

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch ( action.type ) {
    case 'logout':
      return {
        validando: false,
        token: null,
        userName: '',
        name: ''
      }
    case 'login' :
      return {
        validando: false,
        token: '123qweasd',
        name: action.payload.name,
        userName: action.payload.userName
      }
    default:
      return state
  }
}

export const Login = () => {

  const [{validando, token, name}, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    setTimeout(() => {
      dispatch({type: 'logout'})
    }, 1500);
  }, [])

  const login = () => {
    dispatch({
      type: 'login',
      payload: {
        name: 'myName',
        userName: 'myUsername'
      }
    })
  }

  if( validando ) {
    return (
      <>
        <div className='alert alert-info'>
          Validando...
        </div>
      </>
    )
  }

  return (
    <>
      <h3>Login</h3>

      { token
        ? <div className='alert alert-success'>Autenticado como: { name }</div>
        : <div className='alert alert-danger'>No autenticado</div>
      }

      { token
        ? <button className='btn btn-danger'>
            Logout
          </button>
        : <button className='btn btn-primary' onClick={ login }>
            Login
          </button>
      }
    </>
  )
}
