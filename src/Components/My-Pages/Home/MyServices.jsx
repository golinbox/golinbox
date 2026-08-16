import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Resource from "../../Navigation/Resources-drop";
import Service from "../../Navigation/Service-drop";
import Blog from "../Blog";
import Contact from "../Contact";
function MyServices() {
  // Setting the states
  const [currentNews, setCurrentNews] = useState(0);
  const [club, setClub] = useState(null);
  const [loading, setLoading] = useState(true);
  const [clubList, setClubList] = useState([]);

  // Setting the initial state
  useEffect(() => {
    //List Club Items
    const clubNames = [
      <Blog />,
      <Service />,
      <Contact />,
      <Resource />
    ];
    const info = clubNames[currentNews];

    // Navigation state
    setClubList(clubNames);

    // Set state...
    setClub(info);
    setLoading(false);
  }, [currentNews]);

  
  

  return (
    <section className="main-container">
      <div className="paginate">
        <section className="MyServicesNav">
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "red" } : { color: "#000" }
            }
            className="navigate"
            to="/"
          >
            Marketing
          </NavLink>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "#000" } : { color: "#000" }
            }
            className="navigate"
            to="/"
          >
            Web Development
          </NavLink>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "#000" } : { color: "#000" }
            }
            className="navigate"
            to="/"
          >
            Web 3.0-DeFi
          </NavLink>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "#000" } : { color: "#000" }
            }
            className="navigate"
            to="/"
          >
            BlockChain
          </NavLink>
        </section>
        <section className="news">
          {loading ? (
            <div>Loading! Please wait a moment...</div>
          ) : (
              <div className="club-news">
            </div>
          )}
        </section>
      </div>
    </section>
  );
}

export default MyServices;
