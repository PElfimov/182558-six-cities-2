import React from "react";
import Header from '../Header/Header';
import Tabs from "../../Tabs/Tabs";
import Cities from "../Cities/Cities";

export default function Main() {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs />
        <Cities />
      </main>
    </div>
  );
}
