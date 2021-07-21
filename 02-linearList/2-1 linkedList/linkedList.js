// 链表实现

function defaultEquals(a, b) { 
    return a === b; 
}
class Node {
    constructor(element) {
        this.val = element;
        this.next = undefined; 
    }
}
class LinkedList {
    constructor(equalsFn = defaultEquals) { 
        this.count = 0; 
        this.head = undefined;
        this.equalsFn = equalsFn;
    }
    // 向链表尾部添加一个新元素。
    push(element) {
        const node = new Node(element);
        let current;
        if(this.head == null) {  // =》(this.head === undefined || head === null
            this.head = node;
        } else {
            current = this.head;
            while(current.next != null) {
                current = current.next;
            }
            current.next = node;
        }
        this.count++;
    }
    // 向链表的特定位置插入一个新元素。
    insert(element, position) {

    }
    // 返回链表中特定位置的元素。如果链表中不存在这样的元素，则返回 undefined
    getElementAt(index) {

    }
    // 从链表中移除一个元素
    remove(element) {
        
    }
    // 返回元素在链表中的索引。如果链表中没有该元素则返回-1。
    indexOf(element) {

    }
    // 从链表的特定位置移除一个元素
    removeAt(position) {

    }
    // 如果链表中不包含任何元素，返回 true，如果链表长度大于 0则返回 false。
    isEmpty() {
    
    }
    // 返回链表包含的元素个数，与数组的 length 属性类似
    size() {

    }
    // 返回表示整个链表的字符串。由于列表项使用了 Node 类，就需要重写继承自 JavaScript 对象默认的 toString 方法，让其只输出元素的值
    toString() {

    }

}

const list = new LinkedList(); 
list.push(15); 
list.push(10);

console.log('list:', list);
debugger