import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ closeModal, isModal }) => {
  return (
    <div className={isModal ? styles.modal : styles.out}>
      <div className={isModal ? styles.modalContent : styles.out}>
        <div className={styles.tables}>
          <div className={styles.tableBox}>
            <div className={styles.row}>1x1 = 1</div>
            <div className={styles.row}>1x2 = 2</div>
            <div className={styles.row}>1x3 = 3</div>
            <div className={styles.row}>1x4 = 4</div>
            <div className={styles.row}>1x5 = 5</div>
            <div className={styles.row}>1x6 = 6</div>
            <div className={styles.row}>1x7 = 7</div>
            <div className={styles.row}>1x8 = 8</div>
            <div className={styles.row}>1x9 = 9</div>
            <div className={styles.row}>1x10 = 10</div>
            <div className={styles.row}>1x11 = 11</div>
            <div className={styles.row}>1x12 = 12</div>
          </div>
          <div className={styles.tableBox}>
            <div className={styles.row}>2x1 = 2</div>
            <div className={styles.row}>2x2 = 4</div>
            <div className={styles.row}>2x3 = 6</div>
            <div className={styles.row}>2x4 = 8</div>
            <div className={styles.row}>2x5 = 10</div>
            <div className={styles.row}>2x6 = 12</div>
            <div className={styles.row}>2x7 = 14</div>
            <div className={styles.row}>2x8 = 16</div>
            <div className={styles.row}>2x9 = 18</div>
            <div className={styles.row}>2x10 = 20</div>
            <div className={styles.row}>2x11 = 22</div>
            <div className={styles.row}>2x12 = 24</div>
          </div>
          <div className={styles.tableBox}>
            <div className={styles.row}>3x1 = 3</div>
            <div className={styles.row}>3x2 = 6</div>
            <div className={styles.row}>3x3 = 9</div>
            <div className={styles.row}>3x4 = 12</div>
            <div className={styles.row}>3x5 = 15</div>
            <div className={styles.row}>3x6 = 18</div>
            <div className={styles.row}>3x7 = 21</div>
            <div className={styles.row}>3x8 = 24</div>
            <div className={styles.row}>3x9 = 27</div>
            <div className={styles.row}>3x10 = 30</div>
            <div className={styles.row}>3x11 = 33</div>
            <div className={styles.row}>3x12 = 36</div>
          </div>
          <div className={styles.tableBox}>
            <div className={styles.row}>4x1 = 4</div>
            <div className={styles.row}>4x2 = 8</div>
            <div className={styles.row}>4x3 = 12</div>
            <div className={styles.row}>4x4 = 16</div>
            <div className={styles.row}>4x5 = 20</div>
            <div className={styles.row}>4x6 = 24</div>
            <div className={styles.row}>4x7 = 28</div>
            <div className={styles.row}>4x8 = 32</div>
            <div className={styles.row}>4x9 = 36</div>
            <div className={styles.row}>4x10 = 40</div>
            <div className={styles.row}>4x11 = 44</div>
            <div className={styles.row}>4x12 = 48</div>
          </div>
          <div className={styles.tableBox}>
            <div className={styles.row}>5x1 = 5</div>
            <div className={styles.row}>5x2 = 10</div>
            <div className={styles.row}>5x3 = 15</div>
            <div className={styles.row}>5x4 = 20</div>
            <div className={styles.row}>5x5 = 25</div>
            <div className={styles.row}>5x6 = 30</div>
            <div className={styles.row}>5x7 = 35</div>
            <div className={styles.row}>5x8 = 40</div>
            <div className={styles.row}>5x9 = 45</div>
            <div className={styles.row}>5x10 = 50</div>
            <div className={styles.row}>5x11 = 55</div>
            <div className={styles.row}>5x12 = 60</div>
          </div>
          <div className={styles.tableBox}>
            <div className={styles.row}>6x1 = 6</div>
            <div className={styles.row}>6x2 = 12</div>
            <div className={styles.row}>6x3 = 18</div>
            <div className={styles.row}>6x4 = 24</div>
            <div className={styles.row}>6x5 = 30</div>
            <div className={styles.row}>6x6 = 36</div>
            <div className={styles.row}>6x7 = 42</div>
            <div className={styles.row}>6x8 = 48</div>
            <div className={styles.row}>6x9 = 54</div>
            <div className={styles.row}>6x10 = 60</div>
            <div className={styles.row}>6x11 = 66</div>
            <div className={styles.row}>6x12 = 72</div>
          </div>
          <div className={styles.tableBox}>
            <div className={styles.row}>7x1 = 7</div>
            <div className={styles.row}>7x2 = 14</div>
            <div className={styles.row}>7x3 = 21</div>
            <div className={styles.row}>7x4 = 28</div>
            <div className={styles.row}>7x5 = 35</div>
            <div className={styles.row}>7x6 = 42</div>
            <div className={styles.row}>7x7 = 49</div>
            <div className={styles.row}>7x8 = 56</div>
            <div className={styles.row}>7x9 = 63</div>
            <div className={styles.row}>7x10 = 70</div>
            <div className={styles.row}>7x11 = 77</div>
            <div className={styles.row}>7x12 = 84</div>
          </div>
          <div className={styles.tableBox}>
            <div className={styles.row}>8x1 = 8</div>
            <div className={styles.row}>8x2 = 16</div>
            <div className={styles.row}>8x3 = 24</div>
            <div className={styles.row}>8x4 = 32</div>
            <div className={styles.row}>8x5 = 40</div>
            <div className={styles.row}>8x6 = 48</div>
            <div className={styles.row}>8x7 = 56</div>
            <div className={styles.row}>8x8 = 64</div>
            <div className={styles.row}>8x9 = 72</div>
            <div className={styles.row}>8x10 = 80</div>
            <div className={styles.row}>8x11 = 88</div>
            <div className={styles.row}>8x12 = 96</div>
          </div>
          <div className={styles.tableBox}>
            <div className={styles.row}>9x1 = 9</div>
            <div className={styles.row}>9x2 = 18</div>
            <div className={styles.row}>9x3 = 27</div>
            <div className={styles.row}>9x4 = 36</div>
            <div className={styles.row}>9x5 = 45</div>
            <div className={styles.row}>9x6 = 54</div>
            <div className={styles.row}>9x7 = 63</div>
            <div className={styles.row}>9x8 = 72</div>
            <div className={styles.row}>9x9 = 81</div>
            <div className={styles.row}>9x10 = 90</div>
            <div className={styles.row}>9x11 = 99</div>
            <div className={styles.row}>9x12 = 108</div>
          </div>
          <div className={styles.tableBox}>
            <div className={styles.row}>10x1 = 10</div>
            <div className={styles.row}>10x2 = 20</div>
            <div className={styles.row}>10x3 = 30</div>
            <div className={styles.row}>10x4 = 40</div>
            <div className={styles.row}>10x5 = 50</div>
            <div className={styles.row}>10x6 = 60</div>
            <div className={styles.row}>10x7 = 70</div>
            <div className={styles.row}>10x8 = 80</div>
            <div className={styles.row}>10x9 = 90</div>
            <div className={styles.row}>10x10 = 100</div>
            <div className={styles.row}>10x11 = 110</div>
            <div className={styles.row}>10x12 = 120</div>
          </div>
          <div className={styles.tableBox}>
            <div className={styles.row}>11x1 = 11</div>
            <div className={styles.row}>11x2 = 22</div>
            <div className={styles.row}>11x3 = 33</div>
            <div className={styles.row}>11x4 = 44</div>
            <div className={styles.row}>11x5 = 55</div>
            <div className={styles.row}>11x6 = 66</div>
            <div className={styles.row}>11x7 = 77</div>
            <div className={styles.row}>11x8 = 88</div>
            <div className={styles.row}>11x9 = 99</div>
            <div className={styles.row}>11x10 = 110</div>
            <div className={styles.row}>11x11 = 121</div>
            <div className={styles.row}>11x12 = 132</div>
          </div>
          <div className={styles.tableBox}>
            <div className={styles.row}>12x1 = 12</div>
            <div className={styles.row}>12x2 = 24</div>
            <div className={styles.row}>12x3 = 36</div>
            <div className={styles.row}>12x4 = 48</div>
            <div className={styles.row}>12x5 = 60</div>
            <div className={styles.row}>12x6 = 72</div>
            <div className={styles.row}>12x7 = 84</div>
            <div className={styles.row}>12x8 = 96</div>
            <div className={styles.row}>12x9 = 108</div>
            <div className={styles.row}>12x10 = 120</div>
            <div className={styles.row}>12x11 = 132</div>
            <div className={styles.row}>12x12 = 144</div>
          </div>
        </div>
        <span onClick={closeModal} className={styles.close}>
          &times;
        </span>
      </div>
    </div>
  );
};

export default Modal;
