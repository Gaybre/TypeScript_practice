import { useState, useEffect, useRef } from "react"
import { User, ReqResListado } from '../interfaces/reqRes';
import { reqResApi } from '../api/reqRes';


export const useUsuarios = () => {
  const [usuarios, setUsuarios] = useState<User[]>([])
  const paginaRef = useRef(1)

  useEffect(() => {
    cargarUsuarios()
  }, [])

  const cargarUsuarios = async () => {
    const response = await reqResApi.get<ReqResListado>('/users', {
      params: {
        page: paginaRef.current
      }
    })
    if(response.data.data.length > 0) {
      setUsuarios(response.data.data)
    } else {
      paginaRef.current--
      alert('No hay más páginas')
    }
  }

  const paginaSiguiente = () => {
    paginaRef.current++
    cargarUsuarios()
  }

  const paginaAnterior = () => {
    if(paginaRef.current > 1) {
      paginaRef.current--
      cargarUsuarios()
    }
  }

  return {
    usuarios,
    paginaSiguiente,
    paginaAnterior
  }

}
