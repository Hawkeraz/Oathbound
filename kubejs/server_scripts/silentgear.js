function silentGear() {
  const sgItems = [
    "silentgear:blueprint_package",
    "silentgear:blueprint_book",
    "silentgear:guide_book",
  ];

  ServerEvents.recipes((event) => {
    sgItems.forEach((item) => event.remove({ output: item }));
    event.remove({ type: "silentgear:salvaging", output: "minecraft:diamond" });
  });

  console.log("SilentGear recipes removed");
}

silentGear();
