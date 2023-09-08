import {
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import React, { useState } from "react";

import "./Annimation.css";
const Content = () => {
  const data = [
    { image: "/91JAhmsxEmL.jpg" },
    { image: "/desktop-wallpaper-oblivion-2022-movie-thumbnail.jpg" },
    { image: "/desktop-wallpaper-oblivion-2022-movie-thumbnail.jpg" },
    { image: "/desktop-wallpaper-oblivion-2022-movie-thumbnail.jpg" },
    { image: "/desktop-wallpaper-oblivion-2022-movie-thumbnail.jpg" },
    { image: "/desktop-wallpaper-oblivion-2022-movie-thumbnail.jpg" },
    { image: "/desktop-wallpaper-oblivion-2022-movie-thumbnail.jpg" },
    { image: "/desktop-wallpaper-oblivion-2022-movie-thumbnail.jpg" },
    { image: "/desktop-wallpaper-oblivion-2022-movie-thumbnail.jpg" },
    { image: "/desktop-wallpaper-oblivion-2022-movie-thumbnail.jpg" },
  ];

  return (
    <div>
      <Box>
        <img src="  /91JAhmsxEmL.jpg" height="100%" width="100%" />

        <Box>
          <Typography>
            Are you looking for the best movie site to make the most of your
            entertainment time? Don’t subscribe to paid streaming services yet
            as you can get the same quality content and features at fmovies for
            free. We provide you with thousands of movies and TV shows in HD
            quality without any hassle. You do not need to pay, subscribe,
            register, or even watch shady ads to enjoy your favorite movies here
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {data.map((item) => {
            return (
              <>
                <Grid item md={2} xs={3} sm={4}>
                  <Card sx={{ maxWidth: 220 }}>
                    <CardMedia
                      sx={{ height: "50vh" }}
                      image={item.image}
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography variant="h6" color="text.secondary">
                        Doom 10
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="small"
                        sx={{ backgroundColor: "#1a1717", color: "white" }}
                      >
                        <a
                          href="https://youtu.be/CFu8Z5tbC0U?si=4-TEWbxsFMbNFg72"
                          target="_blank"
                        >
                          Download here
                        </a>
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Box>
      {/* <Box className="Animation">New Movies</Box> */}
    </div>
  );
};

export default Content;
