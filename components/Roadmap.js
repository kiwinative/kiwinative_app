import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { roadmaps } from "../constants";

const RoadmapCard = ({ roadmap }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#140E3A",
        color: "#fffafa",
        borderRadius: 15,
        borderBottomColor: "#6C8726",
      }}
      contentArrowStyle={{ borderRight: "7px solid #6C8726" }}
      date={roadmap.date}
      iconStyle={{ background: roadmap.iconBg }}
      icon={roadmap.icon}
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{roadmap.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {roadmap.objective}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {roadmap.points.map((point, index) => (
          <li
            key={`roadmap-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Roadmap = () => {
  return (
    <div className="h-full w-[80vw] p-20">
      <h1 className={styles.subHeaderText}>Our journey so far</h1>
      <h1 className={styles.headerText}>ROADMAP</h1>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {roadmaps.map((roadmap, index) => (
            <RoadmapCard key={`roadmap-${index}`} roadmap={roadmap} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Roadmap;
