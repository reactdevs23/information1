import { useState } from "react";

import MainComponent from "./components/MainComponent/MainComponent";

function App() {
  const [allData, setAllData] = useState({
    fontFamily: "'Inter', sans-serif",
    mainBg: "#fff",
    centerContent: {
      title: "Gather information",
      titleColor: "#fff",
      border: "7px solid #FFF",
      bg: "linear-gradient(103deg, #86CB3C 0%, #528BFF 100%)",
    },
    published: {
      heading: "Published",
      headingColor: "#000",
      border: "#D0D5DD",
      viewPoints: [
        {
          viewPoint: "Academic viewpoints",
          viewPointColor: "#000",
          info: "Academic & grey literature systemic review ",
          infoColor: "#000",
        },
        {
          viewPoint: "Organizational viewpoints",
          viewPointColor: "#000",
          info: "Comprehensive web search",
          infoColor: "#000",
        },
      ],
      approach: {
        label: "Passive approach: ",
        labelColor: "#000",
        info: "Collect existing knowledge",
        infoColor: "#000",
        bg: "#F2F4F7",
      },
    },
    unPublished: {
      heading: "Unpublished",
      headingColor: "#000",
      border: "#D0D5DD",
      viewPoints: [
        {
          viewPoint: "Professional viewpoints",
          viewPointColor: "#000",
          info: "Key informant, expert, stakeholder interviews",
          infoColor: "#000",
        },
        {
          viewPoint: "Lay viewpoints",
          viewPointColor: "#000",
          info: "Community consultations through engagement",
          infoColor: "#000",
        },
      ],
      approach: {
        label: "Active approach: ",
        labelColor: "#000",
        info: "Generate new knowledge",
        infoColor: "#000",
        bg: "#F2F4F7",
      },
    },
    viewPoints: [],
  });

  return (
    <>
      <div
        style={{
          "--mainBg": allData.mainBg,

          fontFamily: allData.fontFamily,
        }}
      >
        <MainComponent {...allData} />
      </div>
    </>
  );
}

export default App;
