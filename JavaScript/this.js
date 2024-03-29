let student = {
  name: "Dhiraj",
  chem: 93,
  phy: 78,
  math: 87,
  getAvg() {
    let avg = (this.chem + this.phy + this.math) / 3;
    return avg;
  },
};

console.log(student.getAvg());
