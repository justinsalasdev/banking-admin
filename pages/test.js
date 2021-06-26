import Nav from "../components/Nav/Nav";
import genClass from "../helpers/genClass";

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

export default function History() {
  const $ = genClass({ block: "history" });
  return (
    <>
      <Nav />
      <main className="main">
        <div {...$()}>
          <div {...$("bar")}></div>
          <ul {...$("entries")}>
            <li {...$("entry")}>
              <span {...$("type")}>DEPOSIT</span>
              <div {...$("details")}>
                <span {...$("account")}>FROM : 000007</span>
                <div {...$("amount")}>
                  <span>B 1,000.00</span>
                  <span>B 123,123.00</span>
                </div>
                <time {...$("date")}>June 26, 2021 18:46</time>
              </div>
            </li>
            <li {...$("entry")}>
              <span {...$("type")}>DEPOSIT</span>
              <div {...$("details")}>
                <span {...$("account")}>FROM : 000007</span>
                <div {...$("amount")}>
                  <span>B 1,000.00</span>
                  <span>B 123,123.00</span>
                </div>
                <time {...$("date")}>June 26, 2021 18:46</time>
              </div>
            </li>
            <li {...$("entry")}>
              <span {...$("type")}>DEPOSIT</span>
              <div {...$("details")}>
                <span {...$("account")}>FROM : 000007</span>
                <div {...$("amount")}>
                  <span>B 1,000.00</span>
                  <span>B 123,123.00</span>
                </div>
                <time {...$("date")}>June 26, 2021 18:46</time>
              </div>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
