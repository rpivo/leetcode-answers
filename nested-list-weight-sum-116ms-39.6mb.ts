function depthSum(nestedList: NestedInteger[], depth = 1): number {
  return nestedList.reduce((sum, item) => item.isInteger()
    ? (item.getInteger() * depth) + sum
    : depthSum(item.getList(), depth + 1) + sum, 0)
};
