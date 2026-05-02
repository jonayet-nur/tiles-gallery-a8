"use client";

const Marquee = () => {
  return (
    <div className="w-full overflow-hidden bg-linear-to-br from-[#0f172a] via-[#111827] to-[#020617] text-white my-4 py-5">
      <div className="marquee whitespace-nowrap">
        <span className="mx-8">
          New Arrivals: Tile Name
        </span>
        <span className="mx-8">
          Weekly Feature: Modern Geometric Patterns
        </span>
        <span className="mx-8">
          Join the Community
        </span>

        {/* duplicate for smooth loop */}
        <span className="mx-8">
          New Arrivals: Tile Name
        </span>
        <span className="mx-8">
          Weekly Feature: Modern Geometric Patterns
        </span>
        <span className="mx-8">
          Join the Community
        </span>
      </div>
    </div>
  );
};

export default Marquee;