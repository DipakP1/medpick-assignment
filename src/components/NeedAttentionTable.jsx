import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Button,
  Paper,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddButton from "./AddButton";
const statusColors = {
  Urgent: { bg: "#FEE2E2", color: "#B91C1C" },
  High: { bg: "#FEF3C7", color: "#92400E" },
  Medium: { bg: "#FEF9C3", color: "#854D0E" },
  Low: { bg: "#DCFCE7", color: "#166534" },
};

const rows = [
  {
    assetCode: "MED-1234",
    department: "Cardiology",
    service: "Maintenance",
    status: "Urgent",
  },
  {
    assetCode: "MED-2356",
    department: "Radiology",
    service: "Repair",
    status: "High",
  },
  {
    assetCode: "MED-7890",
    department: "Laboratory",
    service: "Calibration",
    status: "Medium",
  },
  {
    assetCode: "MED-4567",
    department: "Emergency",
    service: "Replacement",
    status: "Low",
  },
];

const CustomTable = () => {
  return (
    <Paper sx={{ borderRadius: 3, p: 3 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography fontSize={"17px"} fontWeight={600} fontFamily="Inter">
          Need Attention
        </Typography>
        <AddButton />
      </Box>

      <Table>
        <TableHead sx={{ backgroundColor: "#F9FAFB" }}>
          <TableRow>
            <TableCell
              color="#6B7280"
              fontSize="11px"
              fontWeight="500"
              sx={{ fontFamily: "Inter" }}
            >
              Asset Code
            </TableCell>
            <TableCell
              color="#6B7280"
              fontSize="11px"
              fontWeight="500"
              sx={{ fontFamily: "Inter" }}
            >
              Department
            </TableCell>
            <TableCell
              color="#6B7280"
              fontSize="11px"
              fontWeight="500"
              sx={{ fontFamily: "Inter" }}
            >
              Service
            </TableCell>
            <TableCell
              color="#6B7280"
              fontSize="11px"
              fontWeight="500"
              sx={{ fontFamily: "Inter" }}
            >
              Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, idx) => (
            <TableRow key={idx}>
              <TableCell
                sx={{
                  fontFamily: "Inter",
                  fontWeight: "600",
                  fontSize: "13px",
                }}
              >
                {row.assetCode}
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Inter",
                  fontWeight: "400",
                  fontSize: "13px",
                  color: "#6B7280",
                }}
              >
                {row.department}
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Inter",
                  fontWeight: "400",
                  fontSize: "13px",
                  color: "#6B7280",
                }}
              >
                {row.service}
              </TableCell>
              <TableCell>
                <Chip
                  label={row.status}
                  sx={{
                    backgroundColor: statusColors[row.status].bg,
                    color: statusColors[row.status].color,
                    fontWeight: 600,
                    borderRadius: "10px",
                  }}
                  size="small"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default CustomTable;
