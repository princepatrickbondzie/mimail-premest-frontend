import React from "react";
import { useUserState } from "../../../state/store";
import { Link } from "react-router-dom";
import "../index.css";

const Sent = () => {
  const sentMail = useUserState((state) => state.user.data.sent);
  console.log(sentMail);

  return (
    <div className="inb">
      {sentMail.length === 0 ? (
        <h1 style={{ textAlign: "center" }}>No sent mails...</h1>
      ) : (
        <div>
          {sentMail.map((sent) => (
            <Link to={`/${sent._id}`}>
              <section id="inbox-tab">
                <h4 style={{ width: "20vw" }}>{sent.title}</h4>
                <p
                  style={{
                    width: "57vw",
                    paddingLeft: "10px",
                  }}
                >
                  {sent.body}
                </p>
              </section>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sent;
