function silentGear() {
  const sgItems = [
    "silentgear:blueprint_package",
    "silentgear:blueprint_book",
    "silentgear:guide_book",
  ];

  //Remove from JEI

  sgItems.map((item) =>
    RecipeViewerEvents.removeEntries("item", (event) => {
      event.remove(item);
    })
  );

  console.log("SilentGear JEI Cleaned");
}

silentGear();
