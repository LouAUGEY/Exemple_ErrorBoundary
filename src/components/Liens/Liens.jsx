import Carousel from 'react-bootstrap/Carousel';
import styles from './Liens.module.css'

const Liens = (props) => {

    return(
        <Carousel controls className={styles.liens}>
            <Carousel.Item interval={1500}>
                <a href='https://fr.reactjs.org/docs/error-boundaries.html' 
                target='_blank' className={[styles.element, styles.bleu].join(' ')}>
                    Lien vers le site de React
                </a>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <a href='https://medium.com' target='_blank' className={[styles.element, styles.vert].join(' ')}>
                    Lien vers article Medium
                </a>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <a href='https://github.com/LouAUGEY/Exemple_ErrorBoundary' 
                target='_blank' className={[styles.element, styles.gris].join(' ')}>
                    Lien vers repo GitHub
                </a>
            </Carousel.Item>
        </Carousel>
    )
}

export default Liens;