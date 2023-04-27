public class Main {
        //생성자를 추가해서 스택을 호출해버릴까..?

    public static void main(String[] args) {

        Stack stack = new Stack(3);

        insertElement(stack, 1);// Stack에 1 삽입
        insertElement(stack, 2);// Stack에 2 삽입

        removeElement(stack); // 상단 요소 제거(2)
        removeElement(stack); // 최상위 요소 제거(1)

        insertElement(stack, 3); // Stack에 3 삽입

        printTopAndSize(stack); // 출력

        removeElement(stack); // 최상위 요소 제거(3)
        checkIfEmpty(stack); // Stack이 비어있는가?
    }

    private static void insertElement(Stack stack, int value) {
        stack.push(value);
    }

    private static void removeElement(Stack stack) {
        stack.pop();
    }

    private static void printTopAndSize(Stack stack) {
        System.out.println("스택 최상단 : " + stack.peek());
        System.out.println("현재 스택 개수 : " + stack.size());
    }

    private static void checkIfEmpty(Stack stack) {
        if (stack.isEmpty()) {
            System.out.println("스택 비어있음");
        } else {
            System.out.println("스택 비어있지 않음");
        }
    }
}
