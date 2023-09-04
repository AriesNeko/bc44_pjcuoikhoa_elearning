import fetcher from "./fetcher";

const courseAPI = {
  getCourses: (pageSize) => {
    return fetcher.get("QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang", {
      params: {
        MaNhom: "GP01",
        pageSize,
        page: 1,
      },
    });
  },

  getDetailCourse: (maKhoaHoc) => {
    return fetcher.get("QuanLyKhoaHoc/LayThongTinKhoaHoc", {
      params: {
        maKhoaHoc,
      },
    });
  },
};

export default courseAPI;
