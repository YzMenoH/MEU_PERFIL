import styles from './Pessoa.module.css'

function Pessoa(props){
    return(
        <div className={styles.pessoaContainer}>
            <div className={styles.pessoaContentInfo}>
                <div className={styles.pessoaImagemInfo}>
                    <img src={props.foto} alt={props.nome} className={styles.EuIMG}/>
                </div>
                <div className={styles.pessoaBoxInfo}>
                    <p>Nome: {props.nome}</p>
                    <p>Idade: {props.idade}</p>
                    <p>Profissão: {props.profissao}</p>
                </div>
            </div>
            
            <h2 className={styles.pessoaH2}>Gostos Pessoais</h2>

            <div className= {styles.pessoaContentFilme}>
                <div className={styles.pessoaH3}>
                    <h3>Filmes Favoritos</h3>   
                </div>

                <div className={styles.pessoaBoxFilme}>
                    <div className={styles.pessoaDisplayFilme}>
                        <div>
                            <div className={styles.pessoaImagemFilme}>
                                <img src={props.imgFilme1} alt={props.filme1} className={styles.tamanhoIMG}/>
                            </div>
                            <div pessoaBoxFilme>
                                <p>{props.filme1}</p>
                            </div>
                        </div>
                        
                        <div>
                            <div className={styles.pessoaImagemFilme}>
                                <img src={props.imgFilme2} alt={props.filme2} className={styles.tamanhoIMG}/>
                            </div>
                            <div pessoaBoxFilme>
                                <p>{props.filme2}</p>
                            </div>
                        </div>

                        <div>
                            <div className={styles.pessoaImagemFilme}>
                                <img src={props.imgFilme3} alt={props.filme3} className={styles.tamanhoIMG}/>
                            </div>
                            <div pessoaBoxFilme>
                                <p>{props.filme3}</p>
                            </div>
                        </div>

                        <div>
                            <div className={styles.pessoaImagemFilme}>
                                <img src={props.imgFilme4} alt={props.filme4} className={styles.tamanhoIMG}/>
                            </div>
                            <div pessoaBoxFilme>
                                <p>{props.filme4}</p>
                            </div>
                        </div>

                        <div>
                            <div className={styles.pessoaImagemFilme}>
                                <img src={props.imgFilme5} alt={props.filme5} className={styles.tamanhoIMG}/>
                            </div>
                            <div pessoaBoxFilme>
                                <p>{props.filme5}</p>
                            </div>
                        </div>

                        <div>
                            <div className={styles.pessoaImagemFilme}>
                                <img src={props.imgFilme6} alt={props.filme6} className={styles.tamanhoIMG}/>
                            </div>
                            <div pessoaBoxFilme>
                                <p>{props.filme6}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className={styles.pessoaContentHobbie}>
                <div className={styles.pessoaH3}>
                    <h3>Meus Hobbies</h3>
                </div>
                <div className={styles.pessoaDisplayHobbie}>
                    <div>
                        <div className={styles.pessoaImagemHobbie}>
                            <img src={props.imgDesign} alt={props.design} className={styles.imgTamanho}/>
                        </div>
                        <div className={styles.pessoaHobbie}>
                            <p>{props.design}</p>
                        </div>
                    </div>

                    <div>
                        <div className={styles.pessoaImagemHobbie}>
                            <img src={props.imgFutebol} alt={props.futebol} className={styles.imgTamanho}/>
                        </div>
                        <div className={styles.pessoaHobbie}>
                            <p>{props.futebol}</p>
                        </div>
                    </div>

                    <div>
                        <div className={styles.pessoaImagemHobbie}>
                            <img src={props.imgGeografia} alt={props.geografia} className={styles.imgTamanho}/>
                        </div>
                        <div className={styles.pessoaHobbie}>
                            <p>{props.geografia}</p>
                        </div>
                    </div>

                    <div>
                        <div className={styles.pessoaImagemHobbie}>
                            <img src={props.imgJogos} alt={props.jogos} className={styles.imgTamanho}/>
                        </div>
                        <div className={styles.pessoaHobbie}>
                            <p>{props.jogos}</p>
                        </div>
                    </div>
                    
                    <div>
                        <div className={styles.pessoaImagemHobbie}>
                            <img src={props.imgComida} alt={props.comida} className={styles.imgTamanho}/>
                        </div>
                        <div className={styles.pessoaHobbie}>
                            <p>{props.comida}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pessoa