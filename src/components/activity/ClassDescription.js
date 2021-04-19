import React from "react";
import ReactHTMLParser from "react-html-parser";

export default function ClassDescription(props) {
  // const { course } = props;
  const data = `<br />
  <p>
    Javascript from the basic for beginner. JavaScript is a programming
    language that adds interactivity to your website. This happens in games,
    in the behavior of responses when buttons are pressed or with data entry
    on forms; with dynamic styling; with animation, etc. This class helps
    you get started with JavaScript and furthers your understanding of what
    is possible.
  </p>
  <br />
  <h3>What will you learn</h3>
  <br />
  <ul>
    <li>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
      blandit risus, tempor ullamcorper metus sit accumsan. Dictum sit
      tincidunt turpis malesuada arcu amet cursus blandit. Sociis diam elit
      imperdiet eget posuere id sagittis.
    </li>
    <li>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
      blandit risus, tempor ullamcorper metus sit accumsan. Dictum sit
      tincidunt turpis malesuada arcu amet cursus blandit. Sociis diam elit
      imperdiet eget posuere id sagittis.
    </li>
    <li>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
      blandit risus, tempor ullamcorper metus sit accumsan. Dictum sit
      tincidunt turpis malesuada arcu amet cursus blandit. Sociis diam elit
      imperdiet eget posuere id sagittis.
    </li>
  </ul>`;
  return (
    <div className="course-description">
      {/* {course.descriptionItem || "No Description about this course"} */}
      <h3>Description</h3>
      {ReactHTMLParser(data)}
    </div>
  );
}
