import "./App.css";
import Description from "./component/Description";
import Header from "./component/Header";
import Top from "./component/Top";

function App() {
  return (
    <div className="bg-gray-300 flex items-center justify-center py-10  ">
      <div className="bg-white flex flex-col justify-between w-2/4 border-double border-4 border-sky-500">
        <div>
          <Header />
          <Top />
        </div>
        <Description />
      </div>
    </div>
  );
}

export default App;
