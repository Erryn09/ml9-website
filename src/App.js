import Navbar from "./components/Navbar";
import Feed from "./components/Feed";

function App() {
  return (
    <div
      className=" text-gray-300 bg-no-repeat bg-fixed bg-cover bg-center "
      style={{ backgroundImage: "url(/img/GauntletBene.png)" }}
    >
      <Navbar />
     <div className="flex flex-col mx-40 space-y-10 align-center justify-center">
      <Feed />
      <Feed />
      <Feed />
      <Feed />
      <Feed />
    
      
      </div> 
    </div>
  );
}

export default App;
