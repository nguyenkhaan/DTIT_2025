export default function() {
  return `**Đáp án:**

- \`c1\` là \`char\`, 1 byte
- \`c2\` là \`const char*\`, 2 byte (có \`null\` character ở cuối)

Chỉ chấp nhận \`const char*\`, không chấp nhận \`char[]\`.
Mặc dù \`“A”\` là \`string literal\`, có kiểu dữ liệu là \`const char[2]\` (size + 1 vì có \`null\`) nhưng khi gán vào biến, \`auto\` keyword sẽ đặt kiểu dữ liệu là \`const char*\`.`;
}
