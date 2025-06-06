.joystick-arrow:nth-of-type(3) {
  position: absolute;
  left: 55px;

  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;

  border-left: 10px solid var(--joystick-color);
}

.joystick-arrow:nth-of-type(4) {
  position: absolute;
  right: 55px;

  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;

  border-right: 10px solid var(--joystick-color);
}

#note {
  grid-row: 3;
  grid-column: 2;
  text-align: center;
  font-size: 0.8em;
  color: var(--text-color);
  transition: opacity 2s;
}

a:visited {
  color: inherit;
}

.ball {
  position: absolute;
  margin-top: -5px;
  margin-left: -5px;
  border-radius: 50%;
  background-color: var(--ball-color);
  width: 10px;
  height: 10px;
}

.wall {
  position: absolute;
  background-color: var(--wall-color);
  transform-origin: top center;
  margin-left: -5px;
}

.wall::before,
.wall::after {
  display: block;
  content: "";
  width: 10px;
  height: 10px;
  background-color: inherit;
  border-radius: 50%;
  position: absolute;
}

.wall::before {
  top: -5px;
}
