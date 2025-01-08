import React, { useState } from 'react';
import './Counter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faRedo } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    // Détermine la classe CSS en fonction de la valeur du compteur
    const getClassName = () => {
        if (count > 0) return 'positive';
        if (count < 0) return 'negative';
        return 'neutral';
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <motion.h2
                animate={{ scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className={getClassName()}
            >
                Valeur actuelle : {count}
            </motion.h2>
            <button onClick={increment}>
                <FontAwesomeIcon icon={faPlus} /> {/* Icône Incrémenter */}
            </button>
            <button onClick={decrement} style={{ margin: '0 10px' }}>
                <FontAwesomeIcon icon={faMinus} /> {/* Icône Décrémenter */}
            </button>
            <button onClick={reset}>
                <FontAwesomeIcon icon={faRedo} /> {/* Icône Réinitialiser */}
            </button>
        </div>
    );
};

export default Counter;