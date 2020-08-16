function getDecimalValue(head: ListNode | null): number {
  const splitNum: number[] = []; 
  const search = (head: ListNode | null) => {
    splitNum.push(head!.val);
    if (head?.next) search(head.next);
  }
  search(head);
  return parseInt(splitNum.join(''), 2);
};