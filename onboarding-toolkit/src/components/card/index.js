import { h } from "preact";
import style from "./style.css";

const Card = () => (
  <header class={style.card}>
    <div >
      <img class={style.image} src="https://lorempixel.com/100/100/cats" alt="Profile picture" />
    </div>
    <div>
      <div>Name</div>
      <div>Role</div>
      <div>Location</div>
    </div>

    <svg width="300px" height="300px" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
      <clipPath id="myCircle">
        <circle cx="150" cy="150" r="100" stroke="blue" stroke-width="0" fill="none" />
      </clipPath>
      <circle clip-path="url(#mycircle)" cx="150" cy="150" r="100" stroke="blue" stroke-width="0" fill="#369" />
      <path clip-path="url(#myCircle)" d="M150,150 150,0 300,0" fill="#ddd" />
      <circle clip-path="url(#mycircle)" cx="150" cy="150" r="80" stroke="blue" stroke-width="0" fill="#fff" />
    </svg>
  </header>
);

export default Card;

/*

0 0
1 1
2 2
3 3
4 4
5 5
6 6
7 7
8 8
9 9
A 10
B 11
C 12
D 13
E 14
F 15

10

1 * 2 + 0

FF = 255

15 * 16 + 15 = 255

#FFF = #FFFFFF = rgb(255, 255, 255)

*/