import React from "react";

const Certifications = () => {
  // Define an array of certification data
  //properties of each certification
  const certificationsData = [
    {
      title: "Meta Frontend Developer",
      issuedBy: "Coursera",
      authorizedBy: "Meta",
      link: "https://www.credly.com/badges/ba164222-1d19-4094-a9a2-960703d635db/public_url",
    },
    {
      title: "Frontend Developer Capstone",
      issuedBy: "Coursera",
      authorizedBy: "Meta",
      link: "https://coursera.org/share/356d7e52787d47693d73c5fafcc4f3e4 ",
    },
    {
      title: "Javascript Algorithms & Data Structure",
      issuedBy: "freeCodeCamp(🔥)",
      authorizedBy: "freeCodeCamp.org",
      link: " https://www.freecodecamp.org/certification/MilanSherpa/javascript-algorithms-and-data-structures",
    },

    {
      title: "Advanced React",
      issuedBy: "Coursera",
      authorizedBy: "Meta",
      link: "https://coursera.org/share/f1add28a3d730302ba8a751fe4f493b4 ",
    },
    {
      title: "Version Control",
      issuedBy: "Coursera",
      authorizedBy: "Meta",
      link: " https://coursera.org/share/fc3179f406730beb9a5163f59e6a2fc2 ",
    },
    {
      title: "Google UX Design",
      issuedBy: "Coursera",
      authorizedBy: "Google",
      link: " https://coursera.org/share/f2105cdadf6dc3bfc43b515fd6adfcde ",
    },
    {
      title: "Agile with Atlassian Jira",
      issuedBy: "Coursera",
      authorizedBy: "Atlassian University",
      link: "https://coursera.org/share/cd913eefc020489a092a26e5feb576a0 ",
    },
    {
      title: "Programing with JavaScript",
      issuedBy: "Coursera",
      authorizedBy: "Meta",
      link: "https://www.coursera.org/account/accomplishments/certificate/KSEUGN3V2PWT ",
    },

    // Add more certification data as needed
  ];

  return (
    <div className="section3" id="certifications">
      {/* Map over the certificationsData array to generate JSX for each certification */}
      {certificationsData.map((certification, index) => (
        <div className="metacertificate" key={index}>
          <div
            className={`ag-courses_item ${index % 2 === 0 ? "even" : "odd"}`}
          >
            <a
              href={certification.link} // Use the link from certification data
              className="ag-courses-item_link"
            >
              <div className="ag-courses-item_bg"></div>
              <div className="ag-courses-item_title">{certification.title}</div>
              <br />
              <br />
              <div className="ag-courses-item_details">
                Issued by:{" "}
                <span className="ag-courses-item_company">
                  {certification.issuedBy}
                </span>
                <br />
                Authorized by:{" "}
                <span className="ag-courses-item_company">
                  {certification.authorizedBy}
                </span>
              </div>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certifications;
