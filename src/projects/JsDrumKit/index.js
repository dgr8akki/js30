import React, {Component} from 'react';
import style from './JsDrumKit.module.scss';
import {clap , boom, hihat, kick, openhat, ride, snare, tink, tom} from './sounds';

class JsDrumKit extends Component {
  componentDidMount() {
    document.title = "JS Drum Kit | Aakash Pahuja";
    window.addEventListener("keydown", e => this.keyPressHandler(e.keyCode));
  }

  render() {
    return (
      <div className={style.wrapper}>
        <div className={style.keys}>
          <div data-key="65" className={style.key}>
            <kbd>A</kbd>
            <span className={style.sound}>clap</span>
          </div>
          <div data-key="83" className={style.key}>
            <kbd>S</kbd>
            <span className={style.sound}>hihat</span>
          </div>
          <div data-key="68" className={style.key}>
            <kbd>D</kbd>
            <span className={style.sound}>kick</span>
          </div>
          <div data-key="70" className={style.key}>
            <kbd>F</kbd>
            <span className={style.sound}>openhat</span>
          </div>
          <div data-key="71" className={style.key}>
            <kbd>G</kbd>
            <span className={style.sound}>boom</span>
          </div>
          <div data-key="72" className={style.key}>
            <kbd>H</kbd>
            <span className={style.sound}>ride</span>
          </div>
          <div data-key="74" className={style.key}>
            <kbd>J</kbd>
            <span className={style.sound}>snare</span>
          </div>
          <div data-key="75" className={style.key}>
            <kbd>K</kbd>
            <span className={style.sound}>tom</span>
          </div>
          <div data-key="76" className={style.key}>
            <kbd>L</kbd>
            <span className={style.sound}>tink</span>
          </div>
        </div>
        <audio data-key="65">
          <source src={clap} type="audio/wav"/>
        </audio>
        <audio data-key="83">
          <source src={hihat} type="audio/wav"/>
        </audio>
        <audio data-key="68">
          <source src={kick} type="audio/wav"/>
        </audio>
        <audio data-key="70">
          <source src={openhat} type="audio/wav"/>
        </audio>
        <audio data-key="71">
          <source src={boom} type="audio/wav"/>
        </audio>
        <audio data-key="72">
          <source src={ride} type="audio/wav"/>
        </audio>
        <audio data-key="74">
          <source src={snare} type="audio/wav"/>
        </audio>
        <audio data-key="75">
          <source src={tom} type="audio/wav"/>
        </audio>
        <audio data-key="76">
          <source src={tink} type="audio/wav"/>
        </audio>
      </div>
    )
  }

  keyPressHandler(keyCode) {
    const element = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`div[data-key="${keyCode}"]`);
    const keys = document.querySelectorAll(`.${style.keys}`);
    if (!element) return;
    element.currentTime = 0;
    element.play();
    key.classList.add(style.playing);
    keys.forEach(k => k.addEventListener("transitionend", e => this.handleTransition(key, e)));
  }

   handleTransition(k, e) {
    if (e.propertyName !== "transform") return;
    k.classList.remove(style.playing);
  }
}

JsDrumKit.propTypes = {};

JsDrumKit.defaultProps = {};

export default JsDrumKit;
