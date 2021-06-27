import Nav from "../components/Nav/Nav";
import genClass from "../helpers/genClass";
import History from "../components/History/History";

const history = [
  {
    amount: -300,
    id: "0xcsQnEBm1I0gPmzhnmi",
    runningBalance: 200,
    timeStamp: "2021-06-26T12:54:32.977Z",
    to: "000004",
    type: "transfer"
  },
  {
    amount: 500,
    id: "OLdJfBdsTKpDAyVlUJSR",
    runningBalance: 500,
    timeStamp: "2021-06-26T12:54:23.160Z",
    type: "deposit"
  },
  {
    amount: -1400,
    id: "Wc3MPYQscZPkQpVic3Me",
    runningBalance: 0,
    timeStamp: "2021-06-26T12:45:21.924Z",
    type: "withdrawal"
  },
  {
    amount: 500,
    id: "pWhyvbyLdPiv78FvGcGB",
    runningBalance: 1400,
    timeStamp: "2021-06-26T12:44:54.633Z",
    type: "deposit"
  }
];

export default function Test() {
  const $ = genClass({ block: "history" });
  return (
    <>
      <Nav />
      <main className="main">
        <History />
      </main>
    </>
  );
}
