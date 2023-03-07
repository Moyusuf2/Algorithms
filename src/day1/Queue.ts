type Node<T> = {
    value: T,
    next?: Node<T>,
}
export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        if(!this.tail) {
            this.tail = this.head = {value: item} as Node<T>;
        }
    }
    deque(): T | undefined {
        if(!this.head){
            return undefined;
        }

        this.length--;

        const head = this.head;
        this.head = this.head.next;

        return head.value;
    }
    peek(): T | undefined {

    }
}
