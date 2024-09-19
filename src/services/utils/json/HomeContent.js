import React from "react";

import faci from "../../../Assets/Images/img_faci.jpg"
import infra from "../../../Assets/Images/img_infra.jpg"

const HomeContent = () => {
  const aboutContent = [
    {
        image: infra,
    title: "Infrastructure",
    subHeading: "Well designed infrastructure with sophisticated needs to cater your professionals",
    context: "We value the space required to provide hands on training to budding Agricultural Professionals. We manifest a pattern",
    url: "",
    link: {
      title: "",
      url: ""
    },
    },
    {
        image: faci,
        title: "Facilities Offered",
        subHeading: 
        "Spacious facilities to nurture your professional quest",
        context:"Library, Laboratory, Computer Lab, Hostel",
        url: "",
        link: {
        title: "",
        url: "",
        },
    },
    {
        image: infra,
        title: "Course Offered",
        subHeading: "B.Sc.(Hons)Agriculture (4 years)",
        context: "The foundation course in Agriculture is infused with hands-on training at our agricultural field...",
        url: "",
        link: {
        title: "Download Application Form",
        url: "",
        },
    }
  ];
  return {
    aboutContent
  };
};

export default HomeContent;
