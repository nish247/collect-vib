import React from 'react';


class VibrationComponent extends React.Component {
    vibrateDevice = () => {
      if ("vibrate" in navigator) {
        // バイブレーションのパターンを定義します。
        // パターンはミリ秒単位の配列で、奇数インデックスは振動の間隔、偶数インデックスは振動の長さを表します。
        // この例では、100ミリ秒の振動、次に100ミリ秒の休止、その後500ミリ秒の振動です。
        navigator.vibrate([100, 100, 500]);
      } else {
        console.log("このデバイスはバイブレーションをサポートしていません。");
      }
    }
  
    render() {
      return (
        <div>
          <button onClick={this.vibrateDevice}>デバイスをバイブレーションさせる</button>
        </div>
      );
    }
  }
  
  export default VibrationComponent;