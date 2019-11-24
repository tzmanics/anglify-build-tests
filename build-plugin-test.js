module.exports = function testPlugin() {
  return {
    name: "test",
    finally: () => {
      console.log("test worked?");
    }
  };
};
