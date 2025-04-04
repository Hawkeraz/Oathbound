function clearWaystones() {
    ServerEvents.recipes((event) => {
      event.remove({ mod: "waystones" });
    });
  console.log("Waystones recipes removed");
}

clearWaystones(); //clear mod recipes
