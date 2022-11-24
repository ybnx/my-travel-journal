import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data";
import "./style.css";

export default function App() {
    const cards = data.map(item => <Card item={item} />);
    return (
        <div>
            <Header />
            <section className="card--list">
                {cards}
            </section>
        </div>
    )
}



