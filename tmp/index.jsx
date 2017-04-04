import React from 'react';
import ReactDOM from 'react-dom';
 
function Hero(props) {
    return (
        <div className="card-container">
            <img src={props.imageUrl} />
            <h1>{props.title}</h1>
            <p>{props.subtitle.phone}</p>
        </div>
    );
}

var App = React.createClass({
    render: function() {
        return (
            <div>
                {this.props.heroes.map(function(hero) {
                    return <Hero key={hero.id} title={hero.name} subtitle={hero.contacts} imageUrl={hero.imageUrl} />
                })}
            </div>
        );
    }
});

module.exports = function render(cards) {
  ReactDOM.render(<App heroes={cards} />, document.getElementById('root'));
};