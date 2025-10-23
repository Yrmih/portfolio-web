"use client";

export default function HeroVideo() {
  return (
    <div className="absolute inset-0 z-0">
      {/* DESKTOP */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hidden md:block absolute top-0 left-0 w-full h-full object-cover"
        style={{
          transformOrigin: "center",
          transform: "scale(1.2)",
          filter: "brightness(1.6)",
        }}
      >
        <source src="/video/panther.mp4" type="video/mp4" />
      </video>

      {/* TABLET / IPHONE 12–14 */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hidden sm:block md:hidden absolute top-0 left-0 w-full h-full object-cover"
        style={{
          transform: "scale(1)",
          objectPosition: "center top",
          filter: "brightness(1.5)",
        }}
      >
        <source
          src="/video/Mystical_Panther_Emerges_From_Darkness.mp4"
          type="video/mp4"
        />
      </video>

      {/* MOBILE (Galaxy S8, S9 etc) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="block sm:hidden absolute top-0 left-0 w-full h-full"
        style={{
          objectFit: "contain",
          backgroundColor: "black",
          filter: "brightness(1.4)",
        }}
      >
        <source
          src="/video/Mystical_Panther_Emerges_From_Darkness.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}
