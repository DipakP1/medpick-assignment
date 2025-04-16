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
  { name: "Total", value: 50, color: "#FBBF24" },
  { name: "Expires Soon", value: 30, color: "#34D399" },
  { name: "Requested", value: 20, color: "#A78BFA" },
];

const iconMap = {
  Total: <CheckCircleOutline fontSize="large" sx={{ color: "#047857" }} />,
  "Expires Soon": <CancelOutlined fontSize="large" sx={{ color: "#B45309" }} />,
  Requested: <RemoveCircleOutline fontSize="large" sx={{ color: "#7E22CE" }} />,
};

export const WarrantyStatus = () => {
  return (
    <Card sx={{ borderRadius: 3, p: 2 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
        height={"100%"}
      >
        <Typography fontWeight={600}>Warranty Status</Typography>
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
                backgroundColor:
                  item.name === "Total"
                    ? "#EFF6FF"
                    : item.name === "Expires Soon"
                    ? "#FFFBEB"
                    : "#FAF5FF",
                color:
                  item.name === "Total"
                    ? "#047857"
                    : item.name === "Expires Soon"
                    ? "#B45309"
                    : "#7E22CE",
              }}
            >
              <CardContent>
                {iconMap[item.name]}
                <Typography
                  fontWeight={700}
                  mt={1}
                  fontSize="18px"
                  lineHeight={"34px"}
                >
                  {item.value}%
                </Typography>
                <Typography
                  mt={1}
                  fontSize="14px"
                  sx={{
                    color:
                      item.name === "Total"
                        ? "#047857"
                        : item.name === "Expires Soon"
                        ? "#B45309"
                        : "#7E22CE",
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
