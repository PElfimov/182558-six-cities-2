import React from "react";
import Tabs from './../../tabs-panel/tabs/tabs';
import Header from './../../header/header';
import withActiveCard from './../../../hocs/with-active-card/with-active-card';
import City from './../city/city';

function Main() {

  const WithActiveCard = withActiveCard(City);
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs />
        <WithActiveCard />
      </main>
    </div>
  );
}

Main.propTypes = {};

export default Main;


