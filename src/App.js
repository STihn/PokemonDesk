import React from 'react';
import './custom.css';
import s from './App.modules.scss';
import cn from 'classnames';

const App = () => {
    return (
        <div className={cn(s.header, 'color')}>
            Aloha! this is App Component!
        </div>
    )
}

export default App;