// declare function deleteNodes, which takes in variable called head, which is a ListNode or null,
// a number called m, and a number called n, and returns a ListNode or null
function deleteNodes(head: ListNode | null, m: number, n: number): ListNode | null {
  // this method declares two sets of pointers like in the other solution. In this solution, the 
  // two pointers are curr and tail.


  // create mutable variable called curr and set it equal to head
  let curr = head;
  // create mutable variable called tail and set it equal to head
  let tail = head;

  // this while loop goes through the two phases in one single pass, with the m phase being one 
  // inner while loop and the n phase being another inner while loop

  // it helps to not think of curr and tail as distinct objects, but rather as references to the 
  // same object, since that's what they are

  // while curr is a truthy value
  while (curr) {
    // create mutable variables mCount and nCount, and set them equal to m and n respectively
    let mCount = m, nCount = n;
    // while curr and mCount are both truthy values
    while (curr && mCount) {
      // the curr pointer will always be ahead of the tail pointer.

      // set tail equal to curr
      tail = curr;
      // set curr equal to curr.next
      curr = curr.next;
      // decrement mCount
      mCount--;
    }
    // while curr and nCount are both truthy values
    while (curr && nCount) {
      // the tail pointer doesn't factor in to this loop
      // this is where curr skips ahead of where tail is, and leaves tail behind

      // set curr equal to curr.next
      curr = curr.next;
      // decrement nCount
      nCount--;
    }

    // after the n phase, we then set tail.next, which is pointing to a node that's n nodes 
    // behind, to curr, effectively deleting n number of nodes
    // set tail.next equal to curr
    tail.next = curr;
  }
  return head;
}
