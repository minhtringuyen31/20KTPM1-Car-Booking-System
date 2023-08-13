import React from "react";
import { useTheme } from "@mui/material/styles";
import CheckIcon from "@mui/icons-material/Check";
import PlaceIcon from "@mui/icons-material/Place";
import {
  Avatar,
  Box,
  Card,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  Button,
  IconButton,
  Link,
} from "@mui/material";
import ScrollBar from "react-perfect-scrollbar";
import { PlaceOutlined } from "@mui/icons-material";

const CustomerHistoryBooking = (props) => {
  const theme = useTheme();
  const { items = [] } = props;

  return (
    <Card>
      <ScrollBar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead
              sx={{
                backgroundColor: theme.palette.primary.light,
              }}
            >
              <TableRow>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  ID
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  Booking Date
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  Pick Up Location
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  Destination Location
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  Vehicle Type
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((booking) => {
                return (
                  <TableRow
                    hover
                    key={booking._id}
                    // onClick={() => handleTableRowClick(booking._id)}
                  >
                    <TableCell>{booking._id}</TableCell>
                    <TableCell>{booking?.bookingDate}</TableCell>
                    <TableCell>
                      <Typography>
                        {booking.pickUpLocation?.location}
                      </Typography>
                      <IconButton
                        component={Link}
                        href="https://github.com/codedthemes/mantis-free-react-admin-template"
                        target="_blank"
                        disableRipple
                        color="primary"
                        title="Download Free Version"
                        sx={{ color: "text.primary", bgcolor: "grey.100" }}
                      >
                        <PlaceOutlined />
                      </IconButton>
                    </TableCell>
                    <TableCell>
                      {booking.destinationLocation?.location}
                    </TableCell>
                    <TableCell>{booking.tripType}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        startIcon={<CheckIcon />}
                        size="small"
                      >
                        Choose Location
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </ScrollBar>
    </Card>
  );
};

export default CustomerHistoryBooking;