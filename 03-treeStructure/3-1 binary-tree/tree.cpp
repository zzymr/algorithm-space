#include <iostream>
#include <stack>
#include <queue>
#include <map>
#include <set>
#include <vector>
#include <algorithm>
#include <string>

typedef struct Node
{
    int key;
    struct Node *lchild, *rchild;
} Node;

Node *getNewNode(int key)
{
    Node *p = (Node *)
        malloc(sizeof(Node));
    p->key = key;
    p->lchild = p->rchild = nullptr;
    return p;
}

Node *random_insert(Node *root, int key)
{
    if (!root)
    {
        return getNewNode(key);
    }

    if (rand() % 2)
    {
        root->lchild = random_insert(root->lchild, key);
    }
    else
    {
        root->rchild = random_insert(root->rchild, key);
    }

    return root;
}

void pre_order(Node *root)
{
    if (!root)
    {
        return;
    }
    printf("%d ", root->key);
    pre_order(root->lchild);
    pre_order(root->rchild);
}

void in_order(Node *root)
{
    if (!root)
    {
        return;
    }
    in_order(root->lchild);
    printf("%d ", root->key);
    in_order(root->rchild);
}

int main(int argc, char **argv)
{
    if (argc != 2)
    {
        return 0;
    }

    int MAX_N = atoi(argv[1]);
    Node *root = nullptr;
    for (int i = 1; i <= MAX_N; ++i)
    {
        root = random_insert(root, i);
    }
    pre_order(root);
    printf("\n");
    in_order(root);
    printf("\n");
    return 0;
}