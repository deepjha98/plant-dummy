import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import store from "store";
import View from "views";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <View />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
