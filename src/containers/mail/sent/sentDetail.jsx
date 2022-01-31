import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { useUserState } from "../../../state/store";

const SentDetail = () => {
  const data = useUserState((state) => state.user.user.sent);
  const [mail, setMail] = useState("");
  const { sentId } = useParams();
  // console.log(data);

  useEffect(() => {
    const mail = data.filter((mail) => mail._id === sentId)[0];
    setMail(mail);
  }, [data, sentId]);

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
            <h3>{mail.title}</h3>
            <p>{mail.createdAt}</p>
          </div>
          <p style={{ color: "rgb(65, 64, 64)" }}>To: {mail.recipient}</p>
          <div
            style={{
              border: "1px solid grey",
              height: "57vh",
              padding: "20px",
              color: "black",
            }}
          >
            {mail.body}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentDetail;
