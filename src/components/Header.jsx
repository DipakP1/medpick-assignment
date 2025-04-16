import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Header = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        width: "100%",
        height: "94px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography
        sx={{
          fontSize: "30px",
          fontWeight: "700",
          fontFamily: "Raleway",
          ml: 5,
        }}
        variant="h3"
      >
        Dashboard
      </Typography>

      <Box display={"flex"} alignContent={"center"} gap={2}>
        <Box
          sx={{
            boxShadow: "0px 0px 0px 1px #DBE7E5",
            display: "flex",
            alignItems: "center",
            borderRadius: "50px",
          }}
        >
          <Typography
            sx={{
              backgroundColor: "#1B2535",
              borderRadius: "50%",
              height: "40px",
              width: "40px",
              color: "white",
              display: "flex",
              alignItems: "center",
              m: 0.5,
              justifyContent: "center",
            }}
          >
            B
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "500",
              lineHeight: "100%",
              fontFamily: "Raleway",
              mr: 5,
            }}
          >
            Non Bio Medical
          </Typography>
        </Box>
        <Box
          sx={{
            boxShadow: "0px 0px 0px 1px #DBE7E5",
            display: "flex",
            alignItems: "center",
            borderRadius: "50px",
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "500",
              lineHeight: "100%",
              fontFamily: "Raleway",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              ml: 2,
            }}
          >
            Non Bio Medical
            <KeyboardArrowDownIcon sx={{ ml: 4, mr: 2 }} />
          </Typography>
        </Box>
        <Box
          display={"flex"}
          alignContent={"center"}
          gap={2}
          justifyContent={"center"}
        >
          <IconButton
            sx={{
              boxShadow: "0px 0px 0px 1px #DBE7E5",
              width: "50px",
              height: "50px",
            }}
          >
            <DashboardCustomizeIcon />
          </IconButton>
          <IconButton
            sx={{
              boxShadow: "0px 0px 0px 1px #DBE7E5",
              width: "50px",
              height: "50px",
            }}
          >
            <NotificationsIcon />
          </IconButton>
          <IconButton
            sx={{
              backgroundColor: "#1B2535",
              color: "white",
              width: "50px",
              height: "50px",
            }}
          >
            A
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
