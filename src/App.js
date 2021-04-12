import "./App.scss";
import routers from "./router";
import renderRouter from "./core/routerConfig";
import AppProvider from "./core/GlobalState";
import mySaga from "./redux/sa-ga";
import reducers from "./redux/reducer";

function App() {
  return (
    <AppProvider appSaga={mySaga} reducers={reducers}>
      {renderRouter(routers)}
    </AppProvider>
  );
}

export default App;
