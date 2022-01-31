import React, { useState } from "react";

const fetchQuery = async ({ uri, method = "GET", body = null }) => {
  const response = await fetch(uri, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body !== null ? JSON.stringify(body) : null,
  });
  const data = await response.json();
  return data;
};

const Compose = () => {
  const [mail, setMail] = useState({
    sender: "",
    recipient: "",
    title: "",
    body: "",
  });

  const handleChange = (e) => {
    setMail({ ...mail, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await fetchQuery({
      uri: "https://rose-dull-hen.cyclic.app/api/mail/send",
      method: "POST",
      body: { ...mail },
    });
    if (data) {
      console.log(data);
    }
  };

  return (
    <div className="compose">
      <div className="compose-tab">
        <div className="tab">
          <h4 style={{ color: "white", padding: "10px 0 10px 10px" }}>
            New Message
          </h4>
        </div>
        <form action="" className="compose-form" onSubmit={handleSubmit}>
          <label htmlFor="" style={{ marginLeft: "5px" }}>
            From:
          </label>
          <input
            type="text"
            name="sender"
            id="in-one"
            value={mail.sender}
            onChange={handleChange}
          />
          <hr />
          <label htmlFor="" style={{ marginLeft: "5px" }}>
            To:
          </label>
          <input
            type="text"
            name="recipient"
            id="in-two"
            placeholder=""
            value={mail.recipient}
            onChange={handleChange}
          />
          <hr />
          {/* <br /> */}
          <label htmlFor="" style={{ marginLeft: "5px" }}>
            Subject:
          </label>
          <input
            type="text"
            name="title"
            id="in-three"
            value={mail.title}
            onChange={handleChange}
          />
          <hr />
          <textarea
            name="body"
            id=""
            cols="30"
            rows="10"
            placeholder="Type message..."
            value={mail.body}
            onChange={handleChange}
          ></textarea>
          <button type="Submit" className="compose-btn">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Compose;
