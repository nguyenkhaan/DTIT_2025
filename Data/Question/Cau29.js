export default function() {
  return `

**Kết quả khi chạy chương trình \`C++\` dưới đây là:**
\`\`\`cpp
struct Base {
	static int x;
	Base() { x += 2; }
	virtual void fun() { cout << ++x << " "; }  
	virtual ~Base() { cout << --x << " ";}
};

struct Derived : public Base {
	Derived() { x += 3; }
	void fun() { cout << x-- << " "; }  
	~Derived() { cout << "x++" << " ";}
};

int Base::x = 10;
int main() {
	Derived* b = (Derived*)new Base();
	Base* d = new Derived();
	b->fun(); b->fun();
	d->fun();
	delete b;
	delete d;
}
\`\`\`
`;
}
