#include <stdio.h>

int main()
{
    int num1 = 0;
    int num2 = 1;
    int num_temp;
    int num_next = 1;
    int n=10;
    /*scanf("%d",&n);*/
    if (n>=1)
        printf("%d ",num1);        
    if (n>=2)
        printf("%d ",num2);
    for (int i = 0; i < n-2; i++){
        num_next = num1 + num2;
        printf("%d ",num_next);
        num1 = num2;
        num2 = num_next;
    }
    putchar('\n');
    return 0;
}