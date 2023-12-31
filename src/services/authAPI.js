import fetcher from "./fetcher";

const authAPI = {
  signin: (values) => {
    return fetcher.post("QuanLyNguoiDung/DangNhap", values);
  },

  signup: (values) => {
    return fetcher.post("QuanLyNguoiDung/DangKy", {
      ...values,
      maNhom: "GP01",
    });
  },
};

export default authAPI;
