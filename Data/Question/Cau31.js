export default function() {
  return `**Cho hàm \`reverse\` được định nghĩa như sau:**

\`\`\`cpp
#include <iostream>
using namespace std;

struct TreeNode {
    int key;
    TreeNode *left, *right;
    TreeNode(int value) : key(value), left(NULL), right(NULL) {}
};

void reverse(TreeNode *node) {
    if (node == NULL)
        return;

    if ((node->left) && (node->right) && (node->key & 0b1))
        cout << " " << node->key;

    reverse(node->left);
    reverse(node->right);
}
\`\`\`

**Hàm \`reverse\` có tác dụng gì?**

`;
}
