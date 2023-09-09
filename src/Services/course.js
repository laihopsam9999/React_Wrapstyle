import Axios from "axios";

class CourseService {
  getCourse() {
    return Axios({
      method: "GET",
      url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
    });
  }

  getCoursePerPage(numberPage) {
    return Axios({
      method: "GET",
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=1&pageSize=${numberPage}&MaNhom=GP01`,
    });
  }

  getCourseDetail(id) {
    return Axios({
      method: "GET",
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`,
    });
  }
}

export default CourseService;
