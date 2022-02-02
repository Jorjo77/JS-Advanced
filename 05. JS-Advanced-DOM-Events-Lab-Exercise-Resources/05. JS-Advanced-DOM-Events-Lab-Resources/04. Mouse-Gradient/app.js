function attachGradientEvents() {
    document.getElementById('gradient').addEventListener('mousemove', onMove);
    const output = document.getElementById('result');

    function onMove(e) {
        const offsetX = e.offsetX;
        const percent = Math.round(offsetX/e.target.clientWidth * 100);

        output.textContent = `${percent}`;
    }
}