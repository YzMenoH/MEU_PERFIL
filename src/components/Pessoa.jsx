import styles from './Pessoa.module.css'

function Pessoa(props){
    return(
        <div className={styles.pessoaContainer}>
            <div className={styles.pessoaContentInfo}>
                <div className={styles.pessoaImagemInfo}>
                    <img src={props.foto} alt={props.nome}/>
                </div>
                <div className={styles.pessoaBoxInfo}>
                    <h4>Nome: {props.nome}</h4>
                    <h4>Idade: {props.idade}</h4>
                    <h4>Profissão: {props.profissao}</h4>
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
                            <img src={props.imgMusica} alt={props.musica}/>
                        </div>

                        <div className={styles.pessoaImagemMusic}>
                            <img src={props.imgMusica} alt={props.musica}/>
                        </div>

                        <div className={styles.pessoaImagemMusic}>
                            <img src={props.imgMusica} alt={props.musica}/>
                        </div>

                        <div className={styles.pessoaImagemMusic}>
                            <img src={props.imgMusica} alt={props.musica}/>
                        </div>

                        <div className={styles.pessoaImagemMusic}>
                            <img src={props.imgMusica} alt={props.musica}/>
                        </div>

                        <div className={styles.pessoaImagemMusic}>
                            <img src={props.imgMusica} alt={props.musica}/>
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
                            <img src={props.imgFilme} alt={props.filme}/>
                        </div>
                        <div className={styles.pessoaImagemFilme}>
                            <img src={props.imgFilme} alt={props.filme}/>
                        </div>
                        
                        <div className={styles.pessoaImagemFilme}>
                            <img src={props.imgFilme} alt={props.filme}/>
                        </div>
                        
                        <div className={styles.pessoaImagemFilme}>
                            <img src={props.imgFilme} alt={props.filme}/>
                        </div>
                        
                        <div className={styles.pessoaImagemFilme}>
                            <img src={props.imgFilme} alt={props.filme}/>
                        </div>

                        <div className={styles.pessoaImagemFilme}>
                            <img src={props.imgFilme} alt={props.filme}/>
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
                        <div className={styles.pessoaH4Hobbie}>
                            <h4>{props.hobbie}</h4>
                        </div>
                    </div>

                    <div>
                        <div className={styles.pessoaImagemHobbie}>
                            <img src={props.imgDesign} alt={props.design}/>
                        </div>
                        <div className={styles.pessoaH4Hobbie}>
                            <h4>{props.hobbie}</h4>
                        </div>
                    </div>

                    <div>
                        <div className={styles.pessoaImagemHobbie}>
                            <img src={props.imgDesign} alt={props.design}/>
                        </div>
                        <div className={styles.pessoaH4Hobbie}>
                            <h4>{props.hobbie}</h4>
                        </div>
                    </div>

                    <div>
                        <div className={styles.pessoaImagemHobbie}>
                            <img src={props.imgDesign} alt={props.design}/>
                        </div>
                        <div className={styles.pessoaH4Hobbie}>
                            <h4>{props.hobbie}</h4>
                        </div>
                    </div>
                    
                    <div>
                        <div className={styles.pessoaImagemHobbie}>
                            <img src={props.imgDesign} alt={props.design}/>
                        </div>
                        <div className={styles.pessoaH4Hobbie}>
                            <h4>{props.hobbie}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pessoa