import React from "react";
import "./index.css";
import { Outlet, Link } from "react-router-dom";
import { useUserState } from "../../state/store";
import { BiMailSend } from "react-icons/bi";

const Mail = () => {
  const logout = useUserState((state) => state.logOut);
  const user = useUserState((state) => state.user.user.username);
  let username = user.charAt(0).toUpperCase() + user.slice(1);
  // console.log(user);

  return (
    <div className="mail">
      <aside>
        <div className="icon">
          <BiMailSend
            size={50}
            style={{
              margin: "0 0 2rem 2.4rem",
              border: "2px solid white",
              borderRadius: "10px",
              padding: "6px",
              width: "5rem",
              height: "4rem",
              boxShadow: "2px 2px 5px 1px rgb(46, 46, 46)",
            }}
          />
        </div>
        <div className="tab-list">
          <Link to="/compose" id="write">
            Compose
          </Link>
          <Link to="/inbox" id="li">
            Inbox
          </Link>
          <Link to="/sent" id="li">
            Sent
          </Link>
          <Link to="/draft" id="li">
            Draft
          </Link>
          <Link to="/spam" id="li">
            Spam
          </Link>
        </div>
      </aside>
      <section>
        <div id="mails-head">
          <div className="greet">
            <h1>Hello {username}, welcome to your MiMail dashboard.</h1>
            <button onClick={() => logout()}>Logout</button>
          </div>
          <hr id="hr" />
        </div>
        <Outlet />
      </section>
    </div>
  );
};;

export default Mail;
