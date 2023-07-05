import React from 'react';
import ReactDOM from 'react-dom';
import SearchMovies from './searchMovies';
// import Result from './result';
// import Main from './Main';
import './style.css';

// const Main = () => {
//   return (
//     <div className="container">
//       <h1 className="title">React Movie Search</h1>
//       <SearchMovies />
//       <Result />
//     </div>
//   );
// };

// ReactDOM.render(<Main />, document.getElementById('root'));
// ReactDOM.render(
//   <React.StrictMode>
//     {/* <Main /> */}
//     <SearchMovies />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <h1 className="title">React Movie Search</h1>
      <SearchMovies />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);