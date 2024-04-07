//Importe de estilo
import styles from './FooterEN.module.css';
import { Link } from 'react-router-dom';

//Importe imagens

import LogoCocaRed from '../Assets/Coca-ColaRed.png';
import CocaFundo from '../Assets/Coca-ColaFundo.png';

function FooterEN() {
    return (
        <footer>
            <Link to="/">
                <div className={styles.Logo}>
                <img src={LogoCocaRed} />
            </div>
            </Link>
            
            <div className={styles.Logofundo}>
                <img src={CocaFundo} />
            </div>
            <div className={styles.Rodape}>
            <div className={styles.Feito}>
                <h1>
                Made by <a href="https://www.instagram.com/_sxlles/"> @_sxlles</a>
                </h1>
            </div>
                <div className={styles.Direitos}>
                    <h1>
                    © All rights reserved
                    </h1>
                </div>
            </div>
        </footer>
    );
}

export default FooterEN;