import s from "./FeedBack.module.css";

const Statistics = ({ good, neutral, bad, onLeaveFeedback }) => {
  const buttons = { good, neutral, bad };
  const b = Object.keys(buttons);

  return (
    <section>
      <div>
        {b.map((button, id) => {
          return (
            <button key={id} type="button" onClick={onLeaveFeedback}>
              {button}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default Statistics;
//  class Statistics extends Component {
//   render() {
//     return <h1>Fdddd</h1>;
//   }
// }

// {
//   /* <li>
//               <p>
//                 Positive feedback:
//                 {() => {
//                   this.countTotalFeedback();
//                 }}
//               </p>
//               </li> */
// }
