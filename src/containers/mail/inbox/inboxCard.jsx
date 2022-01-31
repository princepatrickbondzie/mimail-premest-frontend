import React from "react";
import { Link } from "react-router-dom";

const InboxCard = ({ inbox }) => {
  return (
    <div>
      <Link to={`/${inbox._id}`}>
        <section id="inbox-tab">
          <h4 style={{ width: "20vw" }}>{inbox.title}</h4>
          <p
            style={{
              width: "57vw",
              paddingLeft: "10px",
            }}
          >
            {inbox.body}
          </p>
        </section>
      </Link>
    </div>
  );
};

export default InboxCard;
