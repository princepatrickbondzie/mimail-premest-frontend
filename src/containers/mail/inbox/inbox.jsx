import React from "react";
import { useUserState } from "../../../state/store";
import InboxCard from "./inboxCard";
import "../index.css";

const Inbox = () => {
  const data = useUserState((state) => state.user.user.inbox);
  console.log(data);
  
  return (
    <div className="inb">
      {data.lenght === 0 ? (
        <h1 style={{ textAlign: "center" }}>No mails received...</h1>
      ) : (
        <div>
          {data.map((inbox, idx) => (
            <InboxCard key={idx} inbox={inbox} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Inbox;
