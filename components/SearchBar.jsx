"use client";

export default function SearchBar(props) {
  return (
    <div>
      <input className="border border-white-300" onChange={props.onChange} />
    </div>
  );
}
