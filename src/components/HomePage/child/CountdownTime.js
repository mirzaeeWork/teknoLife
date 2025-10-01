"use client";
import React from "react";

/* --- helpers --- */
const pad = (n) => String(n).padStart(2, "0");
const hmsToSeconds = (hms = "00:00:00") => {
  const [h = 0, m = 0, s = 0] = hms.split(":").map(Number);
  return h * 3600 + m * 60 + s;
};
const formatSeconds = (total) => {
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  return `${pad(h)}:${pad(m)}:${pad(s)}`;
};

/* --- hook: countdown --- */
function useCountdown(initialSeconds, onFinish) {
  const startRef = React.useRef(initialSeconds || 0);
  const [sec, setSec] = React.useState(initialSeconds || 0);

  React.useEffect(() => {
    setSec(initialSeconds || 0);
    startRef.current = initialSeconds || 0;

    if (!initialSeconds) return;

    const id = setInterval(() => {
      setSec((prev) => {
        if (prev <= 1) {
          clearInterval(id);
          onFinish?.();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(id);
  }, [initialSeconds, onFinish]);

  return {
    seconds: sec,
    formatted: formatSeconds(sec),
    // اگر نوار پیشرفت خواستی:
    percentElapsed:
      startRef.current > 0
        ? Math.min(100, Math.round(((startRef.current - sec) / startRef.current) * 100))
        : 100,
  };
}

/* --- tiny component for <time> --- */
export function CountdownTime({ hms, className }) {
  const initial = React.useMemo(() => hmsToSeconds(hms), [hms]);
  const { formatted } = useCountdown(initial);
  return (
    <time className={className} dateTime={formatted}>
      {formatted}
    </time>
  );
}
