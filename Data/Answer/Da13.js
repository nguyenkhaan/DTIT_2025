export default function() {
  return `**Đáp án:**

- \`a\` ở heap vì là biến global
- \`b\` ở stack vì biến scoped trong hàm
- \`c\` ở stack vì là tham số của hàm
- \`d\` là reference đến biến tạo bằng new lưu địa chỉ trong temp nên lưu trong heap.`;
}
