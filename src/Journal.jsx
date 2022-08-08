import React from 'react'
import Card from './components/Card'
import JournalData  from './data.js'

function Journal() {
    
    const card = JournalData.map((data) => {
        return (
            <Card 

                Key = {data.key}
                data = {data}

            />
        )
        

    });


    return (
        <div>
            {card}
        </div>
    );
}

export default Journal;