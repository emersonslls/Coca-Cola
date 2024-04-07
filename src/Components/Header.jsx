import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import LogoCoca from '../Assets/Coca-Cola.png';
import Brasil from '../Assets/iconPT.png';
import EstadosUnidos from '../Assets/iconEN.png';

function Header() {
    return (
        <header>
               <Link to="/">
                <div className={styles.Logo}>
                <img src={LogoCoca} alt="Coca-Cola Logo" />
            </div>
               </Link>

            <div className={styles.Lenguage}>
                <Link to="/pt">
                    <div className={styles.Portugues}>
                        <img src={Brasil} alt="Brasil" />
                    </div>
                </Link>
                <Link to="/en">
                    <div className={styles.English}>
                        <img src={EstadosUnidos} alt="Estados Unidos" />
                    </div>
                </Link>
            </div>
        </header>
    );
}

export default Header;
