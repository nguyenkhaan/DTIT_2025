export default function cau13() {
  return `**Trong đoạn chương trình \`C++\` sau, giá trị đang lưu của biến \`a\`, \`b\`, \`c\`, \`d\` được lưu tại *heap* hay *stack* trong bộ nhớ?**

\`\`\`cpp
int a = 5;
void fun(int c)
{
    int b = 6;
    int* temp = new int(7);
    int& d = *temp;
}
\`\`\`
`;
}
