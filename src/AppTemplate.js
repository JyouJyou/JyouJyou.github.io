import Navigation from './components/navigation';
import React from 'react'

export function AppTemplate({children}) {

    return (
        <div>
            <Navigation />
            {children}
        </div>
    )
}

export default AppTemplate;
