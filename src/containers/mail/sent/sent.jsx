import React from "react";
import { useUserState } from "../../../state/store";
import SentCard from "./sentCard";
import "../index.css";

const Sent = () => {
  const sentMail = useUserState((state) => state.user.user.sent);
  console.log(sentMail);

  return (
    <div className="inb">
      {sentMail.length === 0 ? (
        <h1 style={{ textAlign: "center" }}>No sent mails...</h1>
      ) : (
        <div>
          {sentMail.map((sent, idx) => (
            <SentCard key={idx} sent={sent} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Sent;
