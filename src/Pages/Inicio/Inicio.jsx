import styles from './Inicio.module.css';

import { Link } from 'react-router-dom';

import LogoCoca from '../../Assets/Coca-Cola.png';

function Inicio() {
    return (
        <div>
            <div className={styles.Home} >
                <Link to="/pt">
                    <img src={LogoCoca} />
                </Link>
            </div >

        </div>
    );
}

export default Inicio;