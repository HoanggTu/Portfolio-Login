particlesJS("particles-js", {
    particles: {
      number: {
        value: 80,
        density: { enable: true, value_area: 800 },
      },
      color: { value: "#9932CC" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 250,
        color: "#9932CC",
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 20,
        direction: "none",
        random: true,
        out_mode: "out",
      },
    },
  });