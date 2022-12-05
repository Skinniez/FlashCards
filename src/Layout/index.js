import React from "react";
import {
  Link,
  Route,
  Switch,
} from "react-router-dom";
import Header from "./Header";
import NotFound from "../Layout/NotFound";
import DeckList from "../DeckControl/DeckList";
import DeckView from "../DeckControl/DeckView"
import CreateDeck from "../DeckControl/CreateDeck"
import EditDeck from "../DeckControl/EditDeck";
import AddCard from "../CardControl/AddCard";
import EditCard from "../CardControl/EditCard";
import StudyDeck from "../DeckControl/StudyDeck";

function Layout() {  
  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Link to="/decks/new" className="btn btn-secondary">Create Deck</Link>
            <DeckList />
          </Route>
          <Route path="/decks/new">
            <CreateDeck />        
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />        
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <AddCard />        
          </Route>
          <Route path="/decks/:deckId/study">
             <StudyDeck />
          </Route>
          <Route path="/decks/:deckId/edit">
             <EditDeck />
          </Route>
          <Route path="/decks/:deckId">
            <DeckView />        
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
