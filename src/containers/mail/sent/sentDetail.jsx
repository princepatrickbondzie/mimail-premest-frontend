import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { useUserState } from "../../../state/store";

const SentDetail = ({sent}) => {
  const sentMls = useUserState((state) => state.user.user.sent);
  const [sentmail, setSentMail] = useState("");
  const { sentId } = useParams();
  // console.log(sentMls);
  // console.log(sent);

  useEffect(() => {
    const smail = sentMls.filter((mail) => mail._id === sentId)[0];
    setSentMail(smail);
    // console.log(smail);
  }, [sentMls, sentId]);

  return (
    <div className="card-detail">
      <div className="detail-main">
        <div className="detail-header"></div>
        <div className="display-detail">
          <div
            className="detail-text"
            style={{
              display: "flex",
              justifyContent: "space-between",
              lineHeight: "3px",
            }}
          >
            <h3>{sentmail.title}</h3>
            <p>{sentmail.createdAt}</p>
          </div>
          <p style={{ color: "rgb(65, 64, 64)" }}>To: {sentmail.recipient}</p>
          <div
            style={{
              border: "1px solid grey",
              height: "57vh",
              padding: "20px",
              color: "black",
            }}
          >
            {sentmail.body}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentDetail;
