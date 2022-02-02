import React from "react";
import { Link } from "react-router-dom";

const SentCard = ({ sent }) => {
  return (
    <div>
      <Link to={`/view_${sent._id}`}>
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
    </div>
  );
};

export default SentCard;
