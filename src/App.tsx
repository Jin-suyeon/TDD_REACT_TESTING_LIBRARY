import "./App.css";
import JoinButton from "./components/JoinButton";
import MyPage from "./components/MyPage";

function App() {
  return (
    <>
      <MyPage user={{ name: "수연" }} />
      <JoinButton age={18} />
    </>
  );
}

export default App;
