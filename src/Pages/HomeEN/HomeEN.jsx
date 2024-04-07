import Header from '../../Components/Header';
import Footer from '../../Components/FooterEN';
import styles from './HomeEN.module.css';

/*--IMAGENS--*/

import Refrigerantes from '../../Assets/Refris.png';
import Detalhes1 from '../../Assets/Detalhe1.svg';
import Detalhes2 from '../../Assets/Detalhe2.svg';
import Detalhes3 from '../../Assets/Detalhes3.svg';
import John from '../../Assets/John Pemberton.png';
import OutrasMarcas from '../../Assets/Afiliados.png';


function HomeEN() {
    return (
        <div>
            <Header />
            <div className={styles.Inicio} >
                <div className={styles.SobreCoca}>
                    <h1>About <span className={styles.Red}> Coca-Cola</span>
                    </h1>
                    <h4>
                        <span className={styles.Red}>Coca-Cola</span> is a beverage that comes from the extract of the cola nut. Initially, <span className={styles.Red}>Coca-Cola</span>  was intended for use as a remedy for stomach pains. After the death of John Pemberton, Frank Robinson sold the tonic formula for $2.3 million to Asa Griggs Candler, who patented the brand and invested in branding and excellent marketing strategies. One of the strategies used was coupons that entitled the holder to a glass of the beverage.

                    </h4>
                    <h5>
                       In Brazil, Coca-Cola arrived in 1941, and its first factory was built in <span className={styles.Red}>Rio de Janeiro</span> in 1942. It didn't take long for the drink to win over Brazilians. In 1962, raw material producers emerged, and <span className={styles.Red}>Coca-Cola</span> introduced its second beverage: <span className={styles.Red}> Fanta Orange</span>.
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
                    <h1>About the<span className={styles.Red}> Creator</span>
                    </h1>
                    <h4>
                    Coca-Cola was created by pharmacist <span className={styles.Red}>John Pemberton in May 1886 </span> in Atlanta, United States. Two years after the creation of Coca-Cola, John passed away due to a morphine addiction and did not have the opportunity to see his creation succeed.
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
                    <h1>Brands Acquired by <span className={styles.Black}> Coca-Cola</span> 
                    </h1>
                    <h4>
                        In 1962, <span className={styles.Black}>Coca-Cola</span>  decided to purchase <span className={styles.Black}>Fanta Laranja</span>as an alternative due to a shortage of raw materials for <span className={styles.Black}>Coca-Cola</span> production.
                        Coca-Cola has acquired more than <span className={styles.Black}>500 brands</span>.
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

export default HomeEN; 
