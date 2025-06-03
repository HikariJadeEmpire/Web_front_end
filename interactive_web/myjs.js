const cube = document.getElementById("cube");

    document.addEventListener("mousemove", (e) => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;

        const rotateY = x * 360;
        const rotateX = -y * 360;

        cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });