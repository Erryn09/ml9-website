import { Route, Routes } from "react-router-dom";
import Error from "./pages/Error";
import Events from "./pages/Events";
import Guides from "./pages/Guides";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import PatchNotes from "./pages/PatchNotes";
import Tournament from "./pages/Tournament";
import Tournaments from "./pages/Tournaments";
import TournamentList from "./pages/TournamentList";

function App() {
  return (
    <div
      className="text-gray-300 min-h-screen bg-no-repeat bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url(/img/GauntletBene.png)" }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/events" element={<Events />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/patchNotes" element={<PatchNotes />} />
        <Route path="/tournaments" element={<TournamentList />}>
          <Route index element={<Tournaments />} />
          <Route path="/tournaments/:id" element={<Tournament />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
