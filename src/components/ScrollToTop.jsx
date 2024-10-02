import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation(); // Lấy đường dẫn hiện tại

  useEffect(() => {
    // Cuộn về đầu trang mỗi khi đường dẫn thay đổi
    window.scrollTo(0, 0);
  }, [pathname]); // Chạy khi đường dẫn thay đổi

  return null; // Không cần hiển thị gì từ component này
}

export default ScrollToTop;
