import styles from './Pessoa.module.css'

function Pessoa(props){
    return(
        <div className={styles.pessoaContainer}>
            <div className={styles.pessoaContentInfo}>
                <div className={styles.pessoaImagemInfo}>
                    <img src={props.foto} alt={props.nome}/>
                </div>
                <div className={styles.pessoaBoxInfo}>
                    <p>Nome: {props.nome}</p>
                    <p>Idade: {props.idade}</p>
                    <p>Profissão: {props.profissao}</p>
                </div>
            </div>
            
            <h2 className={styles.pessoaH2}>Gostos Pessoais</h2>


            <div className={styles.pessoaContentMusic}>
                <div className={styles.pessoaH3}>
                    <h3>Músicas favoritas</h3>
                </div>
                
                <div className={styles.pessoaBoxMusic}>
                    <div className={styles.pessoaDisplayMusic}>
                        <div className={styles.pessoaImagemMusic}>
                            <div>
                                <img src={props.imgMusica} alt={props.musica1}/>
                            </div>
                            <p>{props.musica1}</p>
                        </div>

                        <div className={styles.pessoaImagemMusic}>
                            <div>
                                <img src={props.imgMusica} alt={props.musica2}/>
                            </div>
                            <p>{props.musica2}</p>
                        </div>

                        <div className={styles.pessoaImagemMusic}>
                            <div>
                                <img src={props.imgMusica} alt={props.musica3}/>
                            </div>
                            <p>{props.musica3}</p>
                        </div>

                        <div className={styles.pessoaImagemMusic}>
                            <div>
                                <img src={props.imgMusica} alt={props.musica4}/>
                            </div>
                            <p>{props.musica4}</p>
                        </div>

                        <div className={styles.pessoaImagemMusic}>
                            <div>
                                <img src={props.imgMusica} alt={props.musica5}/>
                            </div>
                            <p>{props.musica5}</p>
                        </div>

                        <div className={styles.pessoaImagemMusic}>
                            <div>
                                <img src={props.imgMusica} alt={props.musica6}/>
                            </div>
                            <p>{props.musica6}</p>
                        </div>

                    </div>
                </div>
            </div> 
                    

            <div className= {styles.pessoaContentFilme}>
                <div className={styles.pessoaH3}>
                    <h3>Filmes Favoritos</h3>   
                </div>

                <div className={styles.pessoaBoxFilme}>
                    <div className={styles.pessoaDisplayFilme}>
                        <div className={styles.pessoaImagemFilme}>
                            <img src={props.imgFilme} alt={props.filme1}/>
                            <p>{props.filme1}</p>
                        </div>
                        <div className={styles.pessoaImagemFilme}>
                            <img src={props.imgFilme} alt={props.filme2}/>
                            <p>{props.filme2}</p>
                        </div>
                        
                        <div className={styles.pessoaImagemFilme}>
                            <img src={props.imgFilme} alt={props.filme3}/>
                            <p>{props.filme3}</p>
                        </div>
                        
                        <div className={styles.pessoaImagemFilme}>
                            <img src={props.imgFilme} alt={props.filme4}/>
                            <p>{props.filme4}</p>
                        </div>
                        
                        <div className={styles.pessoaImagemFilme}>
                            <img src={props.imgFilme} alt={props.filme5}/>
                            <p>{props.filme5}</p>
                        </div>

                        <div className={styles.pessoaImagemFilme6}>
                            <img src={props.imgFilme} alt={props.filme6}/>
                            <p>{props.filme6}</p>
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
                            <img src={props.imgDesign} alt={props.design}/>
                        </div>
                        <div className={styles.pessoaHobbie}>
                            <p>{props.design}</p>
                        </div>
                    </div>

                    <div>
                        <div className={styles.pessoaImagemHobbie}>
                            <img src={props.imgDesign} alt={props.futebol}/>
                        </div>
                        <div className={styles.pessoaHobbie}>
                            <p>{props.futebol}</p>
                        </div>
                    </div>

                    <div>
                        <div className={styles.pessoaImagemHobbie}>
                            <img src={props.imgDesign} alt={props.geografia}/>
                        </div>
                        <div className={styles.pessoaHobbie}>
                            <p>{props.geografia}</p>
                        </div>
                    </div>

                    <div>
                        <div className={styles.pessoaImagemHobbie}>
                            <img src={props.imgDesign} alt={props.jogos}/>
                        </div>
                        <div className={styles.pessoaHobbie}>
                            <p>{props.jogos}</p>
                        </div>
                    </div>
                    
                    <div>
                        <div className={styles.pessoaImagemHobbie}>
                            <img src={props.imgDesign} alt={props.comida}/>
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