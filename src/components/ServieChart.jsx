import React from "react";
import {
  Box,
  Typography,
  Button,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "@mui/material";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddButton from "./AddButton";

const data = [
  { name: "00:00", value: 100 },
  { name: "04:00", value: 150 },
  { name: "08:00", value: 300 },
  { name: "12:00", value: 220 },
  { name: "16:00", value: 360 },
  { name: "20:00", value: 190 },
];

const StatCard = ({ title, value, percent, color, sub }) => (
  <Box
    bgcolor={color.bg}
    borderRadius={2}
    p={2}
    mb={2}
    display="flex"
    flexDirection="column"
    alignItems="center"
    boxShadow={1}
  >
    <Box display={"flex"} alignItems={"center"} gap={3} mb={0.5}>
      <Typography fontSize={12} color={"#4B5563"}>
        {title}
      </Typography>
      <Typography variant="subtitle2" fontWeight={600} color={color.text}>
        {value}
      </Typography>
    </Box>
    <Box
      position="relative"
      width={60}
      height={60}
      display="flex"
      alignItems="center"
      justifyContent="center"
      mt={1}
    >
      <svg width="60" height="60">
        <circle
          cx="30"
          cy="30"
          r="26"
          stroke="#e0e0e0"
          strokeWidth="4"
          fill="none"
        />
        <circle
          cx="30"
          cy="30"
          r="26"
          stroke={color.circle}
          strokeWidth="4"
          fill="none"
          strokeDasharray={`${(percent / 100) * 163}, 163`}
          transform="rotate(-90 30 30)"
        />
      </svg>
      <Typography
        variant="caption"
        fontWeight={600}
        sx={{ position: "absolute" }}
      >
        {percent}%
      </Typography>
    </Box>
    {sub && (
      <Typography
        variant="caption"
        fontWeight={600}
        color={color.circle}
        mt={1}
      >
        {sub}
      </Typography>
    )}
  </Box>
);

export default function ServicesDashboard({ title }) {
  return (
    <Box display="flex" borderRadius={3} overflow="hidden" boxShadow={1}>
      {/* Sidebar */}
      <Box
        width={180}
        bgcolor="#f9fafb"
        p={2}
        display="flex"
        flexDirection="column"
      >
        <Typography
          display={"flex"}
          alignItems={"center"}
          fontWeight={600}
          mb={2}
        >
          {title}
          <KeyboardArrowDownIcon sx={{ color: "grey" }} />
        </Typography>
        <StatCard
          title="Open"
          value="24"
          percent={48}
          color={{ bg: "#ecfdf5", text: "#047857", circle: "#10b981" }}
        />
        <StatCard
          title="Closed"
          value="18"
          percent={36}
          color={{ bg: "#fef2f2", text: "#b91c1c", circle: "#ef4444" }}
        />
        <StatCard
          title="Expenditure"
          value="₹45K"
          percent={45}
          sub=""
          color={{ bg: "#eff6ff", text: "#1d4ed8", circle: "#3b82f6" }}
        />
      </Box>

      {/* Main Chart Section */}
      <Box flexGrow={1} bgcolor="#fff" p={3}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <ToggleButtonGroup exclusive size="small">
            <ToggleButton value="day">Day</ToggleButton>
            <ToggleButton value="month">Month</ToggleButton>
            <ToggleButton value="year">Year</ToggleButton>
          </ToggleButtonGroup>
          <AddButton />
        </Box>

        <Box mt={4} height={360}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} barSize={40}>
              <XAxis dataKey="name" stroke="#888" />
              <Tooltip />
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#EFF6FF" stopOpacity={1} />
                  <stop offset="100%" stopColor="#DBEAFE" stopOpacity={1} />
                </linearGradient>
              </defs>
              <Bar
                dataKey="value"
                fill="url(#barGradient)"
                radius={[10, 10, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Box>
    </Box>
  );
}
