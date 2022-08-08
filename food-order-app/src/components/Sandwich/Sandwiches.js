import SandwichSummary from "./SandwichSummary";
import AvailableSandwiches from "./AvailableSandwiches";

import classes from './Sandwiches.module.css'
export default function Sandwiches() {
  return (
      <div className={classes.flex}>
        <SandwichSummary />
        <AvailableSandwiches />
      </div>
  );
}
