import React from "react";

const Section = ({ children, ...props }) => (
  <section {...props}>{children}</section>
);
export default Section;
