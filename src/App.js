import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mail from "./containers/mail/mail";
import Inbox from "./containers/mail/inbox/inbox";
import Sent from "./containers/mail/sent/sent";
import Compose from "./containers/mail/compose/compose";
import Draft from "./containers/mail/draft/draft";
import Spam from "./containers/mail/spam/spam";
import Signin from "./containers/auth/signin/signin";
import Signup from "./containers/auth/signup";
import InboxDetail from "./containers/mail/inbox/inboxDetail";
import SentDetail from "./containers/mail/sent/sentDetail";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Mail />}>
            <Route path="compose" element={<Compose />} />
            <Route path="inbox" element={<Inbox />}></Route>
            <Route path="sent" element={<Sent />}></Route>
            <Route path="draft" element={<Draft />}></Route>
            <Route path="spam" element={<Spam />}></Route>
            <Route path="/:inboxId" element={<InboxDetail />} />
            <Route path="/view_:sentId" element={<SentDetail />} />
          </Route>
        </Route>
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
