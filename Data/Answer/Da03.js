export default function() {
  return `**Đáp án:** 
**\`override\`** 

**Từ khóa chỉ có hai tác dụng:**
- Đánh dấu cho người đọc code là hàm đang ghi đè
- Compiler khi biên dịch sẽ kiểm tra xem lớp cha có hàm để ghi đè không tránh lỗi ghi đè nhầm.

\`override\` không có ảnh hưởng gì đến binary cuối cùng.`;
}
