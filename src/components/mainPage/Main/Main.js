import React from "react";
import Header from '../Header/Header';
import City from "../City/City";
import Tabs from '../../tabsPanel/Tabs/Tabs';

export default function Main() {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs/>
        <City />
      </main>
    </div>
  );
}
