import React from "react";
import ReactDOM from "react-dom";
import "modern-normalize/modern-normalize.css";
import "./styles/base.module.scss";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store from "./redux/store";
import App from "./components/App/App";
import Loader from "./components/Loader/Loader";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
      <PersistGate loading={<Loader />} persistor={store.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
