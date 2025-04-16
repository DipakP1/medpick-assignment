import {
  Box,
  Divider,
  Grid,
  IconButton,
  Typography,
  Card,
  Button,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DynamicTable from "../components/Table";
import Charts from "../components/Charts";

import ClientOverview from "../components/ClientOverview";
import DowntimeCard from "../components/Cards";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ServicesDashboard from "../components/ServieChart";
import { CalibrationStatusCard } from "../components/CalibrationStatusCard";
import CustomTable from "../components/NeedAttentionTable";
import { WarrantyStatus } from "../components/WarrentyStatusCard";
const jsonData = [
  {
    skuName: "Protein Bar 100g",
    sales: "₹93,132.12",
    outOfStock: "1.68%",
    totalInventory: "931.9",
    averageRank: "3.2",
    estTraffic: "12303",
    estImpressions: "25005",
    clicks: "1.9",
  },
  {
    skuName: "Choco Bar 100g",
    sales: ["₹8,526.32", "₹9,132.12", "2.4%"],
    outOfStock: ["6.79%", "3.28", "3.4%"],
    totalInventory: ["679", "328", "-"],
    averageRank: [7, 4, "2.4%"],
    estTraffic: ["3005", "2906", "2.4%"],
    estImpressions: ["4231", "3657", "2.4%"],
    clicks: ["2.4", "2.4", "2.4%"],
  },
  {
    skuName: "SKU 3",
    sales: "₹9313",
    outOfStock: "1.68%",
    totalInventory: "931.9",
    averageRank: "11",
    estTraffic: "1931.9",
    estImpressions: "₹931.9",
    clicks: "1.9",
  },
  {
    skuName: "SKU 4",
    sales: "₹0",
    outOfStock: "0%",
    totalInventory: "0",
    averageRank: "0",
    estTraffic: "0",
    estImpressions: "0",
    clicks: "0.0",
  },
];

export default function Dashboard() {
  return (
    <Box>
      <Box
        sx={{
          borderRadius: "10px",
          margin: "10px",
          paddingBottom: "10px",
          width: "100%",
        }}
      >
        <Grid container my={3}>
          <Grid size={{ xs: 12, md: 12 }}>
            <ClientOverview />
          </Grid>
        </Grid>

        <Grid container spacing={3} my={2}>
          <Grid
            size={{ xs: 12, md: 3 }}
            display={"flex"}
            alignItems={"center"}
            justifyContent="center"
            borderRadius="10px"
            gap={3}
            backgroundColor="white"
            padding={4}
            boxShadow="0px 0px  1px 1px #0000000D"
          >
            <img src="/images/card1.png" alt="" />
            <Box>
              <Typography>Assets</Typography>
              <Typography fontWeight={600} fontSize={"18px"}>
                487
              </Typography>
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, md: 3 }}
            display={"flex"}
            alignItems={"center"}
            justifyContent="center"
            borderRadius="10px"
            gap={2}
            backgroundColor="white"
            padding={4}
            boxShadow="0px 0px  1px 1px #0000000D"
          >
            <img src="/images/card2.png" alt="" />
            <Box>
              <Typography>Not Working</Typography>
              <Typography fontWeight={600} fontSize={"18px"}>
                24
              </Typography>
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, md: 3 }}
            display={"flex"}
            alignItems={"center"}
            justifyContent="center"
            borderRadius="10px"
            gap={2}
            backgroundColor="white"
            padding={4}
            boxShadow="0px 0px  1px 1px #0000000D"
          >
            <img src="/images/card3.png" alt="" />
            <Box>
              <Typography>Discarded</Typography>
              <Typography fontWeight={600} fontSize={"18px"}>
                18
              </Typography>
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, md: 3 }}
            display={"flex"}
            alignItems={"center"}
            justifyContent="center"
            borderRadius="10px"
            gap={2}
            backgroundColor="white"
            padding={4}
            boxShadow="0px 0px  1px 1px #0000000D"
          >
            <img src="/images/card4.png" alt="" />
            <Box>
              <Typography>Department</Typography>
              <Typography fontWeight={600} fontSize={"18px"}>
                12
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={3} my={2}>
          <Grid size={{ xs: 12, md: 4 }}>
            <DowntimeCard
              icon={"/images/red.png"}
              title="Cumulative Downtime"
              newData={false}
              bottomImg={
                <Box textAlign={"left"} mt={2} width="100%">
                  <Typography
                    fontSize={13}
                    color="text.secondary"
                    mb={0.5}
                    sx={{ ml: 5 }}
                  >
                    Time wasted due to downtime
                  </Typography>
                  <Typography variant="h6" fontWeight={700} sx={{ ml: 5 }}>
                    17:45:30
                  </Typography>
                </Box>
              }
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <DowntimeCard
              icon={"/images/box.png"}
              title="User Asset Tracking 2.0"
              subtitle="Update tracking for monitoring and maintenance"
              newData={true}
              bottomImg={
                <>
                  <img height={30} width={110} src="/images/users.png" alt="" />
                </>
              }
              btn={
                <>
                  <Button
                    variant="container"
                    sx={{
                      textTransform: "none",
                      background: "linear-gradient(135deg, #2563EB, #153885)",
                      borderRadius: "8px",
                      color: "white",
                    }}
                    endIcon={<ArrowForwardIcon />}
                  >
                    Learn More
                  </Button>
                </>
              }
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <DowntimeCard
              title="XXXXXXXXXXXXXXXXX"
              icon={"/images/box.png"}
              newData={false}
              bottomImg=""
            />
          </Grid>
        </Grid>

        <Grid container spacing={3} my={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <ServicesDashboard title="Services" />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <CalibrationStatusCard />
          </Grid>
        </Grid>

        <Grid container spacing={3} my={2} height={"100%"}>
          <Grid size={{ xs: 12, md: 6 }}>
            <ServicesDashboard title="Incidents" />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <WarrantyStatus />
          </Grid>
        </Grid>

        <Grid container spacing={3} my={2}>
          <Grid size={{ xs: 12, md: 12 }}>
            <CustomTable />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
