import React from "react";
import "./Programs.css";
import program_1 from "../../../assets/program-1.png";
import program_2 from "../../../assets/program-2.png";
import program_3 from "../../../assets/program-3.png";
import program_icon_1 from "../../../assets/program-icon-1.png";
import program_icon_2 from "../../../assets/program-icon-2.png";
import program_icon_3 from "../../../assets/program-icon-3.png";

const Programs = () => {
  return (
    <section id="programs" className="programs">
      {/* Program 1 */}
      <div className="program">
        <img src={program_1} alt="Science Stream" />

        <div className="caption">
          <img src={program_icon_1} alt="Science Icon" />
          <h3>Science</h3>
          <p>
            Physics, Chemistry, Biology, and Mathematics courses preparing
            students for medical and engineering entrance exams.
          </p>
        </div>
      </div>

      {/* Program 2 */}
      <div className="program">
        <img src={program_2} alt="Commerce Stream" />

        <div className="caption">
          <img src={program_icon_2} alt="Commerce Icon" />
          <h3>Commerce</h3>
          <p>
            Accounting, Economics, and Business Studies with integrated CA
            Foundation coaching for aspiring chartered accountants.
          </p>
        </div>
      </div>

      {/* Program 3 */}
      <div className="program">
        <img src={program_3} alt="Arts Stream" />

        <div className="caption">
          <img src={program_icon_3} alt="Arts Icon" />
          <h3>Arts</h3>
          <p>
            History, Political Science, Sociology, and Literature courses
            fostering critical thinking and cultural awareness.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Programs;
