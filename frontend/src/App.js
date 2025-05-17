import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MyNotes from "./pages/MyNotes";
import Dashboard from "./pages/Dashboard";
import NotesSummary from "./pages/NotesSummary";
import Shared from "./pages/Shared";
import CreateNote from "./pages/CreateNote";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard/" element={<NotesSummary />} />
            <Route path="/dashboard/myNotes" element={<MyNotes />} />
            <Route path="/dashboard/shared" element={<Shared />} />
            <Route path="/dashboard/createNote" element={<CreateNote />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
