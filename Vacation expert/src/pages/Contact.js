import React from "react";
import Layout from "./../components/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Contact Vacation Expert</Typography>
        <p>
        At Vacation Expert we value your inquiries and feedback as much as we value your travel experience. Our dedicated "Contact Us" page is designed to provide you with seamless communication and support, ensuring that your journey with us is as smooth as possible.

Whether you have questions about

booking a room, need assistance with an existing reservation, or simply want to share your thoughts and suggestions, our customer support team is here to help. Reach out to us via the contact form, and our friendly and knowledgeable staff will respond promptly to address your needs.

We understand that every traveler is unique, and we're committed to tailoring our support to meet your specific requirements. Your satisfaction is our priority, and we are eager to assist you in creating unforgettable memories during your stay.

For urgent matters or if you prefer direct communication, you can also find our contact details, including email and phone numbers, on the "Contact Us" page. Rest assured that your inquiries will be handled with the utmost care and professionalism.

Thank you for choosing Vacation Expert . We look forward to being a part of your travel journey and ensuring that your experience with us is nothing short of exceptional.







        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "600px",
          ml: 10,
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 1800-00-0000
                  (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} /> help@myrest.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} /> 1234567890
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
