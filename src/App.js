import React from "react";
import { Route, Link } from "react-router";
import "./styles.css";

function Page({ children }) {
  return <div>{children}</div>;
}

function App({ children }) {
  return (
    <Page>
      <h1>
        <Link to="/">McDonald&apos;s</Link>
      </h1>
      <Link to="/about">About</Link>
      <br />
      <Link to="/menu">Menu</Link>
      <br />
      <Link to="/reservations">Reservations</Link>
      {children}
    </Page>
  );
}

function Menu() {
  return <Page>This is the Menu Page</Page>;
}

function About() {
  return <Page>This is the About Page</Page>;
}

function Reservations() {
  return <Page>This is the Reservations Page</Page>;
}

export default function getRoutes() {
  return (
    <Route component={App} path="/">
      <Route component={Menu} path="/menu" />
      <Route component={About} path="/about" />
      <Route component={Reservations} path="/reservations" />
    </Route>
  );
}
