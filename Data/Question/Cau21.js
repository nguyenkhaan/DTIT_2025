export default function() {
  return `**Cho header lớp \`Vector\` và hàm \`main()\` sử dụng lớp đó.**

\`\`\`cpp
class Vector {
    int size;
    vector<int> data;
public:
    Vector(int s);
    /*   Các toán tử cần nạp chồng   */
};
int main() {
    Vector A(3), B(3), C(3);
    cin >> A;
    C = A + B;
    cout << "A + B = " << C << endl;
    cout << "A[1]: " << A(1) << endl;
}
\`\`\`

**Hãy cho biết có bao nhiêu toán tử cần nạp chồng để chương trình có thể thực thi? Liệt kê.**`;
}
