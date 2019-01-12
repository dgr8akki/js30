import React, {Component} from 'react';
import style from './cssClock.module.scss';

class cssClock extends Component {
  componentDidMount() {
    document.title = "CSS Clock | Aakash Pahuja";
    this.setTime();
  }

  setTime() {
    const secHand = document.querySelector('.secHand');
    const minHand = document.querySelector('.minHand');
    const hourHand = document.querySelector('.hourHand');

    setInterval(
      () => {
        const now = new Date();
        secHand.style.transform = `rotate(${(now.getSeconds() * 6) + 90}deg)`;
        minHand.style.transform = `rotate(${(now.getMinutes() * 6) + 90}deg)`;
        hourHand.style.transform = `rotate(${(now.getHours() * 30) + 90}deg)`;
      }, 1000
    );
  }

  render() {
    return (
      <div className={style.wrapper}>
        <div className={style.clock}>
          <div className={style.clockFace}>
            <div className={`${style.hand} ${style.hourHand} hourHand`}/>
            <div className={`${style.hand} ${style.minHand} minHand`}/>
            <div className={`${style.hand} ${style.secHand} secHand`}/>
            <div className={style.handHolder}/>
          </div>
        </div>
      </div>
    )
  }
}

export default cssClock;
