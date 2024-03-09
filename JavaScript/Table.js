let n = prompt("Write the number you want to print the table of");
n = parseInt(n);

for (i = n; i <= n * 10; i += n) {
  console.log(i);
}
