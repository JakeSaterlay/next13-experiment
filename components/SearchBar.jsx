"use client";

export default function SearchBar(props) {
  return (
    <div className="p-10">
      <input
        placeholder="Search..."
        type="search"
        className="p-4 text-black"
        onChange={props.onChange}
      />
    </div>
  );
}
