const ArkanoidView = {
    props: ["testmodel"],
    created() {
        this.paint = this.paint.bind(this);
    },
    componentDidUpdate() {
        this.paint();
    },
    paint() {
    const { width, height, rotation } = ;
    this.width = this.model.width;
    this.width = this.model.width;
    this.width = this.model.width;
    const context = this.$refs.canvas.getContext("2d");
    context.clearRect(0, 0, this.width, this.height);
    context.save();
    context.translate(100, 100);
    context.rotate(this.rotation, 100, 100);
    context.fillStyle = "#F00";
    context.fillRect(-50, -50, 100, 100);
    context.restore();
  },
  render() {
    const { width, height } = this.props;
    return (
      <canvas
        ref="canvas"
        width={width}
        height={height}
      />
    );
  }
}