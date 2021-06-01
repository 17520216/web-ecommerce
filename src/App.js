import "./App.scss";
import routers from "./router";
import renderRouter from "./core/routerConfig";
import AppProvider from "./core/GlobalState";
import mySaga from "./redux/sa-ga";
import reducers from "./redux/reducer";
import TranslateProvider from "./core/Translate";
import vi from "./translateLang/vi.json";
let translate = {
  vi,
};

function App() {
  return (
    <TranslateProvider translate={translate}>
      <AppProvider appSaga={mySaga} reducers={reducers}>
        {renderRouter(routers)}
      </AppProvider>
    </TranslateProvider>
  );
}

export default App;
