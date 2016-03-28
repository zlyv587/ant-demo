import React from 'react'
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import update from 'react/lib/update';
import MyDragSource from '../page/MyDragSource.jsx'
import MyDropTarget from '../page/MyDropTarget.jsx'
import Card from '../page/Card.jsx'
const style = {
  width: 400
};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.moveCard = this.moveCard.bind(this);
    this.state = {
      formData: {
        cards: [
          {
            text: '1'
          }, {

            text: '2'
          }, {
            text: '3'
          }

        ]
      },
      cards: [{

        text: 'Make it generic enough'
      }, {

        text: 'Write README'
      }, {

        text: 'Create some examples'
      }, {
        text: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)'
      }, {

        text: '???'
      }, {

        text: 'PROFIT'
      }]
    };
  }

  moveCard(dragIndex, hoverIndex) {
    //const cards = this.state.formData.cards;
    //const dragCard = cards[dragIndex];
    //
    // this.setState(update(this.state.formData, {
    //  cards: {
    //    $splice: [
    //      [dragIndex, 1],
    //      [hoverIndex, 0, dragCard]
    //    ]
    //  }
    //}));
    const cards = this.state.cards;
    const dragCard = cards[dragIndex];

    console.log(cards, 44444);

    console.log(update(this.state, {
      cards: {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragCard]
        ]
      }
    }));

     this.setState(update(this.state, {
      cards: {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragCard]
        ]
      }
    }));
  }

  moveCardFormData(dragIndex, hoverIndex) {
    const cards = this.state.formData.cards;
    const dragCard = cards[dragIndex];

     this.setState(update(this.state, {
       formData: {
      cards: {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragCard]
        ]
      }}
    }));
  }


  render() {
    const { cardsFormData } = this.state.formData;
    const { cards } = this.state;
    const _this = this;
    return (
      <div>
        <div style={style}>
        {cards.map((card, i) => {
          return (
          <Card key={card.text}
                index={i}
                text={card.text}
                moveCard={_this.moveCard}/>
            );
          })}
      </div>
        <div style={style}>
        {_this.state.formData.cards.map((card, i) => {
          return (
          <Card key={card.text}
                index={i}
                text={card.text}
                moveCard={_this.moveCardFormData.bind(this)}/>
            );
          })}
      </div>
      </div>

    );
  }
}
export default DragDropContext(HTML5Backend)(App);
