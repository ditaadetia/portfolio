import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
        <div>
            <div className="display-3 font-weight-bold text-uppercase">
                <h1>Dita <span className="text-orange">Adetia Nadila</span></h1>
            </div>
            <div className="space-x-3">
            <p className="text-24">+62 89693838246 <span className="text-orange">ditadetian@gmail.com</span></p>
            {/* <span className="text-orange"> ditadetian@gmail.com</span> */}
            </div>
        </div>
        <p className="text-32">
            I am an open-source contributor and have contributed to Zulip, Hasura,
            Fossa, Publiclab, and many other projects. My tech includes Python and
            Javascript. Python for server-side and scripting, and Javascript for the
            frontend. I use the Django framework for server-side development and
            React for frontend development. I have also worked with GraphQL. I'm
            a Github Campus Expert at my institute where I am responsible for
            building on-campus community. I am the lead organizer of Hack in The
            North Hackathon and the co-founder of Pragma Conference held at IIIT
            Allahabad.
        </p>
        <div className="space-x-3">
            <Link to={"https://linkedin.com"}>
            <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />
            </Link>
            <Link to={"https://github.com"}>
            <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
            </Link>
        </div>
    </>
  );
}
