import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import { Provider } from "react-redux";
// import { store } from "./store/store.ts";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./features/global/styles/theme/ThemeProvider.tsx";
import client from "./apollo/apolloApi.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <Provider store={store}>
  <ApolloProvider client={client}>
  <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider></ApolloProvider>
  // </Provider>
);
