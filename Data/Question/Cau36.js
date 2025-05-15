export default function() {
  return `**Cho đoạn chương trình \`C++\` sau:**

\`\`\`cpp
#include <iostream>
using namespace std;

struct DTIT {
	int a;
	DTIT() : DTIT(7) {
    	a = 5;
    	cout << "monty python\\n";
	}
	DTIT(int n) : a(n) {
    	cout << "jane doe\\n";
	}
	~DTIT() {
    	cout << a << " ellen joe\\n";
	}
};

int main() {
	DTIT* a = new DTIT(2025), b;
	DTIT* c = new (&b) DTIT(6);
	delete a;
	// do not delete c
}
\`\`\`

**Giả sử chương trình biên dịch với con trỏ có kích thước 64bit và \`int\` có kích thước 32bit.**

**Chương trình có kết quả biên dịch/chạy là?**

**Có bao nhiêu byte bộ nhớ được khởi tạo cho các biến trên heap và stack?**

**Vùng nhớ c đang trỏ tới nằm ở heap, stack, hay vùng khác trong bộ nhớ?**
`;
}
