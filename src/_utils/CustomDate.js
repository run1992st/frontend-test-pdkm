export default class CustomDate extends Date {
  
  constructor(dateString) {
    super(dateString);

    this.minutes = this.getMinutes();
    this.hour = this.getHours();
    this.date = this.getDate();
    //Date.getMonth() returned 0-11
    this.month = this.getMonth() + 1;
    this.years = this.getFullYear();
  }

  //utility function for handle single digit number and transform it by add 0 in front
  digitFormatter(number) {
    return number < 10 ? "0" + number.toString() : number;
  }

  get dateMonthYear() {
    return (
      this.digitFormatter(this.date) +
      "/" +
      this.digitFormatter(this.month) +
      "/" +
      this.years +
      " " +
      this.digitFormatter(this.hour) +
      ":" +
      this.digitFormatter(this.minutes)
    );
  }

  //-------------Thai Format -----------------
  get thaiFormat() {
    //Date.getMonth() returned 0-11
    const thaiMonth = this.getThaiMonth(this.getMonth());
    const thaiYear = this.getThaiYear(this.getFullYear());

    return `${this.date} ${thaiMonth} ${thaiYear}`;
  }

  getThaiMonth(monthNumber) {
    const thaiMonths = [
      "มกราคม",
      "กุมภาพันธ์",
      "มีนาคม",
      "เมษายน",
      "พฤษภาคม",
      "มิถุนายน",
      "กรกฎาคม",
      "สิงหาคม",
      "กันยายน",
      "ตุลาคม",
      "พฤศจิกายน",
      "ธันวาคม",
    ];
    return thaiMonths[monthNumber];
  }

  getThaiYear(years) {
    console.log(years);
    return years + 543;
  }
  //-------------------------------------------

  //-------------Get Numbers of Date in the month -----------------
  get maxMonthDate() {
    const thirtiesDayMonths = [4, 6, 9, 11];
    const thirtyOneDayMonths = [1, 3, 5, 7, 8, 10, 12];

    console.log(thirtiesDayMonths.indexOf(this.month));

    if (thirtiesDayMonths.indexOf(this.month) !== -1) {
      return 30;
    } else if (thirtyOneDayMonths.indexOf(this.month) !== -1) {
      return 31;
    } else {
      //Febuary Case
      return this.years % 4 === 0 && this.years % 100 !== 0 ? 29 : 28;
    }
  }
  //-------------------------------------------

  //-------------Get Quarter by The Month -----------------
  get quarter() {
    return Math.ceil(this.month / 3);
  }
}
