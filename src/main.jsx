import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Signin from "./Components/Signin";
import Dashbord from "./Components/Dashbord";
import Collection from "./Components/Collection";
import Summery from "./Components/Summery";
import Verification from "./Components/Verification";
import Card from "./Components/Card";
import Keys from "./Components/Keys";
import Document from "./Components/Document";
import Payout from "./Components/Payout";
import Addmoney from "./Components/Addmoney.jsx";
import Bulkpayout from "./Components/Bulkpayout";
import Report from "./Components/Report";
import Virtualaccount from "./Components/Virtualaccount";
import Ledger from "./Components/Ledger";
import { Provider } from "react-redux";
import store from  "./redux/store"
import Singleenath from "./Components/Singleenath";
import Transactionreport from "./Components/Transactionreport";
import Settings from "./Components/Settings";
import Accounts from "./Components/Accounts";
import Developertools from "./Components/Developertools";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route path="/" element={<Signin />} />
      <Route path="/dashboard" element={<Dashbord />}>
        <Route index path="summery" element={<Summery />} />
        <Route path="addmoney" element={<Addmoney />} />
        <Route path="ledger" element={<Ledger />} />
        <Route path="singleenath" element={<Singleenath />} />
        <Route path="bulkpayout" element={<Bulkpayout />} />
        <Route path="virtualaccount" element={<Virtualaccount />} />
        <Route path="settings" element={<Settings/>} >


        <Route index path="accounts" element={<Accounts/>} />
        <Route  path="developertooles" element={<Developertools/>} />
        
        </Route>
       
        <Route path="transactionreport" element={<Transactionreport />} />
        <Route path="report" element={<Report />} />
        <Route path="payout" element={<Payout />} />
        <Route path="collection" element={<Collection />} />
        <Route path="verification" element={<Verification />} />
        <Route path="card" element={<Card />} />
        <Route path="keys" element={<Keys />} />
        <Route path="document" element={<Document />} />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>
);
