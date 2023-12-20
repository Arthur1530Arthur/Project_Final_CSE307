// Hàm xử lý khi nút được nhấp
function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Tạo hiệu ứng cuộn mượt
    });
  }
  
  // Xem xét việc hiển thị hoặc ẩn nút dựa trên vị trí cuộn trang
  window.addEventListener('scroll', function() {
    var scrollButton = document.getElementById('scroll-to-top');
    if (window.scrollY > 200) { // Hiển thị nút khi cuộn xuống dưới 200px
      scrollButton.style.display = 'block';
    } else {
      scrollButton.style.display = 'none';
    }
  });
  