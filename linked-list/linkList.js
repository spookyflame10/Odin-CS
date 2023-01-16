class Node {
  constructor(data = null, next = null) {
    this.data = data;
    this.next = next;
  }
}
class linkedList {
  head = new Node();
  tail = new Node();
  prepend(value) {
    this.head = value;
  }
  append(value) {
    this.tail = value;
    // if (head == null) this.prepend(value);
    // else {
    //   let tmp = head;
    //   while (tmp.next != null) tmp = tmp.next;
    //   tmp.next = new Node(value, null);
    // }
  }
  size(){
    let count =0;
    let tmp = this.head;
    while(tmp.next!= null){
        tmp = tmp.next;
        count ++;
    }
    return count;
  }
  head(){
    return this.head;
  }
  tail(){
    return this.tail;
  }
  at(index){
    let tmp = this.head;
    
  }
}
const l = new linkedList();