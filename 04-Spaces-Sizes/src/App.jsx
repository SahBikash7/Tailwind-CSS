import "./App.css";

function App() {
  return (
    <>
      {/* <div className=" m-4 font-bold text-white bg-red-600">
        Box with margin
      </div>
      <div className=" p-4 font-bold text-white bg-blue-600">
        Box with padding
      </div> */}
      <div className="flex space-x-4">
        <div className="bg-red-600 w-1/5 min-h-screen"></div>
        <div className="bg-green-600 w-4/5 h-48"></div>
      </div>
    </>
  );
}

export default App;
