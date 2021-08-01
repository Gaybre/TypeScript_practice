import React from 'react'

interface Persona {
  nombreCompleto: string
  edad: number
  direccion: Direccion
}

interface Direccion {
  pais: string
  casaNo: number
}

export const ObjetosLiterales = () => {

  const persona: Persona = {
    nombreCompleto: 'Juan',
    edad: 28,
    direccion: {
      pais: 'Mexico',
      casaNo: 8
    }
  }

  return (
    <div>
      <h3>Objetos Literarles</h3>
      <code>
        <pre>
          {JSON.stringify(persona, null, 2)}
        </pre>
      </code>
    </div>
  )
}
