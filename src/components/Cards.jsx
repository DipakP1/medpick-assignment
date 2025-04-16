import { Box, Typography, IconButton, Chip } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const DowntimeCard = ({ icon, title, subtitle, newData, bottomImg, btn }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      flexDirection={"column"}
      alignItems="left"
      p={2}
      borderRadius={2}
      sx={{
        backgroundColor: "#fff",
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)",
        width: "100%",
        height: "140px",
      }}
    >
      <Box display={"flex"} justifyContent={"space-between"}>
        {/* Left side */}
        <Box display="flex" alignItems="flex-start" gap={2}>
          <img src={icon} alt="" />
          <Box>
            <Typography fontSize={14} fontWeight={500}>
              {title}
            </Typography>
            <Typography fontSize={14} color="text.secondary">
              {subtitle}
            </Typography>
          </Box>
          {newData && (
            <Chip
              label={
                <Typography
                  fontWeight={600}
                  fontSize={"10px"}
                  sx={{ color: "#1E40AF" }}
                >
                  New
                </Typography>
              }
              size="small"
              sx={{
                backgroundColor: "#EFF6FF",
                borderRadius: "5px",
              }}
            />
          )}
        </Box>

        {/* Right side (menu icon) */}
        <IconButton size="small">
          <MoreVertIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* Full width info */}
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        {bottomImg}
        {btn}
      </Box>
    </Box>
  );
};

export default DowntimeCard;
