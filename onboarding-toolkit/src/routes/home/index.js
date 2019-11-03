import { h } from "preact";
import Card from "../../components/card";
import style from "./style";

const Home = () => (
  <div class={style.home}>
    <h1>Home</h1>
    <p>This is the Home component.</p>

    <Card />

    <section>
      <h2>Basic Info</h2>
      <ul>
        <li>Picture</li>
        <li>Name</li>
        <li>Title</li>
      </ul>
    </section>

    <section>
      <h2>Getting Started</h2>
      <ul>
        <li>Permissions</li>
        <li>Software/Tools</li>
        <li>Training</li>
      </ul>
    </section>

    <section>
      <h2>Team Info</h2>
      <ul>
        <li>Manager</li>
        <li>Team Name</li>
        <li>Team Members</li>
      </ul>
    </section>

    <section>
      <h2>Organization Info</h2>
      <ul>
        <li>Structure</li>
        <li>Products</li>
        <li>Projects/Planning</li>
      </ul>
    </section>

    <section>
      <h2>Location Info</h2>
      <ul>
        <li>Name/Address</li>
        <li>QuickLinks</li>
        <li>Events</li>
      </ul>
    </section>
  </div>
);

export default Home;
