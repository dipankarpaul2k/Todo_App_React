//
import { useEffect, useRef, useState } from "react";

//
import { toast } from "react-toastify";

export default function Intro({toggleIsNewUser}) {
  const [userName, setUserName] = useState("");
  const userNameRef = useRef();

  useEffect(() => {
    userNameRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName.trim() !== "") {
      localStorage.setItem("userName", JSON.stringify(userName));
      toast.info(`Welcome, ${userName}.`);
      toggleIsNewUser();
    } else {
      throw new Error("There was an error creating your account.");
    }
  };

  return (
    <>
      <div className="intro">
        <div>
          <div className="headings">
            <h1>
              Take Control of <span className="accent">Tasks.</span>
            </h1>
            <p>
              Task management is the secret to time management and improved
              productivity. Start your journey today.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="">
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                ref={userNameRef}
                placeholder="What is your name?"
                aria-label="Your name"
                autoComplete="given-name"
                required
              />
              <button type="submit" className="create_user_btn">
                <span>Create account</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
