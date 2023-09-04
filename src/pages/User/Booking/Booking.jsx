import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import dayjs from "dayjs";

import Empty from "../../../components/Empty";
import data from "./dummydata.json";
import styles from "./styles.module.scss";

const Booking = ({ user }) => {
  return (
    <div className={styles.bookingHistory}>
      <h1 className={styles.title}>Booking History</h1>
      <div className={styles.main}>
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 1000 }}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="center">STT</TableCell>
                <TableCell align="center">Ma Khoa Hoc</TableCell>
                <TableCell align="center">Ten Khoa Hoc</TableCell>
                <TableCell align="center">Mo Ta</TableCell>
                <TableCell align="center">Hinh Anh</TableCell>
                <TableCell align="center">Danh Muc</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ height: "100%", width: "100%" }}>
              {data.length > 0 ? (
                data.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      "&:last-child td, &:last-child th": {
                        border: 0,
                      },
                    }}
                  >
                    <TableCell component="th" scope="row" align="center">
                      {index + 1}
                    </TableCell>
                    <TableCell align="center">{row.maKhoaHoc}</TableCell>
                    <TableCell align="center">{row.tenKhoaHoc}</TableCell>
                    <TableCell align="center">{row.moTa}</TableCell>
                    <TableCell align="center">{row.hinhAnh}</TableCell>
                    <TableCell align="center">
                      {row.danhMucKhoaHoc.maDanhMucKhoahoc}
                    </TableCell>
                    <TableCell align="center">
                      <button>Cancel</button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <Empty />
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Booking;
