import React from "react";
import { connect } from "react-redux";
import "./App.css";
import { getMovies, addMovie, deleteMovie } from "./store/actions/movie";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Page Component
import HomePage from "./page/HomePage";
import SignInPage from "./page/SignInPage";
import SignUpPage from "./page/SignUpPage";
import DetailPageOverview from "./page/DetailPageOverview";
import ReviewComponent from "./components/ReviewComponent";
import CharacterComponent from "./components/CharacterComponent";

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
          <Route path="/" exact component={HomePage} />
          <Route path="/signin" component={SignInPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/detailpage" component={DetailPageOverview} />
          <Route path="/reviewpage" component={ReviewComponent} />
          <Route path="/characterpage" component={CharacterComponent} />
        </Switch>
      </Router>
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
