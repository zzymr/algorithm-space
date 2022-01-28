#include <stdio.h>

int data[10]; //充当指针域
int next[10]; // 充当数据域

/**
 * @deprecated 在inx指针地址下插入p节点，p节点的值为val
 * @param inx 
 * @param p 
 * @param val 
 */
void add (int inx, int p, int val) {
  next[inx] = p;
  data[p] = val;
  return ;
}

int main () {
  int head = 3;
  data[3] = 0;
  add(3, 5, 1);
  add(5, 2, 2);
  add(2, 6, 7);
  add(6, 7, 20);
  add(7, 8, 100);
  int p = head;
  while(p != 0) {
    printf("%d->", data[p]);
    p = next[p];
  }
  printf("\n");
  return 0;
}

