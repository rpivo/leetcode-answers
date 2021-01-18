function deleteNodes(head: ListNode | null, m: number, n: number): ListNode | null {
  function addNode() {
    resultPointer.next = new ListNode()
    resultPointer = resultPointer.next  
  }
  
  const result = new ListNode()
  
  const phases = {
    keep: m,
    delete: n,
  }
  
  const toggle = {
    keep: 'delete',
    delete: 'keep',
  }

  let counter = 1
  let phase = 'keep'
  let originalPointer = head
  let resultPointer = result

  while (originalPointer?.val) {
    if (counter > phases[phase]) {
      phase = toggle[phase]
      counter = 1
    }

    if (phase === 'keep') {
      resultPointer.val = originalPointer.val
      if (counter !== phases[phase] && originalPointer.next?.val) addNode()
    } else if (counter === phases[phase] && originalPointer.next?.val) {
      addNode()
    }
  
    originalPointer = originalPointer.next
    counter++
  }

  return result
}
