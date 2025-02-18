
class Node {

    int data;
    Node left, right;

    public Node(int data) {
        this.data = data;
        left = right = null;
    }

}

class binarytree {

    public static void main(String[] args) {

    }
    Node root;

    binarytree() {
        root = null;
    }

    Node insert(Node node, int data) {
        if (node == null) {
            node = new Node(data);
            return node;
        }
        if (data < node.data) {
            node.left = insert(node.left, data);
        } else if (data > node.data) {
            node.right = insert(node.right, data);

        }
        return node;
    }
}
