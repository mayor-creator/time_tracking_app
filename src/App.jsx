import { Profile } from "./components/Profile.jsx";
import { Card } from "./components/Card.jsx";
import { data } from "./util/data.js";

function App() {
  return (
    <>
      <header>
        <h1>Time Tracking Dashboard</h1>
      </header>
      <main>
        <Profile />
        <div>
          {data.map((dataItem) => (
            <Card key={dataItem.title} data={dataItem} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
