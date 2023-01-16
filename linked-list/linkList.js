class Node {
  constructor(data = null, next = null) {
    this.data = data;
    this.next = next;
  }
}
class linkedList {
  constructor(){
    this.head = null;
    this.tail=null;
  }
  get getHead(){
    return this.head;
  }
  get getTail(){
    return this.tail;
  }
  prepend(value) {
    this.head = new Node(value, this.head);
  }
  append(value) {
    if (this.head == null) this.prepend(value);
    else {
      let tmp = this.head;
      while (tmp.next != null) tmp = tmp.next;
      tmp.next = new Node(value, null);
      this.tail = tmp.next;
    }
  }
  size() {
    let count = 1;
    let tmp = this.head;
    while (tmp.next != null) {
      tmp = tmp.next;
      count++;
    }
    return count;
  }
  at(index) {
    let tmp = this.head;
    let count = 0;
    while (tmp.next != null) {
      if (count == index) return tmp;
      else {
        tmp = tmp.next;
        count++;
      }
    }
    return "index not found";
  }
  pop() {
    if (this.head == null) return false;
    else if (this.tail == null) {
      this.head = null;
    } else {
      let tmp = this.head;
      while (tmp.next.next != null) {
        tmp = tmp.next;
      }
      this.tail = tmp;
      this.tail.next = null;
    }
  }
  contains(value) {
    let tmp = this.head;
    if (this.head == null) return false;
    if (this.head.data == value) return true;
    while (tmp.next != null) {
      tmp = tmp.next;
      if (tmp.data == value) {
        return true;
      }
    }
    return false;
  }
  find(value) {
    if (this.head == null) return null;
    if (this.head.data == value) return 0;
    let index = 1;
    let tmp = this.head;
    while (tmp.next != null) {
        tmp = tmp.next;
        if(tmp.data == value){
            return index;
        }
        index++;
    }
    return -1;
  }
  insertAt(value, index){
    if(index == 0) this.prepend(value);
    let count = 0;
    let prev = null;
    let cur = this.head;
    while(cur != null && count< index){
        prev = cur;
        cur = cur.next;
        count++;
    }
    if(cur!= null){
        prev.next= new Node(value, cur);
    }
    else return "index out of bounds";
  }
  removeAt(index){
    if(this.head==null) return "cannot delete";
    if(index ==0){
        this.head = this.head.next;
        return;
    }
    let count = 0;
    let prev = null;
    let cur = this.head;
    while(cur != null && count< index){
        prev = cur;
        cur = cur.next;
        count++;
    }
    if(cur!= null){
        prev.next = cur.next;
    }
    else{
        return "index out of bounds";
    }
  }
  toString(){
    if (this.head == null) return 'null';
    let result = '';
    let tmp = this.head;
    while(tmp != null){
        result += `( ${tmp.data} ) -> `;
        tmp = tmp.next;
    }
    result += 'null';
    return result;
  }
}
const l = new linkedList();
console.log(l.toString());
l.append(2);
l.append(3);
l.append(4);
l.append(5);
l.prepend(1);
console.log(l.toString());
console.log(l.size());
console.log(l.head);
console.log(l.tail);
console.log(l.contains(2)); // true
console.log(l.contains(6)); // false
console.log(l.find(2)); // 1
console.log(l.find(56)); // -1
l.pop();
console.log(l.toString());// 1-2-3-4-null
l.insertAt(6, 2)
console.log(l.toString());//1-2-6-3-4-null

l.removeAt(2)
console.log(l.toString());//1-3-4-null
console.log('hi');