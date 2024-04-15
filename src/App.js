import Card from "./components/card";
import Nav from "./components/nav";

import data from "./data/data";
function App() {
  return (
    <div className="flex flex-col bg-white justify-center items-center min-h-fit">
      <Nav/>
      {data.map((info) => (
        <Card
          location={info.location}
          country={info.country}
          date={info.date}
          desc={info.description}
          key={info.id}
          image={info.imageLink}
        />
      ))}
    </div>
  );
}

export default App;
