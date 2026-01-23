import { useState } from "react";

export function Switch({ label, initialState = false, onChange }: { label: string; initialState: boolean; onChange: (newState: boolean) => void }) {
  const [state, setState] = useState(initialState);

  const toggleState = () => {
    const newState = !state;
    setState(newState);
    onChange(newState);
  };

  return (
    <label className="switch">
      <button className={`switch-btn ${state ? 'active' : ''}`} aria-pressed={state} onClick={toggleState}>
        <span className="switch-btn-handle"></span>
      </button>
      <span className="label-text">{label}</span>
    </label>
  )
}