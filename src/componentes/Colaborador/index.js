import { AiFillCloseCircle , AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

import './colaborador.css'

const Colaborador = ({ colaborador, corDeFundo , aoDeletar , aoFavoritar }) => {
    function Favoritar(){
        aoFavoritar(colaborador.id)
    }

    const propsFavorito ={
        size:25,
        onClick:Favoritar
    }

    return (<div className="colaborador">
        <AiFillCloseCircle size={25} color='#000' className='deletar' onClick={ () => aoDeletar(colaborador.id)}/>
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className="favoritar">
                { colaborador.favorito
                    ? <AiFillHeart {...propsFavorito} color="red"/>
                    : <AiOutlineHeart {...propsFavorito} /> }
            </div>
        </div>
    </div>)
}

export default Colaborador