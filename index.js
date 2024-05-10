function zigzagLevelOrder(root) {
  if (!root) return [];
  const result = [];
  let isReverse = false;
  const queue = [root];
  while (queue.length) {
    const size = queue.length;
    const level = [];
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      if (isReverse) {
        level.unshift(node.val);
      } else {
        level.push(node.val);
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(level);
    isReverse = !isReverse;
  }
  return result;
}
