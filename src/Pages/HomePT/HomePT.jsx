import Header from '../../Components/Header';
import Footer from '../../Components/FooterPT';
import styles from './HomePT.module.css';

/*--IMAGENS--*/

import Refrigerantes from '../../Assets/Refris.png';
import Detalhes1 from '../../Assets/Detalhe1.svg';
import Detalhes2 from '../../Assets/Detalhe2.svg';
import Detalhes3 from '../../Assets/Detalhes3.svg';
import John from '../../Assets/John Pemberton.png';
import OutrasMarcas from '../../Assets/Afiliados.png';

function HomePT() {
    return (
        <div>
            <Header />
            <div className={styles.Inicio} >
                <div className={styles.SobreCoca}>
                    <h1>Sobre a<span className={styles.Red}> Coca-Cola</span>
                    </h1>
                    <h4>
                        A <span className={styles.Red}> Coca-Cola</span> é uma bebida que vem do extrato de noz de cola.
                        A princípio a <span className={styles.Red}> Coca-Cola</span> seria usada como remédio para dores no estômago.  Após a morte de John Pemberton, Frank Robinson vendeu a fórmula do tônico por U$2,3 mil para Asa Griggs Candler, que patenteou a marca e investiu em branding e ótimas estratégias de marketing. Uma das estratégias utilizadas foi cupons com o direito de um copo da bebida.
                    </h4>
                    <h5>
                        Já no Brasil, a sua chegada foi em 1941, e em 1942 foi construída a sua primeira fábrica no <span className={styles.Red}> Rio de Janeiro</span>, não demorou muito tempo e a bebida conquistou os brasileiros, em 1962 surgiram produtores da matéria prima, e a <span className={styles.Red}> Coca-Cola</span> lançou a sua segunda bebida: <span className={styles.Red}> Fanta Laranja</span>
                    </h5>
                </div>
                <div className={styles.Refris}>
                    <img src={Refrigerantes} />
                </div>
                <div className={styles.Detalhe1}>
                <img src={Detalhes1} />
                </div>
            </div>

            <div className={styles.Criador}>
                <div className={styles.SobreCriador}>
                    <h1>Sobre o<span className={styles.Red}> Criador</span>
                    </h1>
                    <h4>
                        A Coca-Cola foi criada pelo farmacêutico <span className={styles.Red}> John Pemberton, em maio de 1886</span>, em Atlanta, nos Estados Unidos. Após 2 anos da criação da coca-cola John acabou falecendo devido ao vício de morfina, e não teve a oportunidade de ver a sua criação dando certo.
                    </h4>
                </div>
                <div className={styles.Fundador}>
                    <img src={John} />
                </div>
                <div className={styles.Detalhe2}>
                    <img src={Detalhes2} />
                </div>
            </div>

            <div className={styles.Afiliados}>
                <div className={styles.MarcasComp}>
                    <h1>Marcas que a <span className={styles.Black}> Coca-Cola</span> comprou
                    </h1>
                    <h4>
                        Em 1962 a <span className={styles.Black}>Coca-Cola</span> decidiu comprar a <span className={styles.Black}>Fanta Laranja</span> como uma opção pela falta de matéria prima para a produção da <span className={styles.Black}>Coca-Cola</span>.
                        A Coca-Cola comprou mais de <span className={styles.Black}>500 marcas</span>.
                    </h4>
                </div>
                <div className={styles.OutrasMarcas}>
                    <img src={OutrasMarcas} />
                </div>
                <div className={styles.Detalhe3}>
                    <img src={Detalhes3} />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default HomePT; 
