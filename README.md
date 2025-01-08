# Application Compteur avec React.js

Ce projet est une application simple de compteur développée avec React.js. L'application permet d'incrémenter, décrémenter et réinitialiser une valeur tout en affichant des couleurs différentes selon l'état du compteur.

## **Prérequis**

- Node.js installé sur votre machine
- npm (installé avec Node.js)
- Un éditeur de code comme Visual Studio Code

---

## **Étapes pour configurer et exécuter le projet**

### 1. **Créer un nouveau projet React**
Exécutez la commande suivante pour créer un projet React avec **Create React App** :
```bash
npx create-react-app compteur-app
```

### 2. **Installer les dépendances nécessaires**
Naviguez dans le répertoire du projet et installez les bibliothèques supplémentaires :
```bash
cd compteur-app
npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons framer-motion
```

### 3. **Créer les fichiers nécessaires**
Créez les fichiers suivants dans le répertoire **src** :

#### 3.1 **`Counter.jsx`**
Ajoutez le composant principal pour le compteur :
```javascript
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
                <FontAwesomeIcon icon={faPlus} />
            </button>
            <button onClick={decrement} style={{ margin: '0 10px' }}>
                <FontAwesomeIcon icon={faMinus} />
            </button>
            <button onClick={reset}>
                <FontAwesomeIcon icon={faRedo} />
            </button>
        </div>
    );
};

export default Counter;
```

#### 3.2 **`Counter.css`**
Ajoutez les styles pour l'application :
```css
body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f9;
    color: #333;
}

h2 {
    margin: 20px 0;
    font-size: 2rem;
    font-weight: bold;
}

.positive {
    color: #28a745;
}

.negative {
    color: #dc3545;
}

.neutral {
    color: #6c757d;
}

button {
    background-color: #007bff;
    color: white;
    font-size: 1rem;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
}

button:hover {
    background-color: #0056b3;
}

button:active {
    background-color: #004085;
    transform: scale(0.95);
}
```

---

### 4. **Intégrer le composant dans l'application**
Modifiez le fichier **src/App.js** pour inclure le composant `Counter` :
```javascript
import React from 'react';
import Counter from './Counter';

function App() {
    return (
        <div>
            <Counter />
        </div>
    );
}

export default App;
```

---

### 5. **Exécuter l'application**
Démarrez le serveur de développement avec la commande :
```bash
npm start
```

L'application sera accessible à l'adresse : `http://localhost:3000`.

---

## **Améliorations possibles**
- Ajouter des animations plus complexes avec [Framer Motion](https://www.framer.com/motion/).
- Ajouter un thème sombre.
- Enregistrer les valeurs dans le stockage local pour conserver l'état après actualisation de la page.

---

## **Capture d'écran**
> *(Ajoutez une capture d'écran de l'application ici)*

---

## **Dépendances utilisées**
- **React** : pour créer des composants.
- **Font Awesome** : pour afficher des icônes.
- **Framer Motion** : pour les animations.

---

