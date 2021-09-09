import algorithms from "./algorithms";

import "./styles.css";

const {
  findGapInUnsortedArray,
  findSmallestMissingNumberInSortedArray
} = algorithms.searchs.findMissingNumber;

export default function App() {
  return (
    <div className="App">
      <main>
        <h1>Algorithms</h1>
        <section>
          <h2>Search</h2>

          <h3>find missing number in unsorted array without duplicate O(n):</h3>
          <p>input: [1, 2, 4, 6, 3, 7, 8]</p>
          <p>output: {findGapInUnsortedArray([1, 2, 4, 6, 3, 7, 8])}</p>

          <h3>
            find smallest missing number in sorted array without duplicate
            O(log(n)):
          </h3>
          <p>input: [0, 5, 10, 11]</p>
          <p>
            output: {findSmallestMissingNumberInSortedArray([0, 5, 10, 11])}
          </p>
        </section>
      </main>
    </div>
  );
}
