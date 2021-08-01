export const TiposBasicos = () => {

  const nombre: string = 'Juan'
  const edad: number = 28
  const estaActivo : boolean = true
  const poderes : string[] = ['velocidad', 'volar', 'fuego']

  return (
    <div>
      <h3>Tipos Basicos</h3>
      {nombre}, {edad}, {estaActivo ? 'Activo' : 'no esta activo'}
      <br />
      {poderes.join('-')}
    </div>
  )
}
