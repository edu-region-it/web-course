/**
 * Created by andruhovski on 12/8/2016.
 **/

function Node(key,value) {    
    this.key = key;
    this.translate=value;
    this.left = null;
    this.right = null;    
}

function BinarySearchTree() {
    this.root = null;
    this.size = 0;    
    this.insert = function (key,value) {        
        if (this.root === null)
        {
            this.root = new Node(key,value);
        }
        else {
            var currentNode = this.root;
            while (true) {
                if (key === currentNode.key) return;
                if (key < currentNode.key) {
                    if (currentNode.left === null) {
                        currentNode.left = new Node(key,value);
                        return;
                    } else
                        currentNode = currentNode.left;
                } else {
                    if (currentNode.right === null) {
                        currentNode.right = new Node(key,value);
                        return;
                    } else
                        currentNode = currentNode.right;
                }
            }
        }
    };
    this.find = function (key) {
        if (this.root === null)
            return undefined;
        var currentNode = this.root;        
        while (true) { 
            if (currentNode.key === key)
                return currentNode.translate;
            if (key < currentNode.key) {
                if (currentNode.left === null)
                    return undefined;
                else
                    currentNode = currentNode.left;
            } else {
                if (currentNode.right === null)
                    return undefined;
                else
                    currentNode = currentNode.right;
            }
        }
    };
    this.runPreOrder= function (currentNode, action) {
        action(currentNode.key);
        if (currentNode.left !== null)
            this.runPreOrder(currentNode.left, action);
        if (currentNode.right !== null)
            this.runPreOrder(currentNode.right, action);
    };
    this.runInOrder= function (currentNode, action) {
        if (currentNode.left !== null)
            this.runInOrder(currentNode.left, action);

        action(currentNode.key);

        if (currentNode.right !== null)
            this.runInOrder(currentNode.right, action);
    };
    this.runPostOrder = function (currentNode, action) {
        if (currentNode.left !== null)
            this.runPostOrder(currentNode.left, action);

        if (currentNode.right !== null)
            this.runPostOrder(currentNode.right, action);

        action(currentNode.key);
    };
    this.traverse = function (type, action) {
        if (this.root === null) return;
        switch (type) {
            case 1:
                this.runPreOrder(this.root, action);
                break;
            case 2:
                this.runInOrder(this.root, action);
                break;
            case 3:
                this.runPostOrder(this.root, action);
                break;
        }

    };
    this.leftMost = function (currentNode) {
        var tmp = currentNode;
        while (tmp.left !== null)
            tmp = tmp.left;
        return tmp;
    };
    this.removeNode = function (node, key) {
        if (node === null) return null; //???
        if (node.key === key) {
            if (node.left == null && node.right == null) return null;
            if (node.left == null) return node.right;
            if (node.right == null) return node.left;

            var tmpNode = this.leftMost(node.right);
            node.key = tmpNode.key;
            node.right = this.removeNode(node.right, tmpNode.key);
            return node;
        }

        else if (key < node.key) {
            node.left = this.removeNode(node.left, key);
            return node;
        }
        else {
            node.right = this.removeNode(node.right, key);
            return node;
        }
    };
  
    this.remove = function (key) {
        this.root = this.removeNode(this.root, key);
    };
  
    this.getSize = function () {
        var s = 0;
        this.runPreOrder(this.root, function () {
            s++;
        });
        return s;
    };
  
    this.getDepthTree=function()
    {
        return this.getDepth(this.root);
    };
  
    this.getDepth = function (node) {
        if(node == null)
            return 0;
        var left = this.getDepth(node.left);
        var right = this.getDepth(node.right);
        return (left > right ? left : right)+1;
    };
}