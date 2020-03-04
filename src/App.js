import React from "react";
import { connect } from "react-redux";
import "./App.css";
import { getMovies, addMovie, deleteMovie } from "./store/actions/movie";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderPage from "./components/HeaderPage";
import SlideShow from "./components/SlideShow";
import Section from "./components/Section";
import FooterPage from "./components/FooterPage";

const App = props => {
  const [title, setTitle] = React.useState("");

  const change = e => {
    setTitle(e.target.value);
    console.log(title);
  };

  const onSubmit = e => {
    e.preventDefault();
    props.addMovie(title);
  };

  const onDelete = id => {
    props.deleteMovie(id);
  };

  React.useEffect(() => {
    props.getMovies();
  });

  const lists = props.movies.map(item => (
    <li key={item.id}>
      {item.title}
      <button onClick={() => onDelete(item.id)}>delete</button>
    </li>
  ));

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/anime" component={Section} />
        </Switch>
      </Router>
      <HeaderPage />
      <SlideShow />
      <Section />
      {/* <FooterPage /> */}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    movies: state.movieReducer.movies
  };
};

export default connect(mapStateToProps, {
  getMovies,
  addMovie,
  deleteMovie
})(App);
