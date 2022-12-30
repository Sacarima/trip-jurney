import React from "react"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import data from "./data"

function App() {
    const card = data.map(item=>{
        return <MainContent 
                    key={item.id}
                    img={item.imageUrl}
                    title={item.title}
                    location={item.location}
                    startDate={item.startDate}
                    endDate={item.endDate}
                    description={item.description}
                    googleMapsUrl={item.googleMapsUrl}
                    
                />
    })
    return(
        <div >
            <Header />
            {card}
        </div>
    )
}

export default App