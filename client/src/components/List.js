import React from 'react';

import { Card, CardText, CardBlock,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import NewCardForm from './NewCardForm';


function makeCards(cards) {
    return cards.map(card => {
            const { completed, title, description, id } = card;
        return (
            <Card key={id}>
                <CardBlock>
                    <CardTitle>Card: {title}</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>{description}</CardText>
                    <Button>Open</Button>
                    <Button>{completed ? "Completed" : "In progress"}</Button>
                </CardBlock>
            </Card>
        );
    });
}

const List = (props) => {
    const { Cards, boardId, name, children, id } = props;
  return (
    <div>
      <Card>
        <CardBlock>
          <CardTitle>List: {name}</CardTitle>
          <CardSubtitle>List subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <NewCardForm buttonLabel="Add new card" listId={id}/>
        </CardBlock>
        <CardBlock>
            {makeCards(Cards)}
        </CardBlock>
      </Card>
    </div>
  );
};

export default List;


