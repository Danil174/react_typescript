import React from 'react'
import { useHistory } from 'react-router-dom';

const AboutPage: React.FC = () => {
    const history = useHistory();

    return (
        <>
            <h1>Страница информации</h1>
            <p>Много информации............... ............... ......... ............</p>
            <button 
                className="btn"
                onClick={() => history.push('/')}
            >
                Обратно к списку дел
            </button>
        </>
    )
}

export default AboutPage;