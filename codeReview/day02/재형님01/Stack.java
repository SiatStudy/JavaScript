class Stack implements StackInterface{
    private int arr[]; // 배열을 담음
    private int stackTop; // 스택 맨위
    private int totalStackData; // 몇개 넣을래?

    // Stack 초기화
    public Stack(int size) {
        arr = new int[size];
        totalStackData = size;
        stackTop = -1;
    }

    // 데이터 삽입
    public void push(int insData) {
        if (isFull()) {
            System.out.println("오버플로우 발생");
            System.exit(-1);
        }
        // 정상적인 값 삽입
        System.out.println("넣은 값 : " + insData);
        arr[++stackTop] = insData;
    }

    // 최상단 데이터 Get
    public int pop() {
        if (isEmpty()) {
            System.out.println("언더플로우 발생");
            System.exit(-1);
        }

        System.out.println("제거된 값 : " + peek());
        return arr[stackTop--];
    }
    // Stack의 최상단 데이터 뭐있음?
    public int peek() {
        if (!isEmpty()) {
            return arr[stackTop];
        } else {
            System.exit(-1);
        }
        return -1;
    }

    // Stack 크기 호출
    public int size() {
        return stackTop + 1;
    }

    // Stack 비어있음?
    public boolean isEmpty() {
        return stackTop == -1;
    }

    // Stack 가득참?
    public boolean isFull() {
        return stackTop == totalStackData - 1;
    }
}
