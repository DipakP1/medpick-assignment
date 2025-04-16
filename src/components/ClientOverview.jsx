import {
  Box,
  Typography,
  Chip,
  Button,
  Card,
  Avatar,
  Stack,
  LinearProgress,
  styled,
  Badge,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function ClientOverview() {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        content: '""',
      },
    },
  }));

  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 3,
        borderRadius: 3,
        boxShadow: 2,
        fontFamily: "'Raleway', sans-serif",
        overflow: "auto",
        width: "100%",
      }}
    >
      {/* Left Block: Hospital Info */}
      <Box>
        <Box display="flex" gap={2}>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar
              src="/images/container.png"
              sx={{ width: 48, height: 48 }}
              variant="dot"
            />
          </StyledBadge>
          <Box>
            <Box display="flex" alignItems="center" gap={1}>
              <Typography fontWeight={600} fontSize={"17px"}>
                City General Hospital
              </Typography>
              <Chip
                label={
                  <Typography
                    fontWeight={500}
                    fontSize={"10px"}
                    sx={{ color: "#1E40AF" }}
                  >
                    Active Client
                  </Typography>
                }
                size="small"
                sx={{
                  backgroundColor: "#EFF6FF",
                }}
              />
            </Box>
            <Typography
              fontSize={"12px"}
              variant="body2"
              color="text.secondary"
            >
              <Box
                component="span"
                sx={{ color: "green", fontWeight: 600, mr: 2 }}
              >
                ●{" "}
                <span style={{ color: "#6B7280", fontWeight: 400 }}>
                  Online
                </span>
              </Box>
              ● Last updated 2 mins ago
            </Typography>
          </Box>
        </Box>
        <Box mt={5}>
          <Typography fontWeight={500} fontSize={"11px"} variant="body2">
            Annual Contract Value
          </Typography>
          <Typography variant="h4" fontSize={"25px"} fontWeight={600}>
            ₹2,50,00,000
          </Typography>
        </Box>
      </Box>

      {/* Middle Block: Metrics */}
      <Box>
        <Box display="flex" gap={4} alignItems="center">
          <Box display={"flex"} flexDirection={"column"}>
            <Box
              textAlign={"center"}
              gap={0.6}
              display={"flex"}
              flexDirection={"column"}
              borderRadius={"10px"}
              height={"100px"}
              sx={{
                backgroundImage: "linear-gradient(135deg, #EFF6FF, #DBEAFE)",
                padding: "10px 15px",
              }}
            >
              <Typography
                sx={{ color: "#2563EB" }}
                variant="body2"
                color="text.secondary"
              >
                Performance
              </Typography>
              <Typography fontWeight={600}>98.5%</Typography>
              <LinearProgress
                variant="determinate"
                value={98.5}
                color="primary"
                sx={{ height: 6, borderRadius: 4 }}
              />
            </Box>
            <Box textAlign={"left"} mt={5}>
              <Typography
                sx={{ color: "#6B7280", fontSize: "11px", fontWeight: "500" }}
              >
                Assets
              </Typography>
              <Typography fontWeight={600} fontSize={"16px"}>
                487
              </Typography>
            </Box>
          </Box>

          <Box display={"flex"} flexDirection={"column"}>
            <Box
              textAlign={"center"}
              gap={0.6}
              display={"flex"}
              flexDirection={"column"}
              borderRadius={"10px"}
              height={"100px"}
              sx={{
                backgroundImage: "linear-gradient(135deg, #F0FDF4, #DCFCE7)",
                padding: "10px 20px",
              }}
            >
              <Typography
                sx={{ color: "#2563EB" }}
                variant="body2"
                color="text.secondary"
              >
                Satisfaction
              </Typography>
              <Typography fontWeight={600}>4.8/5</Typography>
              <Typography fontSize={18} color="green">
                ★★★★★
              </Typography>
            </Box>
            <Box textAlign={"left"} mt={5}>
              <Typography
                sx={{ color: "#6B7280", fontSize: "11px", fontWeight: "500" }}
              >
                Services
              </Typography>
              <Typography fontWeight={600} fontSize={"16px"}>
                24
              </Typography>
            </Box>
          </Box>

          <Box display={"flex"} flexDirection={"column"}>
            <Box
              textAlign={"center"}
              gap={0.6}
              display={"flex"}
              flexDirection={"column"}
              borderRadius={"10px"}
              height={"100px"}
              sx={{
                backgroundImage: "linear-gradient(135deg, #FAF5FF, #DBEAFE)",
                padding: "10px 20px",
              }}
            >
              <Typography
                sx={{ color: "#2563EB" }}
                variant="body2"
                color="text.secondary"
              >
                Asset Utilization
              </Typography>
              <Typography fontWeight={600}>95.3%</Typography>
              <LinearProgress
                variant="determinate"
                value={95.3}
                sx={{
                  height: 6,
                  borderRadius: 4,
                  background: "#f3eaff",
                  "& .MuiLinearProgress-bar": { background: "#aa6be1" },
                }}
              />
            </Box>

            <Box textAlign={"left"} mt={5}>
              <Typography
                sx={{ color: "#6B7280", fontSize: "11px", fontWeight: "500" }}
              >
                Uptime
              </Typography>
              <Typography fontWeight={600} fontSize={"16px"}>
                99.9%
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Right Block: Button + Placeholder Card */}
      <Box textAlign="center">
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            borderRadius: 2,
            textTransform: "none",
            background: "#0056e0",
            mb: 1,
            width: "100%",
          }}
        >
          Generate Report
        </Button>
        <Box
          sx={{
            width: "100%",
            height: 150,
            background: "linear-gradient(135deg, #b2cfff, #0056e0)",
            borderRadius: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          XXXXXXXXXX
          <br />
          <br />
          XXXXXXXXXX
        </Box>
      </Box>
    </Card>
  );
}
