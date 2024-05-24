import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import BlogImage1 from "../Assets/Blogs/ModernInterior.png";
import BlogImage2 from "../Assets/Blogs/ExteriorProject.png";
import BlogImage3 from "../Assets/Blogs/GreyBeauty.png";
import BlogImage4 from "../Assets/Blogs/PlantationInterior.png";
import BlogImage5 from "../Assets/Blogs/RoleofFurnitures.png";

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

const BlogSection = styled.div`
  padding: 20px;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    font-family: "Poppins", sans-serif;
  }

  .carousel .slide {
    background: none;
  }

  .carousel .control-dots .dot {
    background: #333;
  }

  .carousel .legend {
    background: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 10px;
    font-size: 1.2rem;
    bottom: 20px;
  }
`;

const BlogCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;

  img {
    width: 100%;
    max-width: 300px; /* Ensures images do not exceed a certain width */
    height: 200px; /* Fixed height based on the Figma design */
    object-fit: cover;
    border-radius: 10px;
  }

  .title {
    font-size: 1.5rem;
    margin-top: 10px;
    font-weight: bold;
    font-family: "Poppins", sans-serif;
  }

  .description {
    font-size: 1rem;
    margin-top: 5px;
    color: #555;
    font-family: "Poppins", sans-serif;
  }
`;

const CarouselContainer = styled.div`
  max-width: 1100px; /* Adjust based on your design constraints */
  margin: 0 auto;
  position: relative; /* Positioning based on the Figma design */
`;

const Blogs = () => {
  return (
    <BlogSection>
      <h2>Our Latest Blogs</h2>
      <CarouselContainer>
        <Carousel showThumbs={false} autoPlay infiniteLoop>
          {blogs.map((blog, index) => (
            <BlogCard key={index}>
              <img src={blog.image} alt={blog.title} />
              <div className="title">{blog.title}</div>
              <div className="description">{blog.description}</div>
            </BlogCard>
          ))}
        </Carousel>
      </CarouselContainer>
    </BlogSection>
  );
};

export default Blogs;
