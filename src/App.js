import React from "react";
import { connect } from "react-redux";
import "./App.css";
import { getMovies, addMovie, deleteMovie } from "./store/actions/movie";

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
    <div className="App">
      <h1>Redux with API</h1>
      <form onSubmit={onSubmit}>
        <input
          style={{ width: "50%" }}
          type="text"
          placeholder="title"
          onChange={change}
        />
        <button>add</button>
        {lists}
      </form>
      <ol></ol>
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
