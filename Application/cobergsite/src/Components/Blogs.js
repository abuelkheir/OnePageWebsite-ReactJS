import React, { useRef } from "react";
import styled from "styled-components";

import BlogImage1 from "../Assets/Blogs/ModernInterior.png";
import BlogImage2 from "../Assets/Blogs/ExteriorProject.png";
import BlogImage3 from "../Assets/Blogs/GreyBeauty.png";
import BlogImage4 from "../Assets/Blogs/PlantationInterior.png";
import BlogImage5 from "../Assets/Blogs/RoleofFurnitures.png";
import Arrow from "../Assets/OtherLogos/ArrowVector.svg";

const blogs = [
  {
    image: BlogImage1,
    title: "Modern Interior",
    description:
      "Explore the sleek and stylish world of modern interior design, focusing on clean lines, minimalism, and functional aesthetics to create contemporary living spaces.",
  },
  {
    image: BlogImage2,
    title: "Exterior Project",
    description:
      "Dive into innovative exterior design projects that enhance curb appeal, integrate landscaping with architecture, and create inviting outdoor spaces.",
  },
  {
    image: BlogImage3,
    title: "Grey Beauty",
    description:
      "Discover the elegance of grey-themed interiors, showcasing how various shades and textures can transform your home into a sophisticated and calming retreat.",
  },
  {
    image: BlogImage4,
    title: "Plantation Interior",
    description:
      "Learn about plantation-style interiors that bring the outdoors in, using natural materials, greenery, and airy layouts to create refreshing living environments.",
  },
  {
    image: BlogImage5,
    title: "Role of Furniture",
    description:
      "Understand the pivotal role of furniture in home design, from selecting the right pieces to arranging them for optimal flow and functionality in your living space.",
  },
];
const SectionTitle = styled.h2`
  font-size: 36px;
  color: black;
  margin-bottom: 40px;
  font-weight: 500;
  line-height: 54px;
  text-alignment: left;
  font-family: "Poppins", sans-serif;
  margin-left: 20px;
`;

const BlogSection = styled.div`
  padding: 20px;
  text-align: left;
  margin-left: 110px;
`;

const BlogContainer = styled.div`
  display: flex;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  padding: 10px 0;
  scroll-behavior: smooth;
  position: relative;

  &::-webkit-scrollbar {
    display: none; /* Hide scrollbar for better aesthetics */
  }
`;

const BlogCard = styled.div`
  flex: 0 0 auto;
  width: 300px;
  margin-right: 20px;
  text-align: left; /* Align both text and images to the left */

  img {
    width: 100%; /* Ensure image fills its container */
    height: 333px; /* Fixed height to ensure consistency */
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Added drop shadow */
  }

  .title {
    font-size: 24px;
    margin-top: 10px;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    font-style: normal;
    line-height: 36px;
    color: black;
  }

  .description {
    font-size: 0.9rem; /* Smaller font size for description */
    margin-top: 5px;
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 26px;
    color: black;
    font-family: "Poppins", sans-serif;
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.7);
  border: none;
  width: 60px; /* Wider button for rectangle shape */
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: visible; /* Ensure visibility */

  &:hover {
    background: rgba(255, 255, 255, 1);
  }

  &.left {
    left: 10px;
  }

  &.right {
    right: 10px;
  }

  img {
    width: 20px;
    height: 20px;
  }
`;

const Blogs = () => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };
  const ViewAllButton = styled.button`
    width: 270px;
    height: 80px;
    padding: 10px 20px;
    color: #fff;
    background-color: #4b2a63;
    border: none;
    cursor: pointer;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    margin: 0 auto; /* Center the button horizontally */
    display: block; /* Ensure button is displayed as a block element */
  `;

  /*

position: absolute;
width: 270px;
height: 80px;
left: 809.26px;
top: 2901.27px;

background: #4B2A63;
/* View all 

position: absolute;
width: 95px;
height: 36px;
left: 897.26px;
top: 2924.27px;

font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 36px;
/* identical to box height 

color: #FFFFFF;
*/

  return (
    <BlogSection>
      <SectionTitle> Blogs</SectionTitle>
      <div style={{ position: "relative" }}>
        {/* <ArrowButton className="left" onClick={scrollLeft}>
          <img src={Arrow} alt="Left" />
        </ArrowButton> */}
        <ArrowButton className="right" onClick={scrollRight}>
          <img src={Arrow} alt="Right" />
        </ArrowButton>
        <BlogContainer ref={containerRef}>
          {blogs.map((blog, index) => (
            <BlogCard key={index}>
              <img src={blog.image} alt={blog.title} />
              <div className="title">{blog.title}</div>
              <div className="description">{blog.description}</div>
            </BlogCard>
          ))}
        </BlogContainer>
      </div>
      <ViewAllButton>View all</ViewAllButton>
    </BlogSection>
  );
};

export default Blogs;
