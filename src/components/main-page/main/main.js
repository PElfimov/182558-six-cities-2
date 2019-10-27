import React from "react";
import Header from '../header/header';
import City from "../city/city";
import Tabs from '../../tabs-panel/tabs/tabs';

export default function Main() {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs />
        <City />
      </main>
    </div>
  );
}
