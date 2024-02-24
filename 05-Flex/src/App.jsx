import "./App.css";

function App() {
  return (
    <>
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex-none basis-1/6 bg-blue-400">Sidebar</div>
        <div className="grow bg-red-400 basis-5/6">Main Content</div>
      </div>
      {/* For horizontal alingment : 
       justify-center justify-start justify-end justify-between justify-evenly */}
      {/* For vertical alignment : 
       items-stretch items-start items-center items-end items-baseline*/}
      <div className="flex flex-wrap">
        <div className="w-60">01</div>
        <div className="w-60">02</div>
        <div className="w-60">03</div>
        <div className="w-60">04</div>
        <div className="w-60">05</div>
        <div className="w-60">06</div>
        <div className="w-60">07</div>
        <div className="w-60">08</div>
        <div className="w-60">09</div>
        <div className="w-60">10</div>
      </div>
    </>
  );
}

export default App;
