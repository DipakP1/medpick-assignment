// CalibrationStatusCard.tsx
import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  MenuItem,
  Select,
  TextField,
  InputAdornment,
} from "@mui/material";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import {
  CheckCircleOutline,
  CancelOutlined,
  RemoveCircleOutline,
  AccountCircle,
} from "@mui/icons-material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const data = [
  { name: "Calibrated", value: 45, color: "#3B82F6" },
  { name: "Not Calibrated", value: 35, color: "#F87171" },
  { name: "Not Required", value: 20, color: "#9CA3AF" },
];

const iconMap = {
  Calibrated: <CheckCircleOutline fontSize="large" sx={{ color: "#3B82F6" }} />,
  "Not Calibrated": (
    <CancelOutlined fontSize="large" sx={{ color: "#BE123C" }} />
  ),
  "Not Required": (
    <RemoveCircleOutline fontSize="large" sx={{ color: "#374151" }} />
  ),
};

export const CalibrationStatusCard = () => {
  return (
    <Card sx={{ borderRadius: 3, p: 2 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
        height={"100%"}
      >
        <Typography fontWeight={600}>Calibration Status</Typography>
        <TextField
          select
          size="small"
          value="Mar 2025"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CalendarTodayIcon sx={{ fontSize: "12px" }} />
              </InputAdornment>
            ),
            sx: {
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
              backgroundColor: "transparent", // optional
            },
          }}
        >
          <MenuItem value="Mar 2025">Mar 2025</MenuItem>
          <MenuItem value="Feb 2025">Feb 2025</MenuItem>
          <MenuItem value="Jan 2025">Jan 2025</MenuItem>
        </TextField>
      </Box>

      <Box height={200} width="100%">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={100}
              paddingAngle={2}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </Box>

      <Grid container spacing={2} mt={7}>
        {data.map((item, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <Card
              sx={{
                borderRadius: 2,
                textAlign: "center",
                // minWidth: "200px",
                padding: "0 20px",
                width: "100%",
                margin: "auto",
                backgroundColor:
                  item.name === "Calibrated"
                    ? "#EFF6FF"
                    : item.name === "Not Calibrated"
                    ? "#FFF1F2"
                    : "#F9FAFB",
                color:
                  item.name === "Calibrated"
                    ? "#1D4ED8"
                    : item.name === "Not Calibrated"
                    ? "#BE123C"
                    : "#374151",
              }}
            >
              <CardContent>
                {iconMap[item.name]}
                <Typography fontWeight={700} mt={1} fontSize="18px">
                  {item.value}%
                </Typography>
                <Typography
                  fontSize="14px"
                  sx={{
                    color:
                      item.name === "Calibrated"
                        ? "#1D4ED8"
                        : item.name === "Not Calibrated"
                        ? "#BE123C"
                        : "#374151",
                  }}
                >
                  {item.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};
