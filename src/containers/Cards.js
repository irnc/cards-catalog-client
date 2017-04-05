import React from 'react';
import Card from "../components/Card";

// TODO move to components
function Cards(props) {
    return (
        <div className="cards">
            {
                props.cards.map ((card) => {
                return <Card name={card.name} contacts={card.contacts} />
                })
        }
        </div>
    );
}

class CardsRoute extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false };
    }
    
    componentDidMount() {
        fetch('https://httpbin.org/get').then(res => res.json()).then(body => {
            this.setState({
                loaded: true,
                cards: [
                    { card: 1, headers: body.headers }
                ]
            });
        });
    }
    
    render() {
        if (!this.state.loaded) {
            return <div>Not loaded</div>;
        }
        
        return <Cards cards={this.state.cards} />;
    }
}

export default CardsRoute;
export default connect(mapS, mapD)(Cards)
