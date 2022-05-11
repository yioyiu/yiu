let sky = document.getElementById("sky");
        let mountain = document.getElementById("mountain");
        let house = document.getElementById("house");
        let tree = document.getElementById("tree");
        window.addEventListener('scroll', function () {
            var value = window.scrollY;
            mountain.style.top = value * -0.1 + 'px';
            house.style.top = value * -0.2 + 'px';
            tree.style.top = value * -0.3 + 'px';
        })