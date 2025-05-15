export default function() {
  return `**Cho hàm \`f\` được định nghĩa như sau:**

\`\`\`cpp
int f(int arr[], int n, int k) {
    int a = 0, b = n - 1, c = 0;
    while (a <= b && arr[(c = a + (b - a) / 2)] != k)
        arr[c] < k ? a = c + 1 : b = c - 1;

    return arr[c] == k ? c : -1;
}
\`\`\`

**Khi gọi hàm \`f\` trên với tham số đầu vào là \`arr[] = {1, 2, 3, 5, 6, 7, 8, 10}, n = 8, k = 8\`. Kết quả trả về là gì?**
`;
}
