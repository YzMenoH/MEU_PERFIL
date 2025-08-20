import styles from './Pessoa.module.css'

function Pessoa(props){
    return(
        <div className={styles.pessoaContainer}>
            <div className={styles.pessoaContentInfo}>
                <div className={styles.pessoaImagemInfo}>
                    <img src={props.foto} alt={props.nome}/>
                </div>
                <div className={styles.pessoaBoxInfo}>
                    <h3>Nome: {props.nome}</h3>
                    <h3>Idade: {props.idade}</h3>
                    <h3>Profissão: {props.profissao}</h3>
                </div>
            </div>
            
            <h2 className={styles.pessoaH2}>Gostos Pessoais</h2>


            <div className={styles.pessoaContentMusic}>
                <div className={styles.pessoaMusicH3}>
                    <h3>Músicas favoritas</h3>
                </div>
                
                <div className={styles.pessoaBoxMusic}>
                    <div className={styles.pessoaDisplayMusic}>
                        <div className={styles.pessoaImagemMusic}>
                            <img src={props.imgMusical} alt={props.musical}/>
                            
                        </div>

                        <div className={styles.pessoaImagemMusic}>
                            <img src={props.imgMusical} alt={props.musical}/>
                        </div>

                        <div className={styles.pessoaImagemMusic}>
                            <img src={props.imgMusical} alt={props.musical}/>
                        </div>

                        <div className={styles.pessoaImagemMusic}>
                            <img src={props.imgMusical} alt={props.musical}/>
                        </div>

                        <div className={styles.pessoaImagemMusic}>
                            <img src={props.imgMusical} alt={props.musical}/>
                        </div>

                        <div className={styles.pessoaImagemMusic}>
                            <img src={props.imgMusical} alt={props.musical}/>
                        </div>

                    </div>
                </div>
            </div> 

            <div className= {styles.pessoaContentFilme}>
                <div className={styles.pessoaBoxFilme}>
                    <h3>Gosto cinematico: {props.cinema}</h3>
                </div>
                    
                <div className={styles.pessoaBoxFilme}>                   
                    <h3>Filme favorito: {props.filme}</h3>
                </div>
            </div>

            <div className={styles.pessoaImagemFilme}>
                    <img src={props.imgFilme} alt={props.filme}/>
                </div>

            <div>
                <div className={styles.pessoaContentHobbie}>

                    <div className={styles.pessoaBoxHobbie}>
                        <img src={props.imgJogos} alt={props.jogos}/>
                        <h3>Hobbie: {props.jogos}</h3>
                    </div>

                    <div className={styles.pessoaBoxHobbie}>
                        <img src={props.imgFuebol} alt={props.futebol}/>
                        <h3>Hobbie: {props.futebol}</h3>
                    </div>

                    <div className={styles.pessoaImagemHobbie}>
                        <img src={props.imgDesign} alt={props.design}/>
                    </div>
                    <div className={styles.pessoaBoxHobbie}>
                        <h3>Hobbie: {props.design}</h3>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Pessoa