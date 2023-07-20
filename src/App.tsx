import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DataProvider } from "./pages/data_context";
import "./App.css";
import 'tailwindcss/tailwind.css';


//-----------------------Pages-----------------------//
import DragDrop from "./pages/drag_drop";
import SelectedEmails from "./pages/selected_emails";
import ComposeMail from "./pages/compose_mail";
import NotFound from "./pages/not_found";
import HomePage from "./pages/homepage";



const App = () => {
  return (
    <DataProvider>
      <Router>
        <div>
        <Routes>
          <Route path={"/"} Component={HomePage} />
          <Route path={"/upload"} Component={DragDrop} />
          <Route path="/selected-emails" Component={SelectedEmails} />
          <Route path="/compose-mail" Component={ComposeMail} />
          <Route path= "*" Component={NotFound}/>
        </Routes>
        </div>
      </Router>
    </DataProvider>
  );
};

export default App;
