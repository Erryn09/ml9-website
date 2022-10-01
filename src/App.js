import Navbar from "./components/Navbar";
import Feed from "./components/Feed";

function App() {
  return (
    <div className="text-center bg-red-900 md:bg-slate-600 md">
      <Navbar />
      <hi className="text-3xl text-green-400 bg-slate-300">
        Habinger is an Otto!!!
      </hi>
      <Feed />
    </div>
  );
}

export default App;
