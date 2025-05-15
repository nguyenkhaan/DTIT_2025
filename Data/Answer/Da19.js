export default function() {
  return `**Đáp án:**

Using \`‘\\n’\` **only insert** the character into the buffer, while \`std::endl\` both **insert** \`‘\\n’\` to the buffer AND **flushes the buffer**, forcing any characters currently held in the stream's internal buffer to be written to the actual output device (e.g., the console terminal) **immediately**. 

This flushing, however, can take time, and using \`std::endl\` can be significantly less performant than just inserting newlines with \`‘\\n’\` and letting the stream manage buffering and flushing automatically.

Flushing guarantees that the output appears on the console immediately. This can be important for:
- Interactive prompts where you need the user to see the prompt before typing input.
- Debugging messages where you want to ensure the message is printed before a potential crash occurs shortly after.
- Logging critical information.

For most cases, especially when printing multiple lines or within loops, using \`‘\\n’\` is generally preferred for better performance. The output will usually appear as expected because \`std::cout\` is often line-buffered when connected to a terminal (meaning it flushes automatically when it sees a newline), or the buffer will flush when full or when the program exits.

**Accepts any answer that explains:**
- \`std::endl\` is both \`‘\\n’\` and \`std::flush\`.
- \`std::flush\`, or \`std::endl\`, have a performance hit.
- use \`‘\\n’\` when outputting a lot of lines at the same time (logging,...) or not needing the result to show up immediately.  This is preferred for better performance.
- use \`std::endl\` to force the buffer to display immediately, before taking user input (interactive prompts) or when the message needs to be displayed (critical log, debug message before crash,...)`;
}
