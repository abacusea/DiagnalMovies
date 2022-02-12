import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "tailwindcss/dist/base.min.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import SearchContextProvider from "./context/search-context";
import MovieContextProvider from "./context/movies-context";

// store
const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  
     <Provider store={store}>
       <MovieContextProvider>
        <SearchContextProvider> 
          <App />
        </SearchContextProvider>
       </MovieContextProvider>
     </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
