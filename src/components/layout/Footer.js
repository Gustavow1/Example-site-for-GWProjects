import {FaLinkedin, FaGithub} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <a href="https://www.linkedin.com/in/gustavowr/" rel="noreferrer" target="_blank">
                        <FaLinkedin/>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Gustavow1" rel="noreferrer" target="_blank">
                        <FaGithub/>
                    </a>
                </li>
            </ul>
            <p className={styles.copy_right}> <span>GWProject</span> &copy; 2022</p>
        </footer>
    )
}

export default Footer