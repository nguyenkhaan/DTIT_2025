export default function() {
  return `**Đáp án:** Lỗi runtime (không thể gán giá trị cho \`const*\`)

\`string literal\` (\`“”\`) trong \`C++\` được lưu trong mục DATA trong binary, khi chạy binary được copy vào RAM dưới dạng chỉ đọc, ghi gán vào \`char*\` sẽ trỏ đến bộ nhớ chỉ đọc, ghi đè lên sẽ crash chương trình.`;
}
