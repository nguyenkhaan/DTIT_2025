export default function() {
  return `**Đáp án:**
\`\`\`
jane doe
jane doe
monty python
jane doe
2025 ellen joe
6 ellen joe
\`\`\`
Stack sử dụng 2 con trỏ (8 byte * 2 = 16 byte), 1 biến \`DTIT\` (\`DTIT\` chứa 1 int = 4 byte) nên là 20 byte.
Heap chứa DUY NHẤT vùng nhớ mà \`a\` trỏ tới nên là 4 byte.

\`c\` trỏ tới vùng nhớ trong stack, cụ thể là tại ô nhớ của \`b\`.

**Giải thích:**

Gọi constructor (ctor) có tham số int là ctor \`int\`, constructor không tham số là ctor \`void\`.

Đầu tiên chương trình khởi tạo biến \`a\` trên heap, với ctor \`int\` tham số \`2025\`, nên in ra \`jane doe\` dòng 1.

Tiếp theo chương trình khởi tạo biến \`b\`, không phải con trỏ vì không có dấu \`*\`, là biến cục bộ trên stack, tự động quản lý bộ nhớ, khởi tạo không tham số. 

Ctor \`void\` được gọi, mà ctor \`void\` kế thừa ctor \`int : DTIT(7)\` nên gọi ctor \`int\` trước, in ra \`jane doe\` trên dòng 2 và đặt member \`a = 7\`, sau đó gọi ctor \`void\`, in ra \`monty python\` trên dòng \`3\`, rồi đặt member \`a\` của \`b = 5\`.

Tiếp theo, cú pháp placement \`new (wiki)\` ở khởi tạo con trỏ \`c\` thực hiện gọi constructor \`DTIT\` trên vùng nhớ của \`b\` (vẫn trên stack) mà không cấp bộ nhớ mới, ctor \`int\` được gọi nên in ra \`jane doe\` ở dòng 4, đặt giá trị của \`b\` thành \`6\`.

Tiếp theo, \`delete a\` xóa object tại \`a\`, gọi destructor, mà \`a\` đang chứa \`2025\`, in ra \`2025\` \`ellen joe\` ở dòng 5.

Hàm \`main\` ra khỏi scope, tự động dọn biến \`b\` (trên stack), mà \`b\` đang chứa \`6\` nên in ra \`6 ellen joe\`.`;
}
