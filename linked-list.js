/** Node: node for a singly linked list. */

const { createTestScheduler } = require("jest");

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let VAL = new Node(val)
    if(!this.head) {
      this.head = VAL;
      this.tail = VAL;
    }
    this.tail.next = VAL;
    this.tail = VAL;
    this.length ++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let VAL = new Node(val);
    VAL.next = this.head
    this.head = VAL;
    this.length ++;
  }

  /** pop(): return & remove last item. */

  pop() {
    try{
      const T = this.tail
      let currentVal = this.head
      if(!this.head) {
        throw new Error("Cannot remove item from empty list")
      }
      if(this.length === 1) {
        this.head = null;
        this.tail = null;
        this.length = 0;
        return T.val;
      }
      while(currentVal.next !== T) {
        currentVal = currentVal.next
      }
      currentVal.next = null;
      this.tail = currentVal;
      this.length --;
      return T.val;
    } catch (err) {
        return err;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    try{
      if(this.length === 0) {
        throw new Error("Cannot remove item from empty list")
      }
      const H = this.head.val
      if(this.length === 1) {
        this.head = null;
        this.tail = null;
        this.length = 0;
        return H
      }
      this.head = this.head.next
      this.length --;
      return H;
    } catch(err){
        return err;
    }

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    try{
      let i = 0
      let currentVal = this.head
      if(idx > this.length - 1 || idx < 0) {
        throw new Error("Index not in list")
      }
      while(i !== idx) {
        i ++
        currentVal = currentVal.next
      }
      return currentVal.val;
    } catch(err){
      return err;
    }

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    try{
      let i = 0
      let currentVal = this.head
      if(idx > this.length - 1 || idx < 0) {
        throw new Error("Invalid index")
      }
      while(i !== idx) {
        i ++
        currentVal = currentVal.next
      }
      currentVal.val = val
    } catch(err){
      return err;
    }

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    try{
      let i = 0
      let currentVal = this.head
      if(idx > this.length - 1 || idx < 0) {
        throw new Error("Invalid index")
      }
      if(idx === 0) {
        this.unshift(val);
        return;
      }
      while(i !== idx - 1) {
        i ++
        currentVal = currentVal.next
      }
      const next = currentVal.next;
      const insert = new Node(val);
      insert.next = next;
      currentVal.next = insert;
      this.length ++;
    } catch(err){
      return err;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    try{
      let i = 0
      let currentVal = this.head
      let next;
      let previous;
      if(idx > this.length - 1 || idx < 0) {
        throw new Error("Index not in list")
      }
      while(i !== idx) {
        previous = currentVal
        i ++
        currentVal = currentVal.next
      }
      if(!currentVal.next) {
        previous.next = null
        this.tail = previous
      }
      else {
        previous.next = currentVal.next
      }
      const val = currentVal.val
      this.length --;
      return val;
    } catch(err){
      return err;
    }

  }
  }

  /** average(): return an average of all values in the list */

  average() {
    
  }
}

module.exports = LinkedList;
