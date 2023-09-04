import fetcher from "./fetcher";

const userAPI = {
  getUserInfor: () => {
    return fetcher.post("QuanLyNguoiDung/ThongTinNguoiDung");
  },

  updateUserInfor: (values) => {
    return fetcher.put("QuanLyNguoiDung/CapNhatThongTinNguoiDung", {
      ...values,
      maNhom: "GP09",
    });
  },

  getCourse: (values) => {
    return fetcher.post("QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet", values);
  },
};

export default userAPI;
