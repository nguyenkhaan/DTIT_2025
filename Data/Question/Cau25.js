export default function() {
  return `
**Giả sử địa chỉ của \`arr[0]\` là \`0x00000cd0\`, kết quả của chương trình \`C++\` sau là:**

\`\`\`cpp
#include <iostream>
using namespace std;
int main() {
    long long arr[3] = { 10, 20, 30 };
    long long* ptr = arr;
    ptr += 2;
    cout << &arr[0] << " ";
    cout << ptr << endl;
    return 0;
}
\`\`\`
`;
}
