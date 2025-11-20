import data from "./data.js"
import Header from "./components/Header.jsx"
import Entry from "./components/Entry.jsx"

export default function App() {
    
    const entryElements = data.map(function(entry) {
        return (
            <Entry 
            key={entry.id}
            title={entry.title}
            state={entry.state}
            googleMapsUrl={entry.googleMapsUrl}
            dates={entry.dates}
            text={entry.text}
            image={entry.image}
            />
        )
    })
    
    return (
        <>
            <Header />
            <main className="main-container">
                {entryElements}
            </main>
        </>
)
}