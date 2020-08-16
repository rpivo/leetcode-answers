// declare function getDecimalValue that takes in an argument called head that's either of type
//  ListNode or null, and returns a number
function getDecimalValue(head: ListNode | null): number {
  // create mutable variable called val and initiate as an empty string
  let val = '';
  // while current value of head is truthy
  while (head) {
    // set val equal to val plus head.val
    val += head.val;
    // set head equal to head.next
    head = head.next;
  }
  // return the return value of parseInt of string val with base 2
  return parseInt(val, 2);
}