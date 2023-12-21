import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To Vacation Expert!</Typography>
        <p>
        Welcome to our exquisite vacation room booking site, where your dream getaway begins! Immerse yourself in a world of unparalleled comfort and choice as you explore our curated collection of accommodations tailored to elevate your travel experience.

Discover a seamless booking journey that effortlessly combines style, convenience, and affordability. Our user-friendly platform showcases a diverse array of vacation rooms, each meticulously selected for its unique charm and exceptional amenities. From cozy beachside cottages to luxurious urban retreats, we cater to every traveler's taste and preference.

Picture yourself browsing through stunning images and detailed descriptions that capture the essence of each room. Our platform offers a virtual tour, allowing you to envision your ideal escape before you even arrive. We understand that every traveler is unique, which is why we provide a range of options to suit various budgets, group sizes, and travel styles.

Transparency and trust are at the core of our service. Our site features honest reviews from fellow travelers, offering valuable insights into the experiences of those who have stayed in our listed accommodations. This ensures that you can make informed decisions and select the perfect room for your vacation.

Whether you seek a romantic getaway, a family-friendly retreat, or a solo adventure, our vacation room booking site is designed to turn your travel aspirations into reality. Embrace the excitement of planning your next escape with confidence, knowing that you've chosen a platform dedicated to making your vacation dreams come true. Welcome to a world of endless possibilities – start your journey with us today!
        </p>
        <br />
        <p>
                         You are in good hands . No need of worry , just sit back and relax!
        </p>
      </Box>
    </Layout>
  );
};

export default About;
