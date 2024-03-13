const student = {
  name: "Dhiraj",
  eng: 87,
  phy: 75,
  maths: 85,
  getAvg() {
    let avg = (this.eng + this.phy + this.maths) / 3;
    console.log(avg);
  },
};
student.getAvg();
