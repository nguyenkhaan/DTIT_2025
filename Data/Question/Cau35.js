export default function() {
  return `**Kết quả của đoạn chương trình \`C++\` sau là:**

\`\`\`cpp
#include <iostream>

struct Dtit2025 {
	int n;
	const Dtit2025* operator[](int i) const	{
    	return this+i;
	}
};

int main() {
	Dtit2025 array[] = { 5, 2, 6, 8, 3, 4 };
	std::cout << (*(array + 4))[-3]->n << std::endl;
	return 0;
}
\`\`\`
`;
}
