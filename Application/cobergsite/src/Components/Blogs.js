import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import BlogImage1 from '../Assets/Blogs/ModernInterior.png';
import BlogImage2 from '../Assets/Blogs/ExteriorProject.png';
import BlogImage3 from '../Assets/Blogs/GreyBeauty.png';
import BlogImage4 from '../Assets/Blogs/PlantationInterior.png';
import BlogImage5 from '../Assets/Blogs/RoleofFurnitures.png';

const BlogsContainer = styled.section`
  padding: 60px 20px;
  background-color: #ffffff;
  text-align: center;
`;

const BlogsTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 40px;
  font-family: 'Poppins', sans-serif;
`;

const BlogItem = styled.div`
  padding: 0 15px;
  text-align: left;
`;

const BlogImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

const BlogTitle = styled.h3`
  font-size: 1.5rem;
  color: #451a64;
  margin-bottom: 10px;
  font-family: 'Poppins', sans-serif;
`;

const BlogDescription = styled.p`
  font-size: 1rem;
  color: #333;
  font-family: 'Poppins', sans-serif;
`;

const blogs = [
  {
    image: BlogImage1,
    title: 'Modern Interior',
    description: 'Explore the sleek and stylish world of modern interior design, focusing on clean lines, minimalism, and functional aesthetics to create contemporary living spaces.'
  },
  {
    image: BlogImage2,
    title: 'Exterior Project',
    description: 'Dive into innovative exterior design projects that enhance curb appeal, integrate landscaping with architecture, and create inviting outdoor spaces.'
  },
  {
    image: BlogImage3,
    title: 'Grey Beauty',
    description: 'Discover the elegance of grey-themed interiors, showcasing how various shades and textures can transform your home into a sophisticated and calming retreat.'
  },
  {
    image: BlogImage4,
    title: 'Plantation Interior',
    description: 'Learn about plantation-style interiors that bring the outdoors in, using natural materials, greenery, and airy layouts to create refreshing living environments.'
  },
  {
    image: BlogImage5,
    title: 'Role of Furniture',
    description: 'Understand the pivotal role of furniture in home design, from selecting the right pieces to arranging them for optimal flow and functionality in your living space.'
  }
];

const Blogs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <BlogsContainer>
      <BlogsTitle>Our Latest Blogs</BlogsTitle>
      <Slider {...settings}>
        {blogs.map((blog, index) => (
          <BlogItem key={index}>
            <BlogImage src={blog.image} alt={blog.title} />
            <BlogTitle>{blog.title}</BlogTitle>
            <BlogDescription>{blog.description}</BlogDescription>
          </BlogItem>
        ))}
      </Slider>
    </BlogsContainer>
  );
};

export default Blogs;
