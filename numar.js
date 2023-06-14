num=23456
num1=num
A=[]
count=0
while (num!=0){
    count++
    num1=parseInt(num/10)
}
count--
while (num1!=0){
    A[count]=num1%10
    count--
    num1=parseInt(num1/10)
}
console.log(A)