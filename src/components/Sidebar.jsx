"use client";

import {
  Drawer,
  List,
  ListItemText,
  Box,
  ListItemButton,
  ListItemIcon,
  Collapse,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import LogoutIcon from "@mui/icons-material/Logout";

export const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 292,
        flexShrink: 0,

        "& .MuiDrawer-paper": {
          width: 292,
          boxSizing: "border-box",
          border: "none",
          scrollbarWidth: "none",
          // backgroundColor: "#1B2535",
          margin: "auto",

          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          width: "100%",
          backgroundColor: "#1B2535",
        }}
      >
        <Box>
          <Box
            sx={{
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "100%",
              borderRadius: "2px",
            }}
          >
            {/* Logo */}
            <Box my={6} px={2}>
              <img src="/images/logo.png" alt="Logo" />
            </Box>

            {/* Scrollable Menu Section */}
            <Box
              sx={{
                flexGrow: 1,
                overflowY: "auto",

                // hide scrollbar for all browsers
                "&::-webkit-scrollbar": { display: "none" }, // Chrome, Safari
                scrollbarWidth: "none", // Firefox
                msOverflowStyle: "none", // IE & Edge
              }}
            >
              <List
                sx={{
                  color: "white",
                  fontFamily: "Raleway",
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
              >
                <ListItemButton sx={{ gap: 2 }}>
                  <ListItemIcon sx={{ minWidth: "30px" }}>
                    <img src="/images/1.png" alt="" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Dashboard"
                    primaryTypographyProps={{
                      sx: {
                        fontSize: "16px",
                        fontWeight: 800,
                        fontFamily: "Raleway",
                      },
                    }}
                  />
                </ListItemButton>

                <ListItemButton onClick={handleClick} sx={{ gap: 2 }}>
                  <ListItemIcon sx={{ minWidth: "30px" }}>
                    <img src="/images/2.png" alt="" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Assets"
                    primaryTypographyProps={{
                      sx: {
                        fontSize: "16px",
                        fontWeight: 800,
                        fontFamily: "Raleway",
                      },
                    }}
                  />
                  {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 8, gap: 2 }}>
                      <ListItemText
                        primary="Meta Ads"
                        primaryTypographyProps={{
                          sx: {
                            fontSize: "16px",
                            fontWeight: 800,
                            fontFamily: "Raleway",
                          },
                        }}
                      />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 8, gap: 2 }}>
                      <ListItemText
                        primary="Google Ads"
                        primaryTypographyProps={{
                          sx: {
                            fontSize: "16px",
                            fontWeight: 800,
                            fontFamily: "Raleway",
                          },
                        }}
                      />
                    </ListItemButton>
                    <ListItemButton
                      sx={{
                        pl: 8,
                        gap: 1,
                        // bgcolor:
                        //   activeItem === "Quick Commerce"
                        //     ? "#DFEAE8"
                        //     : "transparent",
                        // borderRadius:
                        //   activeItem === "Quick Commerce" ? "10px" : "none",
                      }}
                    >
                      <ListItemText
                        primary="Quick Commerce"
                        primaryTypographyProps={{
                          sx: {
                            fontSize: "16px",
                            fontWeight: 800,
                            fontFamily: "Raleway",
                            // color:
                            //   activeItem === "Quick Commerce"
                            //     ? "#027056"
                            //     : "inherit",
                          },
                        }}
                      />
                    </ListItemButton>
                  </List>
                </Collapse>

                <ListItemButton sx={{ gap: 2 }}>
                  <ListItemIcon sx={{ minWidth: "30px" }}>
                    <img src="/images/3.png" alt="" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Incidents"
                    primaryTypographyProps={{
                      sx: {
                        fontSize: "16px",
                        fontWeight: 800,
                        fontFamily: "Raleway",
                      },
                    }}
                  />
                </ListItemButton>
                <ListItemButton sx={{ gap: 2 }}>
                  <ListItemIcon sx={{ minWidth: "30px" }}>
                    <img src="/images/4.png" alt="" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Services"
                    primaryTypographyProps={{
                      sx: {
                        fontSize: "16px",
                        fontWeight: 800,
                        fontFamily: "Raleway",
                      },
                    }}
                  />
                </ListItemButton>
                <ListItemButton sx={{ gap: 2 }}>
                  <ListItemIcon sx={{ minWidth: "30px" }}>
                    <img src="/images/5.png" alt="" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Request"
                    primaryTypographyProps={{
                      sx: {
                        fontSize: "16px",
                        fontWeight: 800,
                        fontFamily: "Raleway",
                      },
                    }}
                  />
                </ListItemButton>

                <ListItemButton onClick={handleClick1} sx={{ gap: 2 }}>
                  <ListItemIcon sx={{ minWidth: "30px" }}>
                    <img src="/images/6.png" alt="" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Users"
                    primaryTypographyProps={{
                      sx: {
                        fontSize: "16px",
                        fontWeight: 800,
                        fontFamily: "Raleway",
                      },
                    }}
                  />
                  {open1 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </ListItemButton>
                <Collapse in={open1} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 8, gap: 2 }}>
                      <ListItemText
                        primary="Meta Ads"
                        primaryTypographyProps={{
                          sx: {
                            fontSize: "16px",
                            fontWeight: 800,
                            fontFamily: "Raleway",
                          },
                        }}
                      />
                    </ListItemButton>
                  </List>
                </Collapse>

                <ListItemButton onClick={handleClick2} sx={{ gap: 2 }}>
                  <ListItemIcon sx={{ minWidth: "30px" }}>
                    <img src="/images/7.png" alt="" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Reports"
                    primaryTypographyProps={{
                      sx: {
                        fontSize: "16px",
                        fontWeight: 800,
                        fontFamily: "Raleway",
                      },
                    }}
                  />
                  {open2 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </ListItemButton>
                <Collapse in={open2} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 8, gap: 2 }}>
                      <ListItemText
                        primary="Meta Ads"
                        primaryTypographyProps={{
                          sx: {
                            fontSize: "16px",
                            fontWeight: 800,
                            fontFamily: "Raleway",
                          },
                        }}
                      />
                    </ListItemButton>
                  </List>
                </Collapse>
              </List>
            </Box>

            {/* Footer Buttons */}
            <Box sx={{ px: 2, pb: 2 }}>
              <List>
                <Button
                  startIcon={<HeadsetMicIcon />}
                  variant="outlined"
                  sx={{
                    border: "1px solid white",
                    borderRadius: "33px",
                    color: "white",
                    fontFamily: "Raleway",
                    fontWeight: "700",
                    textTransform: "none",
                    width: "100%",
                  }}
                >
                  Contact Us
                </Button>
              </List>
              <List>
                <Button
                  startIcon={<LogoutIcon />}
                  variant="outlined"
                  sx={{
                    border: "1px solid white",
                    borderRadius: "33px",
                    color: "white",
                    fontFamily: "Raleway",
                    fontWeight: "700",
                    textTransform: "none",
                    width: "100%",
                  }}
                >
                  Log Out
                </Button>
              </List>
            </Box>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};
