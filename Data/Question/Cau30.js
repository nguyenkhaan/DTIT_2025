export default function() {
  return `**Kết quả khi chạy chương trình \`C++\` dưới đây là:**
\`\`\`cpp
#include <iostream>
using namespace std;

struct A {
	int n;
	A(int n = 1) { cout << (this->n = n); }
	~A() { cout << n; }
};

struct B {
	B() : m_res1() { cout << "4"; }
	~B() { cout << "3"; }
	A m_res1, m_res2 = 2;
};

B obj;
int main() {}
\`\`\`
`;
}
