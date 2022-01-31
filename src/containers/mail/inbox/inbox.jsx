import React, { useEffect } from "react";
import { useUserState } from "../../../state/store";
import { Link } from "react-router-dom";
import "../index.css";
import { useState } from "react/cjs/react.development";

const Inbox = () => {
  const [info, setInfo] = useState({});
  const name = useUserState((state) => state.user.user.username);
  // console.log(name);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      `https://rose-dull-hen.cyclic.app/api/user/${name}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    setInfo(data.data);
    // console.log(data.data);
  };
  console.log(info);
  return (
    <div className="inb">
      {info.lenght === 0 ? (
        <h1 style={{ textAlign: "center" }}>No mails received...</h1>
      ) : (
        <div>
          {info.map((inbox) => (
            <Link to={`/${inbox.inbox._id}`}>
              <section id="inbox-tab">
                <h4 style={{ width: "20vw" }}>{inbox.inbox.title}</h4>
                <p
                  style={{
                    width: "57vw",
                    paddingLeft: "10px",
                  }}
                >
                  {inbox.inbox.body}
                </p>
              </section>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Inbox;
