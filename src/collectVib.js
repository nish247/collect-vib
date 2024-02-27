import React, { useState, useEffect } from 'react';

const VibrationApp = () => {
  const [repeatCount, setRepeatCount] = useState(51);
  const [countdown, setCountdown] = useState(5);
  let vibrationInterval;
  let audioContext = new (window.AudioContext || window.webkitAudioContext)();
  let oscillator = null;

  useEffect(() => {
    const startButton = document.getElementById("startVibrate");
    const stopButton = document.getElementById("stopVibrate");
    const repeatCountInput = document.getElementById("repeatCountInput");

    startButton.addEventListener("click", startVibration);
    stopButton.addEventListener("click", stopVibration);
    repeatCountInput.addEventListener("change", () => {
      setRepeatCount(parseInt(repeatCountInput.value, 10));
    });

    return () => {
      startButton.removeEventListener("click", startVibration);
      stopButton.removeEventListener("click", stopVibration);
      repeatCountInput.removeEventListener("change", () => {
        setRepeatCount(parseInt(repeatCountInput.value, 10));
      });
    };
  }, []);

  function playSound(frequency, duration, callback) {
    oscillator = audioContext.createOscillator();
    oscillator.type = 'sine'; 
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.connect(audioContext.destination);
    oscillator.start();
    
    oscillator.stop(audioContext.currentTime + duration / 1000);

    setTimeout(function() {
      oscillator.stop();
      callback();
    }, duration);
  }

  function startVibration() {
    if (countdown > 0) {
      updateCountdown(countdown);
      setCountdown(prevCountdown => prevCountdown - 1);
      setTimeout(startVibration, 1000);
      return;
    }

    if (repeatCount <= 0) {
      return;
    }

    playSound(2000, 50, function() {
      startVibrating();
    });
  }

  function startVibrating() {
    const pattern = [200, 200, 200, 200, 1000, 2000];
    navigator.vibrate(pattern);

    vibrationInterval = setTimeout(function() {
      startVibration();
    }, pattern.reduce((a, b) => a + b, 0));

    setRepeatCount(prevRepeatCount => prevRepeatCount - 1);
  }

  function stopVibration() {
    navigator.vibrate(0);
    clearTimeout(vibrationInterval);
    if (oscillator) {
      oscillator.stop();
    }
    setRepeatCount(parseInt(document.getElementById("repeatCountInput").value, 10));
    setCountdown(5);
  }

  function updateCountdown(seconds) {
    document.getElementById("countdown").innerText = `カウントダウン: ${seconds} 秒`;
  }

  return (
    <div>
      <button id="startVibrate" onClick={startVibration}>スタート</button>
      <button id="stopVibrate" onClick={stopVibration}>ストップ</button>
      <label htmlFor="repeatCountInput">繰り返し回数: </label>
      <input type="number" id="repeatCountInput" value={repeatCount} />
      <div id="countdown">カウントダウン: {countdown} 秒</div>
    </div>
  );
};

export default VibrationApp;
