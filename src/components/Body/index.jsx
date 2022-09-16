export const Body = ({odas}) => {

  return( 
    <div>
    <p> {odas.length} odas </p>
      <div className='lista'>
        {odas.map(oda => (
            <div className="objetos" key={oda._id}>
                  <h2>Nome: {oda.nome}</h2>
                  <p>Usuário: {oda.usuario}</p>
                  <p>Descrição: {oda.descricao}</p>
                  <p>Data_inclusão: {oda.data_inclusao}</p>
                  <p>Palavras_chave: {oda.palavras_chave}</p>
            </div>
      ))}
      </div> 
    </div>
  )    
}