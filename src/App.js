import Navbar from "./components/Navbar";
import Feed from "./components/Feed";

function App() {
  return (
    <div
      className=" text-gray-300 bg-no-repeat bg-fixed bg-cover bg-center "
      style={{ backgroundImage: "url(/img/GauntletBene.png)" }}
    >
      <Navbar />
      <Feed />
      <Feed />
      <Feed />
      <Feed />
    </div>
  );
}

export default App;
